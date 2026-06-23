# NABE · estudio de papelería

Frontend para **subir imágenes de referencia** y obtener **ilustraciones,
bocetos y variantes** en el estilo acuarela / retro-comic de NABE, pensadas para
producir **stickers, agendas, cuadernos y papelería**.

La generación es **gratuita y sin claves**: usa [Pollinations.ai](https://pollinations.ai)
(modelo Flux) directamente desde el navegador. No hace falta pagar nada ni
configurar un backend.

## Cómo funciona

1. **Subís una o más referencias** (una persona, mascota, objeto).
2. **Describís el sujeto** en pocas palabras (o usás un preset).
3. **Elegís el producto**: sticker die-cut, tapa de agenda, tapa de cuaderno o
   patrón de papelería.
4. Ajustás los _dials_ (variación, color de acento, cantidad de variantes).
5. NABE arma el **prompt en su estilo** y genera las imágenes, listas para
   descargar en PNG.

El prompt siempre lleva la "DNA" de NABE: estética retro-comic estilo historieta
argentina, proporciones tiernas, cara redonda, nariz prominente, ojos punto,
acuarela, contornos finos de tinta, **fondo blanco puro** y sujeto aislado para
producción.

## Correr el proyecto

```bash
cd frontend
npm install
npm run dev      # http://localhost:5173
```

Build de producción:

```bash
npm run build && npm run preview
```

## Skills instalados

Este repo trae instalado el repositorio
[`Leonxlnx/taste-skill`](https://github.com/Leonxlnx/taste-skill) en
`.claude/skills/` (todos los skills: `taste-skill`, `imagegen-frontend-web`,
`brandkit`, etc.) para que el agente tenga **buen gusto de diseño**.

Además incluye un skill propio:

- **`nabe-prompt-studio`** — enseña al agente a leer una referencia y escribir
  prompts en el estilo NABE (la misma gramática que usa la app). Ver
  `.claude/skills/nabe-prompt-studio/SKILL.md` y los prompts de referencia en
  `reference-prompts.md`.

### Reinstalar / actualizar los skills de taste-skill

```bash
npx skills add https://github.com/Leonxlnx/taste-skill
```

## Estructura

```
NABE/
├── frontend/                 # app React + Vite + Tailwind
│   └── src/
│       ├── lib/              # estilo NABE, constructor de prompts, conector Pollinations
│       └── components/       # uploader, controles, preview de prompt, galería
└── .claude/skills/
    ├── nabe-prompt-studio/   # skill propio (estilo NABE)
    └── taste-skill, imagegen-frontend-web, brandkit, ...  # taste-skill vendorizado
```

## Próximos pasos posibles

- Conectar un motor con _image-to-image_ real (usar la referencia como
  condicionamiento) cuando quieras sumar una API key.
- Análisis automático de la referencia con visión para autocompletar la
  descripción del sujeto.
- Guardar colecciones / sets de stickers y exportar hojas de impresión.
