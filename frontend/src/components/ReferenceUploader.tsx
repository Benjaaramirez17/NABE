import { useRef, useState } from 'react'
import type { ReferenceImage } from '../types'

interface Props {
  references: ReferenceImage[]
  onAdd: (refs: ReferenceImage[]) => void
  onRemove: (id: string) => void
}

function fileToRef(file: File): Promise<ReferenceImage> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () =>
      resolve({
        id: crypto.randomUUID(),
        name: file.name,
        dataUrl: reader.result as string,
      })
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

export default function ReferenceUploader({ references, onAdd, onRemove }: Props) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [dragging, setDragging] = useState(false)

  async function handleFiles(list: FileList | null) {
    if (!list) return
    const images = Array.from(list).filter((f) => f.type.startsWith('image/'))
    const refs = await Promise.all(images.map(fileToRef))
    onAdd(refs)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <h2 className="font-display text-lg font-600">1 · Referencias</h2>
        <span className="text-xs text-ink/50">{references.length} subidas</span>
      </div>

      <div
        onDragOver={(e) => {
          e.preventDefault()
          setDragging(true)
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault()
          setDragging(false)
          handleFiles(e.dataTransfer.files)
        }}
        onClick={() => inputRef.current?.click()}
        className={`cursor-pointer rounded-2xl border-2 border-dashed p-6 text-center transition ${
          dragging
            ? 'border-nabe-red bg-nabe-cream'
            : 'border-nabe-line bg-white hover:bg-nabe-cream/60'
        }`}
      >
        <p className="text-3xl mb-1">🖼️</p>
        <p className="text-sm font-medium">Arrastrá tus imágenes de referencia</p>
        <p className="text-xs text-ink/50 mt-0.5">o hacé clic para elegir · JPG / PNG</p>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          hidden
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>

      {references.length > 0 && (
        <div className="mt-3 grid grid-cols-4 gap-2">
          {references.map((r) => (
            <div key={r.id} className="group relative aspect-square">
              <img
                src={r.dataUrl}
                alt={r.name}
                className="h-full w-full rounded-xl object-cover border border-nabe-line"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onRemove(r.id)
                }}
                className="absolute -top-1.5 -right-1.5 h-5 w-5 rounded-full bg-ink text-white text-xs grid place-items-center opacity-0 group-hover:opacity-100 transition"
                aria-label="quitar"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
