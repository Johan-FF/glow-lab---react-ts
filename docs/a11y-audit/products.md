# Products — `/products`

**Fecha auditoría:** 2026-05-21  
**URL probada:** http://localhost:8080/products  
**Estado:** pendiente (TAW y W3C documentados; faltan detalle de incidencias TAW y correcciones)

**Código:** `src/pages/Products.tsx` (+ tarjetas de producto, filtros; layout global)

## Contexto

- Viewport / zoom usado en TAW: _rellenar_
- Navegador: _rellenar_
- Filtros / búsqueda activos durante la prueba: _rellenar_
- Notas: Informe TAW = resumen por criterio WCAG 2.0 AA. **1.1.1 con 60 advertencias** sugiere muchas imágenes de producto sin `alt` adecuado. Ampliar cada fila con detalle desde TAW.

---

## W3C (validator.w3.org)

**Fuente:** validator.w3.org sobre documento servido en `http://localhost:8080/products` (2026-05-21).  
**Resumen:** 1 error CSS · 1 warning HTML · 0 info HTML en este informe.

**Nota:** Los avisos de `<meta … />` en `index.html` documentados en [home.md](./home.md) aplican a todas las rutas; en esta validación de `/products` el validador solo reportó el badge Lovable.

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
- **Advertencias:** 105 (suma por criterio en informe; **60 en 1.1.1**, **31 en 2.4.6**)
- **No verificados / sin revisar / desconocido:** varios criterios requieren revisión manual (ver tabla inferior)
- Fuente: informe resumen TAW página `/products` (2026-05-21)

### Fallos — corregir con prioridad Alta

| # | Criterio WCAG | Tipo TAW | Problemas | Advertencias | Descripción (criterio) | Componente probable | Prioridad |
|---|---------------|----------|-----------|--------------|------------------------|---------------------|-----------|
| 1 | 1.1.1 | Falla | 1 | 60 | Contenido no textual sin alternativa adecuada | Imágenes de producto en grid/listado, iconos favoritos/carrito | Alta |
| 2 | 1.3.1 | Falla | 2 | 0 | Información y relaciones no determinables programáticamente | Grid de productos, filtros, ordenación, precios | Alta |
| 3 | 2.4.4 | Falla | 1 | 0 | Propósito del enlace no deducible del texto o contexto | Tarjetas clicables, “ver detalle”, iconos sin texto | Alta |
| 4 | 3.1.1 | Falla | 1 | 0 | Idioma de la página no declarado programáticamente | `<html lang>` en `index.html` (global) | Alta |
| 5 | 3.2.2 | Falla | 1 | 0 | Cambio de contexto al introducir datos sin aviso | Búsqueda/filtros que recargan o navegan al cambiar | Alta |
| 6 | 3.3.2 | Falla | 1 | 0 | Falta de etiquetas o instrucciones en controles | Buscador, selects de filtro/orden | Alta |
| 7 | 4.1.2 | Falla | 1 | 0 | Nombre, función o valor no expuestos a AT | Botones icono, filtros custom, paginación | Alta |

_Detalle por incidencia (selector, HTML concreto): pegar desde TAW al expandir cada criterio._

### Advertencias — prioridad Media (revisar y corregir si aplica)

| # | Criterio WCAG | Tipo TAW | Advertencias | Descripción (criterio) | Notas |
|---|---------------|----------|--------------|------------------------|-------|
| 8 | 1.1.1 | Advertencia | 60 | (incluidas en fila 1) | Revisar `alt` en **cada** imagen de producto |
| 9 | 1.4.4 | Desconocido | 2 | Redimensionamiento del texto al 200% | Probar grid con zoom 200% |
| 10 | 2.4.1 | Desconocido | 1 | Evitar bloques (skip link) | 2 no verificados en informe |
| 11 | 2.4.2 | Desconocido | 1 | Título de página descriptivo | `<title>` para catálogo |
| 12 | 2.4.6 | Desconocido | 31 | Encabezados y etiquetas describen propósito | h1 listado, labels filtros, nombres en tarjetas |
| 13 | 2.4.7 | Desconocido | 4 | Foco visible en UI operable por teclado | Tarjetas, filtros, paginación |
| 14 | 3.3.1 | Desconocido | 2 | Identificación de errores en formularios | Búsqueda sin resultados |
| 15 | 3.3.3 | Desconocido | 1 | Sugerencias ante errores | Validación búsqueda |
| 16 | 3.3.4 | Desconocido | 3 | Prevención de errores en envíos críticos | Probable NA |

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
| 1 Perceptible | 3 (1.1.1×1 + 1.3.1×2) | 62 |
| 2 Operable | 1 (2.4.4) | 37 |
| 3 Comprensible | 3 (3.1.1 + 3.2.2 + 3.3.2) | 6 |
| 4 Robusto | 1 (4.1.2) | 0 |

### Notas manuales

- Página con **mayor volumen de advertencias 1.1.1 (60)** del catálogo auditado hasta ahora → priorizar componente de **tarjeta de producto** y listado.
- **2.4.6 (31 advertencias)** alineado con muchas tarjetas/controles sin encabezado o label claro.
- Corregir `ProductCard` (o equivalente) una vez puede bajar incidencias en `/`, `/products` y rutas de detalle.

---

## Criterio de "hecho"

- [ ] 0 errores W3C (HTML + CSS)
- [ ] 0 warnings W3C HTML relevantes (badge Lovable en dev)
- [ ] 0 fallos TAW en criterios 1.1.1, 1.3.1, 2.4.4, 3.1.1, 3.2.2, 3.3.2, 4.1.2
- [ ] Advertencias 1.1.1 y 2.4.6 revisadas (mayor impacto)
- [ ] Re-auditada tras el fix
- [ ] Estado actualizado en [00-index.md](./00-index.md)
