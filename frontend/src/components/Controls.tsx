import type { GenSettings, ProductType } from '../types'
import { PRODUCTS, SUBJECT_PRESETS } from '../lib/nabeStyle'

interface Props {
  subject: string
  onSubject: (v: string) => void
  settings: GenSettings
  onSettings: (s: GenSettings) => void
}

const ACCENTS = ['#e4572e', '#f4a261', '#8aa399', '#6d6875', '#457b9d', '#b56576']

export default function Controls({ subject, onSubject, settings, onSettings }: Props) {
  const update = (patch: Partial<GenSettings>) => onSettings({ ...settings, ...patch })

  return (
    <div className="space-y-5">
      {/* Subject */}
      <div>
        <h2 className="font-display text-lg font-600 mb-2">2 · Describí el sujeto</h2>
        <textarea
          value={subject}
          onChange={(e) => onSubject(e.target.value)}
          rows={3}
          placeholder="ej: una mujer madura sonriente de pelo castaño hasta los hombros, con un sweater rojo"
          className="w-full rounded-xl border border-nabe-line bg-white p-3 text-sm outline-none focus:border-nabe-red resize-none"
        />
        <div className="mt-2 flex flex-wrap gap-1.5">
          {SUBJECT_PRESETS.map((p) => (
            <button
              key={p}
              onClick={() => onSubject(p)}
              className="chip border-nabe-line bg-white text-ink/70 hover:border-nabe-red hover:text-ink text-xs"
              title={p}
            >
              {p.slice(0, 28)}…
            </button>
          ))}
        </div>
      </div>

      {/* Product */}
      <div>
        <h2 className="font-display text-lg font-600 mb-2">3 · Producto</h2>
        <div className="grid grid-cols-2 gap-2">
          {(Object.keys(PRODUCTS) as ProductType[]).map((key) => {
            const p = PRODUCTS[key]
            const active = settings.product === key
            return (
              <button
                key={key}
                onClick={() => update({ product: key })}
                className={`chip flex items-center gap-2 justify-start ${
                  active
                    ? 'border-nabe-red bg-nabe-cream text-ink'
                    : 'border-nabe-line bg-white text-ink/70'
                }`}
              >
                <span>{p.emoji}</span>
                <span className="text-sm">{p.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Dials */}
      <div className="grid grid-cols-1 gap-4">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="font-medium">Variación</span>
            <span className="text-ink/50">{settings.variance}/10</span>
          </div>
          <input
            type="range"
            min={0}
            max={10}
            value={settings.variance}
            onChange={(e) => update({ variance: Number(e.target.value) })}
            className="w-full accent-nabe-red"
          />
          <p className="text-xs text-ink/40 mt-0.5">
            fiel a la referencia ↔ reinterpretación libre
          </p>
        </div>

        <div>
          <p className="text-sm font-medium mb-1.5">Color de acento</p>
          <div className="flex gap-2">
            {ACCENTS.map((c) => (
              <button
                key={c}
                onClick={() => update({ accent: c })}
                style={{ background: c }}
                className={`h-7 w-7 rounded-full border-2 transition ${
                  settings.accent === c ? 'border-ink scale-110' : 'border-white'
                }`}
                aria-label={c}
              />
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="font-medium">Variantes</span>
            <span className="text-ink/50">{settings.count}</span>
          </div>
          <input
            type="range"
            min={1}
            max={6}
            value={settings.count}
            onChange={(e) => update({ count: Number(e.target.value) })}
            className="w-full accent-nabe-red"
          />
        </div>
      </div>
    </div>
  )
}
