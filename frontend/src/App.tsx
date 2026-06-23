import { useMemo, useState } from 'react'
import Header from './components/Header'
import ReferenceUploader from './components/ReferenceUploader'
import Controls from './components/Controls'
import PromptPreview from './components/PromptPreview'
import Gallery from './components/Gallery'
import { buildPrompt, seedsFor } from './lib/promptBuilder'
import { pollinationsUrl } from './lib/pollinations'
import type { GeneratedImage, GenSettings, ReferenceImage } from './types'

export default function App() {
  const [references, setReferences] = useState<ReferenceImage[]>([])
  const [subject, setSubject] = useState('')
  const [settings, setSettings] = useState<GenSettings>({
    product: 'sticker',
    variance: 4,
    accent: '#e4572e',
    count: 2,
  })
  const [images, setImages] = useState<GeneratedImage[]>([])

  const prompt = useMemo(() => buildPrompt(subject, settings), [subject, settings])
  const canGenerate = subject.trim().length > 2

  function generate() {
    const seeds = seedsFor(settings.count)
    const batch: GeneratedImage[] = seeds.map((seed) => ({
      id: crypto.randomUUID(),
      prompt,
      seed,
      url: pollinationsUrl(prompt, seed, settings.product),
      status: 'loading',
    }))
    setImages(batch)
  }

  function regenerate(id: string) {
    setImages((prev) =>
      prev.map((img) => {
        if (img.id !== id) return img
        const seed = Math.floor(Math.random() * 1_000_000)
        return {
          ...img,
          seed,
          url: pollinationsUrl(img.prompt, seed, settings.product),
        }
      }),
    )
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="mx-auto max-w-6xl px-5 py-8">
        <div className="mb-8 max-w-2xl">
          <h1 className="font-display text-3xl sm:text-4xl font-700 tracking-tight leading-tight">
            Convertí referencias en stickers, agendas y papelería
          </h1>
          <p className="text-ink/60 mt-2">
            Subí una imagen, describí el sujeto y NABE arma el prompt en su estilo
            acuarela retro y genera variantes listas para imprimir. Generación
            gratuita, sin claves.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-6 items-start">
          {/* Left: studio panel */}
          <section className="card p-5 space-y-6 lg:sticky lg:top-24">
            <ReferenceUploader
              references={references}
              onAdd={(refs) => setReferences((prev) => [...prev, ...refs])}
              onRemove={(id) =>
                setReferences((prev) => prev.filter((r) => r.id !== id))
              }
            />

            <hr className="border-nabe-line" />

            <Controls
              subject={subject}
              onSubject={setSubject}
              settings={settings}
              onSettings={setSettings}
            />

            <PromptPreview prompt={prompt} />

            <button
              onClick={generate}
              disabled={!canGenerate}
              className="btn-primary w-full py-3 text-base"
            >
              ✨ Generar {settings.count} {settings.count === 1 ? 'variante' : 'variantes'}
            </button>
            {!canGenerate && (
              <p className="text-xs text-ink/40 -mt-3 text-center">
                Describí el sujeto para habilitar la generación.
              </p>
            )}
          </section>

          {/* Right: results */}
          <section>
            <Gallery images={images} onRegenerate={regenerate} />
          </section>
        </div>
      </main>

      <footer className="border-t border-nabe-line mt-12">
        <div className="mx-auto max-w-6xl px-5 py-6 text-xs text-ink/50 flex flex-wrap gap-x-4 gap-y-1">
          <span>NABE · estudio de papelería</span>
          <span>Generación gratuita vía Pollinations.ai (sin API key)</span>
          <span>Buen gusto de UI vía taste-skill</span>
        </div>
      </footer>
    </div>
  )
}
