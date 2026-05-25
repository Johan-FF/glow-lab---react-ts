# Product detail — `/product/:id`

**Fecha auditoría:** 2026-05-21  
**URL probada:** http://localhost:8080/product/_ID_AQUI_  
**Estado:** pendiente (TAW y W3C documentados; faltan detalle de incidencias TAW, ID de prueba y correcciones)

**Código:** `src/pages/ProductDetail.tsx` (+ layout global)

## Contexto

- Viewport / zoom usado en TAW: _rellenar_
- Navegador: _rellenar_
- **ID de producto usado en la prueba:** _obligatorio — pegar ID real_
- Notas: Informe TAW = resumen por criterio WCAG 2.0 AA. Menos advertencias 1.1.1 que `/products` (3 vs 60) — una sola ficha de producto.

---

## W3C (validator.w3.org)

**Fuente:** validator.w3.org sobre documento servido en `http://localhost:8080/product/:id` (2026-05-21).  
**Resumen:** 1 error CSS · 1 warning HTML · 0 info HTML en este informe.

**Nota:** Los avisos de `<meta … />` en `index.html` documentados en [home.md](./home.md) aplican a todas las rutas; en esta validación el validador solo reportó el badge Lovable.

### HTML

| # | ID validador | Severidad | Mensaje (texto del validador) | Línea/col | Elemento / snippet |
|---|--------------|-----------|-------------------------------|-----------|-------------------|
| 1 | vnuId1 | Warning | The `complementary` role is unnecessary for element `aside`. | 207:1–212:32 | `<aside id="lovable-badge" role="complementary" …>` |

**Origen probable:** badge «Edit with Lovable» inyectado en dev (no está en el repo fuente).

### CSS

| # | ID validador | Severidad | Mensaje | Línea/col (doc. validado) | Origen probable |
|---|--------------|-----------|---------|---------------------------|-----------------|
| 1 | vnuId0 | **Error** | CSS: `high` is not a `prefers-contrast` value | 188:32 | `@media (prefers-contrast: high)` en estilos del badge Lovable |

### Acciones W3C sugeridas

| Prioridad | Acción | Archivo / notas |
|-----------|--------|-----------------|
| Alta | Sustituir `prefers-contrast: high` por `more` / `less` o eliminar la regla | Estilos inyectados en dev; verificar en build de producción |
| Media | Quitar `role="complementary"` del `<aside>` del badge | Solo entorno Lovable/dev |
| Baja | Corregir `<meta … />` en plantilla si se revalida con informe completo | Ver [home.md](./home.md) — `index.html` |

---

## TAW (accesibilidad)

### Resumen TAW

- Nivel probado: WCAG 2.0 — nivel AA (informe TAW)
- **Problemas (fallos):** 8 incidencias en 7 criterios
- **Advertencias:** 20 (suma por criterio en informe)
- **No verificados / sin revisar / desconocido:** varios criterios requieren revisión manual (ver tabla inferior)
- Fuente: informe resumen TAW página `/product/:id` (2026-05-21)

### Fallos — corregir con prioridad Alta

| # | Criterio WCAG | Tipo TAW | Problemas | Advertencias | Descripción (criterio) | Componente probable | Prioridad |
|---|---------------|----------|-----------|--------------|------------------------|---------------------|-----------|
| 1 | 1.1.1 | Falla | 1 | 3 | Contenido no textual sin alternativa adecuada | Galería/imagen principal, miniaturas, iconos acción | Alta |
| 2 | 1.3.1 | Falla | 2 | 0 | Información y relaciones no determinables programáticamente | Precio, stock, variantes, breadcrumb, secciones | Alta |
| 3 | 2.4.4 | Falla | 1 | 0 | Propósito del enlace no deducible del texto o contexto | “Añadir al carrito”, favoritos, enlaces relacionados | Alta |
| 4 | 3.1.1 | Falla | 1 | 0 | Idioma de la página no declarado programáticamente | `<html lang>` en `index.html` (global) | Alta |
| 5 | 3.2.2 | Falla | 1 | 0 | Cambio de contexto al introducir datos sin aviso | Selector cantidad/variante que cambia vista o precio | Alta |
| 6 | 3.3.2 | Falla | 1 | 0 | Falta de etiquetas o instrucciones en controles | Cantidad, variantes, formularios en ficha | Alta |
| 7 | 4.1.2 | Falla | 1 | 0 | Nombre, función o valor no expuestos a AT | Botones icono, stepper cantidad, tabs descripción | Alta |

