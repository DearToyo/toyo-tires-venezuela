# 🚀 GUÍA RÁPIDA DE DESPLIEGUE - 15 MINUTOS

## TU SITIO WEB ESTÁ LISTO - SIGUE ESTOS PASOS:

---

## PASO 1: DESCARGAR EL CÓDIGO (Ya lo tienes ✅)

El código completo está en la carpeta `toyo-website/`

---

## PASO 2: INSTALAR NODE.JS (Si no lo tienes)

1. Ve a: https://nodejs.org
2. Descarga versión LTS (recomendada)
3. Instala normalmente

---

## PASO 3: PROBAR LOCALMENTE (Opcional)

```bash
cd toyo-website
npm install
npm run dev
```

Abre: http://localhost:3000

---

## PASO 4: DESPLEGAR EN VERCEL (GRATIS) ⭐

### Opción A: Con GitHub (Recomendado)

1. **Crea cuenta en GitHub**: https://github.com/signup
2. **Crea nuevo repositorio**: https://github.com/new
   - Nombre: `toyo-tires-venezuela`
   - Público o privado (tu elección)

3. **Sube el código**:
```bash
cd toyo-website
git init
git add .
git commit -m "Sitio Toyo Tires Venezuela - DEAR"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/toyo-tires-venezuela.git
git push -u origin main
```

4. **Conecta con Vercel**:
   - Ve a: https://vercel.com
   - Sign up con tu cuenta GitHub
   - Click "Add New Project"
   - Selecciona `toyo-tires-venezuela`
   - Click "Deploy"
   - **¡LISTO! Tu sitio estará vivo en 2 minutos**

### Opción B: Arrastrar y soltar (Más fácil)

1. Ve a: https://vercel.com
2. Sign up (con email/Google/GitHub)
3. Click "Add New Project"
4. Arrastra la carpeta `toyo-website`
5. Click "Deploy"
6. **¡LISTO!**

**Tu sitio estará en**: `https://toyo-tires-venezuela.vercel.app`

---

## PASO 5: DOMINIO PROPIO (Opcional pero recomendado)

1. **Compra dominio**:
   - GoDaddy: https://godaddy.com
   - Namecheap: https://namecheap.com
   - Sugerencia: `toyotiresvenezuela.com` (~$15/año)

2. **Conecta a Vercel**:
   - En Vercel → Tu proyecto → Settings → Domains
   - Add: `toyotiresvenezuela.com`
   - Sigue instrucciones DNS
   - Espera 24-48h para propagación

**¡LISTO! Tu sitio estará en tu dominio propio**

---

## 🎯 CHECKLIST RÁPIDO

```
□ Node.js instalado
□ Código probado localmente (npm run dev)
□ Cuenta GitHub creada
□ Código subido a GitHub
□ Cuenta Vercel creada
□ Proyecto desplegado en Vercel
□ (Opcional) Dominio comprado
□ (Opcional) Dominio conectado
```

---

## ❓ PROBLEMAS COMUNES

### "npm no se reconoce"
→ Instala Node.js desde nodejs.org

### "Error al hacer git push"
→ Verifica que creaste el repositorio en GitHub primero

### "El sitio no se ve bien"
→ Espera 2-3 minutos después del deploy para que se complete

---

## 📞 SOPORTE

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Tu README completo**: Ver `README.md` para detalles

---

## ✨ PRÓXIMOS PASOS

Una vez desplegado:

1. Actualiza info de contacto en `src/components/Footer.js`
2. Agrega distribuidores reales en `src/app/distribuidores/page.js`
3. Obtén imágenes oficiales de Toyo
4. Configura formulario de contacto
5. Agrega Google Maps

**Todo está documentado en el README.md**

---

**¡Tu sitio profesional está listo para el mundo! 🎉**

**Tiempo total: 15-30 minutos**
