export default function Header() {
  return (
    <header className="border-b border-nabe-line bg-paper/80 backdrop-blur sticky top-0 z-20">
      <div className="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-nabe-red text-white grid place-items-center font-display font-bold text-lg shadow-soft">
            N
          </div>
          <div className="leading-tight">
            <p className="font-display text-xl font-700 tracking-tight">NABE</p>
            <p className="text-xs text-ink/60 -mt-0.5">estudio de papelería</p>
          </div>
        </div>
        <a
          href="https://github.com/Leonxlnx/taste-skill"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-ink/60 hover:text-ink hidden sm:inline"
        >
          estilo acuarela · stickers · agendas · cuadernos
        </a>
      </div>
    </header>
  )
}
