'use client'
import { useState } from 'react'
import { Mail, Phone, Instagram, Send, CheckCircle, AlertCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    label: 'Teléfono',
    value: '0212-751 3466',
    href:  'tel:02127513466',
    hint:  'Lunes a Viernes, 8 am – 5 pm',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@dear.com.ve',
    href:  'mailto:info@dear.com.ve',
    hint:  'Respuesta en 24–48 horas hábiles',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@toyotiresvzla',
    href:  'https://instagram.com/toyotiresvzla',
    hint:  'Síguenos para novedades y contenido',
  },
]

const subjects = [
  'Información sobre productos',
  'Buscar distribuidor en mi ciudad',
  'Solicitar asesoría técnica',
  'Programa de embajadores',
  'Otra consulta',
]

export default function ContactoPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate async — wire up to a form service (Formspree, Resend, etc.)
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('sent')
  }

  return (
    <div className="min-h-screen bg-toyo-black">

      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container-custom relative z-10">
          <p className="label-tag animate-fade-in-up">Estamos aquí</p>
          <h1 className="font-display font-black text-5xl md:text-6xl text-white leading-none tracking-tight animate-fade-in-up-d1">
            Contáctanos
          </h1>
          <p className="mt-4 text-gray-400 text-lg max-w-xl animate-fade-in-up-d2">
            ¿Tienes alguna pregunta sobre productos, distribuidores o quieres formar parte de nuestra red?
            Escríbenos.
          </p>
        </div>
      </section>

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl">

          {/* Left — contact info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map(({ icon: Icon, label, value, href, hint }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex gap-4 items-start bg-toyo-surface border border-toyo-border
                           hover:border-toyo-blue p-6 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="p-2.5 bg-toyo-blue/10 group-hover:bg-toyo-blue transition-colors flex-shrink-0">
                  <Icon size={18} className="text-toyo-blue group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs font-display font-bold uppercase tracking-wider text-gray-500 mb-0.5">
                    {label}
                  </p>
                  <p className="font-display font-semibold text-white text-sm">{value}</p>
                  <p className="text-xs text-gray-600 mt-0.5">{hint}</p>
                </div>
              </a>
            ))}

            {/* Note */}
            <div className="border border-toyo-border p-5 mt-4">
              <p className="text-xs text-gray-500 leading-relaxed">
                <span className="text-white font-semibold block mb-1">DEAR C.A.</span>
                Distribuidor Oficial Exclusivo de Toyo Tires en Venezuela desde 1967.
                Caracas, Venezuela.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            <div className="bg-toyo-surface border border-toyo-border p-8">
              <h2 className="font-display font-bold text-white text-xl mb-6">
                Envíanos un mensaje
              </h2>

              {status === 'sent' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle size={48} className="text-green-400 mb-4" />
                  <h3 className="font-display font-bold text-white text-lg mb-2">¡Mensaje enviado!</h3>
                  <p className="text-sm text-gray-400 max-w-sm">
                    Gracias por contactarnos. Te responderemos en las próximas 24–48 horas hábiles.
                  </p>
                  <button
                    onClick={() => { setForm({ name:'',email:'',phone:'',subject:'',message:'' }); setStatus('idle') }}
                    className="mt-8 btn-outline-blue"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-display font-bold uppercase tracking-wider text-gray-400 mb-2">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => set('name', e.target.value)}
                        placeholder="Tu nombre completo"
                        className="w-full bg-toyo-black border border-toyo-border text-white
                                   px-4 py-3 text-sm
                                   focus:outline-none focus:border-toyo-blue
                                   placeholder:text-gray-700 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-display font-bold uppercase tracking-wider text-gray-400 mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => set('phone', e.target.value)}
                        placeholder="0412-000 0000"
                        className="w-full bg-toyo-black border border-toyo-border text-white
                                   px-4 py-3 text-sm
                                   focus:outline-none focus:border-toyo-blue
                                   placeholder:text-gray-700 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-display font-bold uppercase tracking-wider text-gray-400 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => set('email', e.target.value)}
                      placeholder="tu@email.com"
                      className="w-full bg-toyo-black border border-toyo-border text-white
                                 px-4 py-3 text-sm
                                 focus:outline-none focus:border-toyo-blue
                                 placeholder:text-gray-700 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-display font-bold uppercase tracking-wider text-gray-400 mb-2">
                      Asunto *
                    </label>
                    <select
                      required
                      value={form.subject}
                      onChange={(e) => set('subject', e.target.value)}
                      className="w-full bg-toyo-black border border-toyo-border text-white
                                 px-4 py-3 text-sm
                                 focus:outline-none focus:border-toyo-blue transition"
                    >
                      <option value="" disabled>Selecciona un asunto...</option>
                      {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-display font-bold uppercase tracking-wider text-gray-400 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => set('message', e.target.value)}
                      placeholder="Cuéntanos en qué podemos ayudarte..."
                      className="w-full bg-toyo-black border border-toyo-border text-white
                                 px-4 py-3 text-sm resize-none
                                 focus:outline-none focus:border-toyo-blue
                                 placeholder:text-gray-700 transition"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-400 text-sm">
                      <AlertCircle size={16} />
                      Hubo un error al enviar. Por favor intenta de nuevo.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary w-full !py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Enviar Mensaje
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-600 text-center">
                    * Campos requeridos. Tu información es confidencial.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
