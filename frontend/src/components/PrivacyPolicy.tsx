const LAST_UPDATED = '8 de julio de 2026'

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="space-y-2">
      <h2 className="font-display text-lg font-700 tracking-tight text-ink">
        {title}
      </h2>
      <div className="text-sm leading-relaxed text-ink/70 space-y-2">
        {children}
      </div>
    </section>
  )
}

export default function PrivacyPolicy() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-10">
      <a href="/" className="text-sm text-ink/50 hover:text-ink">
        ← Volver al inicio
      </a>

      <div className="mt-4 mb-8">
        <h1 className="font-display text-3xl sm:text-4xl font-700 tracking-tight leading-tight">
          Política de Privacidad
        </h1>
        <p className="text-ink/50 text-sm mt-2">
          Última actualización: {LAST_UPDATED}
        </p>
      </div>

      <div className="card p-6 sm:p-8 space-y-7">
        <p className="text-sm leading-relaxed text-ink/70">
          En NABE (en adelante, "nosotros" o "la tienda") elaboramos papelería
          hecha a mano —agendas, cuadernos, stickers y artículos afines— bajo
          pedido. Esta Política de Privacidad explica qué información
          recopilamos cuando visitás nuestro sitio o realizás una compra, cómo
          la usamos y qué derechos tenés sobre ella. Al usar este sitio o
          realizar un pedido, aceptás las prácticas aquí descritas.
        </p>

        <Section title="1. Información que recopilamos">
          <p>Podemos recopilar los siguientes datos:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Datos de contacto:</strong> nombre, correo electrónico,
              teléfono y dirección de envío, necesarios para procesar y
              entregar tu pedido.
            </li>
            <li>
              <strong>Datos de pago:</strong> la información de tarjeta o
              medio de pago es procesada directamente por nuestra pasarela de
              pagos (por ejemplo, Mercado Pago, Stripe o similar); nosotros no
              almacenamos números completos de tarjeta.
            </li>
            <li>
              <strong>Datos de pedido:</strong> productos elegidos,
              personalizaciones, referencias de diseño e historial de
              compras.
            </li>
            <li>
              <strong>Datos de navegación:</strong> dirección IP, tipo de
              dispositivo y navegador, y páginas visitadas, recopilados
              mediante cookies o herramientas de analítica.
            </li>
            <li>
              <strong>Comunicaciones:</strong> mensajes que nos envíes por
              correo, redes sociales o formularios de contacto.
            </li>
          </ul>
        </Section>

        <Section title="2. Cómo usamos tu información">
          <ul className="list-disc pl-5 space-y-1">
            <li>Procesar, confirmar y dar seguimiento a tus pedidos.</li>
            <li>
              Fabricar y personalizar productos hechos a mano según lo
              solicitado.
            </li>
            <li>
              Comunicarnos con vos sobre el estado de tu pedido, tiempos de
              elaboración y envío.
            </li>
            <li>
              Responder consultas, reclamos o solicitudes de soporte.
            </li>
            <li>
              Mejorar nuestro sitio, catálogo y experiencia de compra.
            </li>
            <li>
              Enviar novedades, promociones o lanzamientos, solo si diste tu
              consentimiento previo.
            </li>
            <li>Cumplir obligaciones legales, fiscales o contables.</li>
          </ul>
        </Section>

        <Section title="3. Tiempos de elaboración">
          <p>
            Al ser productos de papelería hechos a mano, cada pedido se
            elabora de forma artesanal y personalizada. El tiempo estimado de
            creación es de <strong>3 a 5 días hábiles</strong> antes del
            despacho, además del tiempo de envío correspondiente. Estos
            plazos pueden variar según la demanda o la complejidad del pedido,
            y te avisaremos si existiera algún cambio.
          </p>
        </Section>

        <Section title="4. Con quién compartimos tu información">
          <p>No vendemos ni alquilamos tus datos personales. Podemos compartir información únicamente con:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Proveedores de pago, para procesar transacciones de forma
              segura.
            </li>
            <li>
              Empresas de mensajería o correo, para gestionar el envío de tu
              pedido.
            </li>
            <li>
              Herramientas de analítica o email marketing, que nos ayudan a
              operar el sitio y comunicarnos con vos.
            </li>
            <li>
              Autoridades competentes, cuando la ley así lo requiera.
            </li>
          </ul>
        </Section>

        <Section title="5. Cookies">
          <p>
            Usamos cookies y tecnologías similares para recordar tus
            preferencias, mantener el carrito de compras y entender cómo se
            usa el sitio. Podés configurar tu navegador para rechazar cookies,
            aunque algunas funciones del sitio podrían no funcionar
            correctamente.
          </p>
        </Section>

        <Section title="6. Conservación de datos">
          <p>
            Conservamos tu información solo durante el tiempo necesario para
            cumplir con los fines descritos en esta política, o el que exijan
            las leyes fiscales y comerciales aplicables.
          </p>
        </Section>

        <Section title="7. Tus derechos">
          <p>
            Podés solicitarnos en cualquier momento acceder, rectificar,
            actualizar o eliminar tus datos personales, así como retirar tu
            consentimiento para recibir comunicaciones de marketing.
            Escribinos a nuestro correo de contacto y responderemos tu
            solicitud a la brevedad.
          </p>
        </Section>

        <Section title="8. Seguridad">
          <p>
            Adoptamos medidas razonables para proteger tu información contra
            accesos no autorizados, pérdida o mal uso. Sin embargo, ningún
            sistema es 100% seguro, por lo que no podemos garantizar
            protección absoluta.
          </p>
        </Section>

        <Section title="9. Enlaces a terceros">
          <p>
            Nuestro sitio puede contener enlaces a redes sociales o sitios de
            terceros. No nos responsabilizamos por las prácticas de
            privacidad de esos sitios; te recomendamos revisar sus políticas
            antes de compartir información.
          </p>
        </Section>

        <Section title="10. Menores de edad">
          <p>
            Nuestros productos y servicios están dirigidos a personas mayores
            de 18 años. No recopilamos intencionalmente datos de menores sin
            el consentimiento de un padre, madre o tutor.
          </p>
        </Section>

        <Section title="11. Cambios a esta política">
          <p>
            Podemos actualizar esta Política de Privacidad ocasionalmente. La
            fecha de "última actualización" al inicio de esta página indica
            la versión vigente. Te recomendamos revisarla periódicamente.
          </p>
        </Section>

        <Section title="12. Contacto">
          <p>
            Si tenés dudas sobre esta Política de Privacidad o el tratamiento
            de tus datos, escribinos a{' '}
            <a
              href="mailto:hola@nabe.studio"
              className="text-nabe-red hover:underline"
            >
              hola@nabe.studio
            </a>{' '}
            o a través de nuestras redes sociales.
          </p>
        </Section>
      </div>
    </main>
  )
}
