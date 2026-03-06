# Guía: Despliegue en GitHub Pages

## ⚠️ Checklist para evitar pantalla en blanco

Al desplegar un proyecto React + Vite en GitHub Pages (dominio `.github.io`), verifica:

### 1. **Configuración de Vite** (`vite.config.ts`)
```typescript
export default defineConfig({
  base: '/', // Para repos tipo username.github.io
  // base: '/nombre-repo/', // Solo si el repo NO es username.github.io
  plugins: [react(), tailwindcss()],
  // ... resto de config
})
```

**Regla:**
- Repositorio `username.github.io` → `base: '/'`
- Repositorio `mi-proyecto` → `base: '/mi-proyecto/'`

### 2. **React Router** (`src/app/routes.tsx`)
```typescript
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      // tus rutas aquí
    ],
  },
]); // ❌ NO agregar basename para repos .github.io
```

**Regla:**
- Repositorio `username.github.io` → **NO uses** `basename`
- Repositorio `mi-proyecto` → Usa `basename: "/mi-proyecto"`

### 3. **Dependencies en package.json**
```json
{
  "dependencies": {
    // ❌ NO poner react aquí
    "@mui/material": "...",
    // ... otras dependencias
  },
  "devDependencies": {
    "vite": "...",
    "react": "18.3.1",        // ✅ React aquí
    "react-dom": "18.3.1",    // ✅ React-DOM aquí
    "@vitejs/plugin-react": "..."
  }
}
```

**Importante:** En proyectos Vite para GitHub Pages, `react` y `react-dom` deben estar en `devDependencies`.

### 4. **Script en index.html**
```html
<!-- GitHub Pages SPA redirect handler -->
<script type="text/javascript">
  (function(l) {
    if (l.search[1] === '/' ) {
      var decoded = l.search.slice(1).split('&').map(function(s) {
        return s.replace(/~and~/g, '&')
      }).join('?');
      window.history.replaceState(null, null,
          l.pathname.slice(0, -1) + decoded + l.hash
      );
    }
  }(window.location))
</script>
```

### 5. **404.html** (`public/404.html`)
```javascript
var pathSegmentsToKeep = 0; // Para repos .github.io
// var pathSegmentsToKeep = 1; // Para otros repos
```

### 6. **GitHub Pages Settings**
1. Ir a: `Settings` → `Pages`
2. En **Source** seleccionar: **GitHub Actions**
3. Repositorio debe ser **público** (o tener GitHub Pro)

### 7. **Workflow de GitHub Actions** (`.github/workflows/deploy.yml`)
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ['main']  # ⚠️ Verifica el nombre de tu rama
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

# ... resto del workflow
```

## 🔄 Proceso de Deployment

1. **Hacer cambios locales**
2. **Commit y push:**
   ```bash
   git add .
   git commit -m "Descripción del cambio"
   git push
   ```
3. **Verificar workflow:** https://github.com/USUARIO/REPO/actions
4. **Limpiar caché del navegador:** `Ctrl+Shift+R` varias veces
5. **Verificar en:** https://username.github.io

## 🐛 Debugging

Si la página sigue en blanco:

1. **Abrir DevTools** (F12) → **Console**
2. Buscar errores relacionados con:
   - `basename` en router
   - Rutas 404
   - Módulos no encontrados

3. **Verificar en el código:**
   ```bash
   # Buscar referencias al basename viejo
   grep -r "/NombreViejo" .
   grep -r "basename" src/
   ```

## 📝 Resumen Rápido

| Aspecto | Repo `.github.io` | Repo Normal |
|---------|-------------------|-------------|
| `vite.config.ts` base | `/` | `/nombre-repo/` |
| Router basename | ❌ No usar | `"/nombre-repo"` |
| 404.html pathSegments | `0` | `1` |
| React en package.json | `devDependencies` | `devDependencies` |

---

**Última actualización:** Marzo 2026
