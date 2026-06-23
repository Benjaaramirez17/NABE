import { useState } from 'react'
import type { GeneratedImage } from '../types'
import { downloadImage } from '../lib/pollinations'

interface Props {
  images: GeneratedImage[]
  onRegenerate: (id: string) => void
}

function Card({
  img,
  index,
  onRegenerate,
}: {
  img: GeneratedImage
  index: number
  onRegenerate: (id: string) => void
}) {
  const [loaded, setLoaded] = useState(false)
  const [errored, setErrored] = useState(false)

  return (
    <div className="card overflow-hidden flex flex-col">
      <div className="relative aspect-square bg-nabe-cream grid place-items-center">
        {!loaded && !errored && (
          <div className="absolute inset-0 grid place-items-center">
            <div className="h-8 w-8 rounded-full border-2 border-nabe-line border-t-nabe-red animate-spin" />
          </div>
        )}
        {errored ? (
          <div className="text-center px-4">
            <p className="text-2xl">😕</p>
            <p className="text-xs text-ink/50 mt-1">No se pudo generar. Reintentá.</p>
          </div>
        ) : (
          <img
            src={img.url}
            alt={`Variante ${index + 1}`}
            onLoad={() => setLoaded(true)}
            onError={() => setErrored(true)}
            className={`h-full w-full object-contain transition ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}
        <span className="absolute top-2 left-2 rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium border border-nabe-line">
          Variante {String.fromCharCode(65 + index)}
        </span>
      </div>
      <div className="flex items-center gap-2 p-2.5 border-t border-nabe-line">
        <button
          onClick={() => onRegenerate(img.id)}
          className="btn-ghost flex-1 text-xs py-1.5"
          title="otra semilla"
        >
          ↻ Otra
        </button>
        <button
          onClick={() => downloadImage(img.url, `nabe-${img.seed}.png`)}
          disabled={!loaded}
          className="btn-primary flex-1 text-xs py-1.5"
        >
          ↓ Descargar
        </button>
      </div>
    </div>
  )
}

export default function Gallery({ images, onRegenerate }: Props) {
  if (images.length === 0) {
    return (
      <div className="card grid place-items-center py-20 text-center">
        <div>
          <p className="text-4xl mb-2">🎨</p>
          <p className="font-display text-lg">Tus ilustraciones aparecerán acá</p>
          <p className="text-sm text-ink/50 mt-1">
            Subí una referencia, describí el sujeto y generá.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {images.map((img, i) => (
        <Card key={img.id} img={img} index={i} onRegenerate={onRegenerate} />
      ))}
    </div>
  )
}