_Detalle por incidencia (selector, HTML concreto): pegar desde TAW al expandir cada criterio._

### Advertencias — prioridad Media (revisar y corregir si aplica)

| # | Criterio WCAG | Tipo TAW | Advertencias | Descripción (criterio) | Notas |
|---|---------------|----------|--------------|------------------------|-------|
| 8 | 1.1.1 | Advertencia | 3 | (incluidas en fila 1) | Galería y iconos secundarios |
| 9 | 1.4.4 | Desconocido | 2 | Redimensionamiento del texto al 200% | Layout ficha con zoom 200% |
| 10 | 2.4.1 | Desconocido | 1 | Evitar bloques (skip link) | 2 no verificados en informe |
| 11 | 2.4.2 | Desconocido | 1 | Título de página descriptivo | `<title>` con nombre del producto |
| 12 | 2.4.6 | Desconocido | 3 | Encabezados y etiquetas describen propósito | h1 nombre producto, labels cantidad |
| 13 | 2.4.7 | Desconocido | 4 | Foco visible en UI operable por teclado | Botones compra, galería, cantidad |
| 14 | 3.3.1 | Desconocido | 2 | Identificación de errores en formularios | Validación cantidad/variante |
| 15 | 3.3.3 | Desconocido | 1 | Sugerencias ante errores | Mensajes de ayuda |
| 16 | 3.3.4 | Desconocido | 3 | Prevención de errores en envíos críticos | Revisar flujo “añadir al carrito” |

### Sin revisar / no verificados en TAW (revisión manual)

| Criterio | Estado en informe | Notas |
|----------|-------------------|-------|
| 1.3.3 | Sin revisar (1) | Características sensoriales |
| 1.4.1, 1.4.3, 1.4.5 | Sin revisar | Color, contraste, imágenes de texto |
| 2.1.1, 2.1.2 | Sin revisar | Teclado / sin bloqueo de foco |
| 2.2.1, 2.2.2, 2.3.1 | Sin revisar | Tiempo / movimiento / destellos |
| 2.4.3, 2.4.5 | Sin revisar | Orden de foco / múltiples vías |
| 3.1.2, 3.2.1, 3.2.3, 3.2.4 | Sin revisar | Idioma partes / foco / consistencia |
| 3.2.2, 4.1.2 | No verificado (1) cada uno además del fallo | Completar prueba AT |

### Resumen por principio WCAG

| Principio | Problemas (incidencias) | Advertencias (suma) |
|-----------|-------------------------|---------------------|
| 1 Perceptible | 3 (1.1.1×1 + 1.3.1×2) | 5 |
| 2 Operable | 1 (2.4.4) | 9 |
| 3 Comprensible | 3 (3.1.1 + 3.2.2 + 3.3.2) | 6 |
| 4 Robusto | 1 (4.1.2) | 0 |

### Notas manuales

- Misma plantilla de fallos que `/products` pero **muchas menos advertencias 1.1.1** (3 vs 60) — coherente con una sola ficha.
- Registrar el **ID de producto** usado en TAW en Contexto para reproducir la auditoría.
- `<title>` dinámico con nombre del producto puede resolver 2.4.2 al implementar correcciones.

---

## Criterio de "hecho"

- [ ] 0 errores W3C (HTML + CSS)
- [ ] 0 warnings W3C HTML relevantes (badge Lovable en dev)
- [ ] 0 fallos TAW en criterios 1.1.1, 1.3.1, 2.4.4, 3.1.1, 3.2.2, 3.3.2, 4.1.2
- [ ] Advertencias prioritarias revisadas (2.4.6, 2.4.7, 3.3.x)
- [ ] Re-auditada tras el fix (mismo ID de producto)
- [ ] Estado actualizado en [00-index.md](./00-index.md)
