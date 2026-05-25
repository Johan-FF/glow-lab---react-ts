# Layout global — Header, SubHeader, sidebars, toasts

**Fecha auditoría:** 2026-05-21  
**URL probada:** Varias rutas con layout compartido  
**Estado:** hecho (código); re-auditar en TAW/W3C tras despliegue

**Componentes:** `Header`, `SubHeader`, `CartSidebar`, `FavoritesSidebar`, `Toaster`, `Sonner`

## Contexto

- Viewport / zoom usado en TAW: _pendiente re-auditoría_
- Navegador: _pendiente re-auditoría_
- Cambios aplicados en `src/components/layout/*`, sidebars, `src/App.tsx` (skip link, `#main-content`).

---

## W3C (validator.w3.org)

### HTML

| # | Severidad | Mensaje | Estado en repo |
|---|-----------|---------|----------------|
| 1–6 | Info | Trailing slash en `<meta />` | **Corregido** en `index.html` |
| 7 | Warning | `role="complementary"` en badge Lovable | **Fuera del repo** (solo dev Lovable) |

### CSS

| # | Severidad | Mensaje | Estado en repo |
|---|-----------|---------|----------------|
| 1 | Error | `prefers-contrast: high` inválido | **Fuera del repo** (estilos badge Lovable en dev) |

---

## TAW (accesibilidad)

### Cambios aplicados (2026-05-25)

| Área | Cambio |
|------|--------|
| Header | `aria-label` en tema, favoritos, carrito, menú móvil; logo con nombre accesible; iconos decorativos `aria-hidden` |
| SubHeader | Etiqueta visible para buscador (`Label` + `type="search"`); `nav` de categorías con `aria-label` |
| CartSidebar / FavoritesSidebar | `role="dialog"`, `aria-modal`, backdrop como botón, listas semánticas, controles con nombre |
| App | Enlace «Saltar al contenido principal»; `<main id="main-content">` |
| `index.html` | `lang="es"` (criterio 3.1.1 global) |

### Revisión manual pendiente

- Menú móvil del Header (botón sin panel asociado aún).
- Toasts: verificar anuncio en lector de pantalla en re-auditoría.

---

## Criterio de "hecho"

- [x] Meta void sin barra final en `index.html`
- [x] `lang="es"` en documento
- [x] Fallos TAW prioritarios de layout abordados en código
- [ ] Re-auditado en al menos 2 rutas distintas
- [x] Estado actualizado en [00-index.md](./00-index.md)
