# Home — `/`

**Fecha auditoría:** 2026-05-21  
**URL probada:** http://localhost:8080/  
**Estado:** pendiente (TAW y W3C documentados; faltan detalle de incidencias TAW y correcciones)

**Código:** `src/pages/Home.tsx` (+ layout global: Header, SubHeader)

## Contexto

- Viewport / zoom usado en TAW: _rellenar_
- Navegador: _rellenar_
- Notas: Informe TAW = resumen por criterio WCAG 2.0 AA. Ampliar cada fila con el detalle de incidencias desde la vista expandida de TAW.

---

## W3C (validator.w3.org)

**Fuente:** validator.w3.org sobre documento servido en `http://localhost:8080/` (2026-05-21).  
**Resumen:** 1 error CSS · 1 warning HTML · 6 info HTML.

### HTML

| # | ID validador | Severidad | Mensaje (texto del validador) | Línea/col | Elemento / snippet |
|---|--------------|-----------|-------------------------------|-----------|-------------------|
| 1 | vnuId2 | Info | Trailing slash on void elements has no effect (and interacts badly with unquoted attribute values). | 4:5–4:28 | `<meta charset="UTF-8" />` |
| 2 | vnuId3 | Info | Idem | 5:5–5:76 | `<meta name="viewport" content="width=device-width, initial-scale=1.0" />` |
| 3 | vnuId4 | Info | Idem | 8:5–8:44 | `<meta name="author" content="GlowLab" />` |
| 4 | vnuId5 | Info | Idem | 12:5–12:49 | `<meta property="og:type" content="website" />` |
| 5 | vnuId6 | Info | Idem | 15:5–15:62 | `<meta name="twitter:card" content="summary_large_image" />` |
| 6 | vnuId7 | Info | Idem | 16:5–16:55 | `<meta name="twitter:site" content="@lovable_dev" />` |
| 7 | vnuId1 | Warning | The `complementary` role is unnecessary for element `aside`. | 207:1–212:32 | `<aside id="lovable-badge" role="complementary" …>` |

**Origen probable:** filas 1–6 → `index.html` (plantilla Vite). Fila 7 → badge «Edit with Lovable» inyectado en dev (no está en el repo fuente).

### CSS

| # | ID validador | Severidad | Mensaje | Línea/col (doc. validado) | Origen probable |
|---|--------------|-----------|---------|---------------------------|-----------------|
| 1 | vnuId0 | **Error** | CSS: `high` is not a `prefers-contrast` value | 188:32 | `@media (prefers-contrast: high)` en estilos del badge Lovable (documento validado >171 líneas de `src/index.css` en repo) |

### Acciones W3C sugeridas

