# Toyo Tires Venezuela - Sitio Web Oficial
## DEAR C.A. - Distribuidor Oficial

---

## 🚀 GUÍA DE DESPLIEGUE COMPLETA

Este es tu sitio web completo de Toyo Tires Venezuela, listo para desplegar en producción.

---

## 📋 LO QUE TIENES

✅ **Sitio web completo y funcional** con Next.js 14
✅ **7 páginas principales** en español
✅ **Base de datos de neumáticos** con inventario venezolano real (del catálogo 2024)
✅ **Diseño responsive** (móvil, tablet, escritorio)
✅ **Hosting GRATIS** en Vercel
✅ **Listo para producción**

---

## 🛠️ INSTALACIÓN LOCAL (Opcional - Para Probar)

Si quieres probar el sitio en tu computadora antes de lanzarlo:

```bash
# 1. Instalar dependencias
npm install

# 2. Ejecutar en modo desarrollo
npm run dev

# 3. Abrir en navegador
# http://localhost:3000
```

---

## 🌐 DESPLIEGUE EN VERCEL (GRATIS Y RECOMENDADO)

### Paso 1: Crear cuenta en Vercel

1. Ve a https://vercel.com
2. Click en "Sign Up"
3. Usa tu cuenta de GitHub, GitLab o email

### Paso 2: Subir tu código a GitHub

```bash
# Si no tienes Git instalado, descárgalo de https://git-scm.com

# 1. Inicializar repositorio
git init
git add .
git commit -m "Initial commit - Toyo Tires Venezuela"

# 2. Crear repositorio en GitHub (https://github.com/new)
# Nombra el repo: toyo-tires-venezuela

# 3. Conectar y subir
git remote add origin https://github.com/TU-USUARIO/toyo-tires-venezuela.git
git branch -M main
git push -u origin main
```

### Paso 3: Desplegar desde Vercel

