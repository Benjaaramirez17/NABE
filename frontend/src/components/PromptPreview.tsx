import { useState } from 'react'

interface Props {
  prompt: string
}

export default function PromptPreview({ prompt }: Props) {
  const [copied, setCopied] = useState(false)
  const [open, setOpen] = useState(true)

  async function copy() {
    await navigator.clipboard.writeText(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="rounded-xl border border-nabe-line bg-nabe-cream/50">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-4 py-2.5 text-left"
      >
        <span className="text-sm font-medium">Prompt generado (estilo NABE)</span>
        <span className="text-ink/40 text-xs">{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div className="px-4 pb-3">
          <p className="text-xs leading-relaxed text-ink/70 font-mono whitespace-pre-wrap">
            {prompt}
          </p>
          <button onClick={copy} className="btn-ghost mt-3 text-xs py-1.5">
            {copied ? '¡Copiado!' : 'Copiar prompt'}
          </button>
        </div>
      )}
    </div>
  )
}