| Prioridad | Acción | Archivo / notas |
|-----------|--------|-----------------|
| Alta | Sustituir `prefers-contrast: high` por valor válido (`more` / `less` según [Media Queries 5](https://www.w3.org/TR/mediaqueries-5/#prefers-contrast)) o eliminar la regla si no aplica | Estilos inyectados en dev; verificar si desaparece en build de producción |
| Media | Quitar `role="complementary"` del `<aside>` del badge (redundante con semántica nativa) | Solo en entorno Lovable/dev |
| Baja | Quitar `/` final en `<meta … />` → `<meta …>` (HTML5) | `index.html` líneas 4, 5, 8, 12, 15, 16 y resto de `<meta />` con barra |

---

## TAW (accesibilidad)

### Resumen TAW

- Nivel probado: WCAG 2.0 — nivel AA (informe TAW)
- **Problemas (fallos):** 8 criterios con al menos 1 problema
- **Advertencias:** 31 (suma por criterio en informe)
- **No verificados / sin revisar / desconocido:** varios criterios requieren revisión manual (ver tabla inferior)
- Fuente: informe resumen TAW página raíz `/` (2026-05-21)

### Fallos — corregir con prioridad Alta

| # | Criterio WCAG | Tipo TAW | Problemas | Advertencias | Descripción (criterio) | Componente probable | Prioridad |
|---|---------------|----------|-----------|--------------|------------------------|---------------------|-----------|
| 1 | 1.1.1 | Falla | 1 | 8 | Contenido no textual sin alternativa adecuada | Imágenes/iconos en Home, Header, productos | Alta |
| 2 | 1.3.1 | Falla | 2 | 0 | Información y relaciones no determinables programáticamente | Estructura semántica, listas, landmarks, tablas | Alta |
| 3 | 2.4.4 | Falla | 1 | 0 | Propósito del enlace no deducible del texto o contexto | Enlaces genéricos (“ver más”, iconos sin texto) | Alta |
| 4 | 3.1.1 | Falla | 1 | 0 | Idioma de la página no declarado programáticamente | `<html lang>` en `index.html` | Alta |
| 5 | 3.2.2 | Falla | 1 | 0 | Cambio de contexto al introducir datos sin aviso | Inputs/selects que navegan o cambian vista al cambiar valor | Alta |
| 6 | 3.3.2 | Falla | 1 | 0 | Falta de etiquetas o instrucciones en controles de formulario | Buscador, filtros, formularios en home/header | Alta |
| 7 | 4.1.2 | Falla | 1 | 0 | Nombre, función o valor no expuestos a AT | Botones custom, iconos, componentes Radix/shadcn | Alta |

_Detalle por incidencia (selector, HTML concreto): pegar desde TAW al expandir cada criterio._

### Advertencias — prioridad Media (revisar y corregir si aplica)

| # | Criterio WCAG | Tipo TAW | Advertencias | Descripción (criterio) | Notas |
|---|---------------|----------|--------------|------------------------|-------|
| 8 | 1.1.1 | Advertencia | 8 | (incluidas en fila 1.1.1) | Revisar junto con el fallo |
| 9 | 1.4.4 | Desconocido | 2 | Redimensionamiento del texto al 200% | Probar zoom 200% manualmente |
| 10 | 2.4.1 | Desconocido | 1 | Evitar bloques (skip link) | 2 no verificados en informe |
| 11 | 2.4.2 | Desconocido | 1 | Título de página descriptivo | Revisar `<title>` / react-helmet si existe |
| 12 | 2.4.6 | Desconocido | 10 | Encabezados y etiquetas describen propósito | Jerarquía h1–h6, labels de controles |
| 13 | 2.4.7 | Desconocido | 4 | Foco visible en UI operable por teclado | Estilos `:focus-visible` en tema/CSS |
| 14 | 3.3.1 | Desconocido | 2 | Identificación de errores en formularios | Si hay validación en home |
| 15 | 3.3.3 | Desconocido | 1 | Sugerencias ante errores | Formularios |
| 16 | 3.3.4 | Desconocido | 3 | Prevención de errores en transacciones | Probable NA en home |

### Sin revisar / no verificados en TAW (revisión manual)

| Criterio | Estado en informe | Notas |
|----------|-------------------|-------|
| 1.3.3 | Sin revisar (1) | Características sensoriales |
| 1.4.1 | Sin revisar (1) | Uso del color |
| 1.4.3 | Sin revisar (1) | Contraste mínimo |
| 1.4.5 | Sin revisar (1) | Imágenes de texto |
| 2.1.1, 2.1.2 | Sin revisar | Teclado / sin bloqueo de foco |
| 2.2.1, 2.2.2 | Sin revisar | Tiempo / contenido en movimiento |
| 2.3.1 | Sin revisar | Destellos |
| 2.4.3, 2.4.5 | Sin revisar | Orden de foco / múltiples vías |
| 3.1.2, 3.2.1, 3.2.3, 3.2.4 | Sin revisar | Idioma partes / foco / consistencia |
| 4.1.2 | No verificado (1) además del fallo | Completar prueba AT |

### Resumen por principio WCAG

| Principio | Problemas (suma criterios) | Advertencias (suma) |
|-----------|----------------------------|---------------------|
| 1 Perceptible | 3 (1.1.1×1 + 1.3.1×2) | 10 |
| 2 Operable | 1 (2.4.4) | 18 |
| 3 Comprensible | 3 (3.1.1 + 3.2.2 + 3.3.2) | 6 |
| 4 Robusto | 1 (4.1.2) | 0 |

### Notas manuales

- Varios fallos pueden originarse en **layout global** (Header/SubHeader); valorar duplicar o referenciar en [global.md](./global.md) tras ver detalle TAW.
- Cuando tengas el **listado de incidencias** (pantalla detalle TAW por criterio), añadir filas con selector/HTML bajo cada número de la tabla de fallos.

---

## Criterio de "hecho"

- [ ] 0 errores W3C (HTML + CSS)
- [ ] 0 warnings W3C HTML relevantes (badge Lovable en dev)
- [ ] 0 fallos TAW en criterios 1.1.1, 1.3.1, 2.4.4, 3.1.1, 3.2.2, 3.3.2, 4.1.2
- [ ] Advertencias prioritarias revisadas (2.4.6, 2.4.7, 1.4.4)
- [ ] Re-auditada tras el fix
- [ ] Estado actualizado en [00-index.md](./00-index.md)