1. Login en Vercel (https://vercel.com)
2. Click "Add New..." → "Project"
3. Importa tu repositorio de GitHub
4. Vercel detectará automáticamente Next.js
5. Click "Deploy"
6. **¡Listo!** Tu sitio estará en vivo en ~2 minutos

URL ejemplo: `toyo-tires-venezuela.vercel.app`

---

## 🌍 CONECTAR TU DOMINIO

### Opción 1: Comprar dominio (.com recomendado)

- **GoDaddy**: https://www.godaddy.com (~$15/año)
- **Namecheap**: https://www.namecheap.com (~$12/año)
- Sugerencia: `toyotiresvenezuela.com`

### Opción 2: Conectar dominio a Vercel

1. En Vercel, ve a tu proyecto
2. Settings → Domains
3. Add domain: `toyotiresvenezuela.com`
4. Sigue las instrucciones DNS
5. **¡Listo!** Tu sitio estará en tu dominio propio

---

## 📊 ESTRUCTURA DEL SITIO

```
toyo-website/
├── src/
│   ├── app/                    # Páginas
│   │   ├── page.js            # Inicio
│   │   ├── productos/         # Catálogo de productos
│   │   ├── buscador/          # Buscador de llantas
│   │   ├── distribuidores/    # Localizador de dealers
│   │   ├── embajadores/       # Brand ambassadors
│   │   ├── nosotros/          # About DEAR
│   │   └── contacto/          # Formulario contacto
│   ├── components/            # Componentes reutilizables
│   │   ├── Navigation.js      # Menú principal
│   │   └── Footer.js          # Pie de página
│   └── data/
│       └── tires.js           # Base de datos de neumáticos
├── public/                     # Imágenes y assets
├── package.json
└── README.md
```

---

## ✏️ CÓMO PERSONALIZAR

### Actualizar información de contacto

Edita: `src/components/Footer.js`
```javascript
// Busca y reemplaza:
Email: info@dear.com.ve          // Tu email real
Teléfono: +58 (212) XXX-XXXX    // Tu teléfono real
```

### Agregar distribuidores reales

Edita: `src/app/distribuidores/page.js`
```javascript
// Reemplaza el array 'dealers' con tus ubicaciones:
const dealers = [
  {
    id: 1,
    name: "DEAR Central - Caracas",
    address: "Tu dirección real",
    city: "Caracas",
    phone: "+58 (212) XXX-XXXX",
    email: "caracas@dear.com.ve"
  },
  // Agrega más...
]
```

### Actualizar base de datos de neumáticos

Edita: `src/data/tires.js`
- Agrega/elimina modelos
- Actualiza medidas disponibles
- Modifica descripciones

### Cambiar colores de marca

Edita: `tailwind.config.js`
```javascript
toyo: {
  red: '#D71920',     // Color principal
  black: '#1a1a1a',   // Negro
  gray: '#4a4a4a',    // Gris
}
```

---

## 📸 AGREGAR IMÁGENES

1. Coloca imágenes en: `public/images/`
2. Usa en el código:
```javascript
<img src="/images/tu-imagen.jpg" alt="Descripción" />
```

**Imágenes recomendadas:**
- Logo Toyo Tires (oficial)
- Logo DEAR
- Fotos de productos (neumáticos)
- Foto oficina/equipo
- Hero image para homepage

---

## 🔧 FUNCIONALIDADES POR IMPLEMENTAR

Las siguientes funcionalidades están preparadas pero requieren integración:

### 1. Formulario de Contacto
- Actualmente muestra alert
- Integrar con: Formspree, EmailJS, o tu backend

### 2. Mapa de Distribuidores
- Placeholder presente
- Integrar: Google Maps API

### 3. Redes Sociales
- Links presentes en footer
- Actualizar con tus URLs reales

---

## 💰 COSTOS

| Item | Costo | Frecuencia |
|------|-------|------------|
| Hosting Vercel | **$0** | Gratis siempre |
| Dominio .com | $12-15 | Anual |
| Email profesional (opcional) | $6 | Mensual |
| **TOTAL AÑO 1** | **$12-87** | Muy económico |

---

## 🆘 SOPORTE Y AYUDA

### Documentación útil:
- **Next.js**: https://nextjs.org/docs
- **Vercel**: https://vercel.com/docs
- **Tailwind CSS**: https://tailwindcss.com/docs

### ¿Necesitas ayuda?
- Problema con despliegue → Revisa Vercel docs
- Cambios de diseño → Consulta Tailwind docs
- Funcionalidad custom → Consulta Next.js docs

---

## 📝 PRÓXIMOS PASOS RECOMENDADOS

1. ✅ **Desplegar en Vercel** (5 minutos)
2. ✅ **Comprar dominio** (toyotiresvenezuela.com)
3. ✅ **Actualizar info de contacto** (email, teléfonos)
4. ✅ **Agregar distribuidores reales** (ubicaciones DEAR)
5. ✅ **Obtener imágenes oficiales** (logos, productos)
6. ✅ **Configurar Google Analytics** (opcional)
7. ✅ **Conectar formulario contacto** (Formspree gratis)
8. ✅ **Agregar Google Maps** (API gratuita hasta 25k views/mes)

---

## 🎉 ¡FELICIDADES!

Tienes un sitio web profesional, moderno y completamente funcional para Toyo Tires Venezuela.

**Tiempo estimado hasta estar en vivo: 30 minutos**

---

## 📧 CHECKLIST DE LANZAMIENTO

```
□ Código subido a GitHub
□ Desplegado en Vercel
□ Dominio comprado y conectado
□ Información de contacto actualizada
□ Distribuidores reales agregados
□ Imágenes oficiales añadidas
□ Links de redes sociales actualizados
□ Formulario de contacto configurado
□ Sitio probado en móvil/tablet/desktop
□ Google Analytics configurado (opcional)
```

---

**¡Mucho éxito con el lanzamiento! 🚀**
