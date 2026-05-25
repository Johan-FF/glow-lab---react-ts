# Cart — `/cart`

**Fecha auditoría:** 2026-05-21  
**URL probada:** http://localhost:8080/cart  
**Estado:** hecho (código 2026-05-25; re-auditar TAW/W3C)

**Código:** `src/pages/Cart.tsx` (+ posible solapamiento con `CartSidebar`)

## Contexto

- Viewport / zoom usado en TAW: _rellenar_
- Navegador: _rellenar_
- Carrito vacío o con productos (cuántos): _rellenar_
- Notas: Informe TAW = resumen por criterio WCAG 2.0 AA. Auditar también con **carrito vacío** y **con ítems** si los resultados difieren.

---

## W3C (validator.w3.org)

**Fuente:** validator.w3.org sobre documento servido en `http://localhost:8080/cart` (2026-05-21).  
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
| 1 | vnuId0 | **Error** | CSS: `high` is not a `prefers-contrast` value | 188:32 | `@media (prefers-contrast: high)` en estilos del badge Lovable |

### Acciones W3C sugeridas

| Prioridad | Acción | Archivo / notas |
|-----------|--------|-----------------|
| Alta | Sustituir `prefers-contrast: high` por `more` / `less` o eliminar la regla | Estilos inyectados en dev; verificar en build de producción |
| Media | Quitar `role="complementary"` del `<aside>` del badge | Solo entorno Lovable/dev |
| Baja | Quitar `/` final en `<meta … />` → `<meta …>` (HTML5) | `index.html` líneas 4, 5, 8, 12, 15, 16 y resto de `<meta />` con barra |

---

## TAW (accesibilidad)

### Resumen TAW

- Nivel probado: WCAG 2.0 — nivel AA (informe TAW)
- **Problemas (fallos):** 8 incidencias en 7 criterios
- **Advertencias:** 14 (suma por criterio en informe)
- **No verificados / sin revisar / desconocido:** varios criterios requieren revisión manual (ver tabla inferior)
- Fuente: informe resumen TAW página `/cart` (2026-05-21)

### Fallos — corregir con prioridad Alta

| # | Criterio WCAG | Tipo TAW | Problemas | Advertencias | Descripción (criterio) | Componente probable | Prioridad |
|---|---------------|----------|-----------|--------------|------------------------|---------------------|-----------|
| 1 | 1.1.1 | Falla | 1 | 0 | Contenido no textual sin alternativa adecuada | Imágenes de línea, iconos +/-, eliminar, vacío | Alta |
| 2 | 1.3.1 | Falla | 2 | 0 | Información y relaciones no determinables programáticamente | Tabla/lista ítems, totales, cantidades | Alta |
| 3 | 2.4.4 | Falla | 1 | 0 | Propósito del enlace no deducible del texto o contexto | “Seguir comprando”, checkout, quitar ítem | Alta |
| 4 | 3.1.1 | Falla | 1 | 0 | Idioma de la página no declarado programáticamente | `<html lang>` en `index.html` (global) | Alta |
| 5 | 3.2.2 | Falla | 1 | 0 | Cambio de contexto al introducir datos sin aviso | Cambio cantidad que navega o actualiza sin aviso | Alta |
| 6 | 3.3.2 | Falla | 1 | 0 | Falta de etiquetas o instrucciones en controles | Inputs cantidad, cupón, controles del carrito | Alta |
| 7 | 4.1.2 | Falla | 1 | 0 | Nombre, función o valor no expuestos a AT | Botones cantidad, eliminar, steppers custom | Alta |

_Detalle por incidencia (selector, HTML concreto): pegar desde TAW al expandir cada criterio._

### Advertencias — prioridad Media (revisar y corregir si aplica)

| # | Criterio WCAG | Tipo TAW | Advertencias | Descripción (criterio) | Notas |
|---|---------------|----------|--------------|------------------------|-------|
| 8 | 1.4.4 | Desconocido | 2 | Redimensionamiento del texto al 200% | Tabla carrito / resumen con zoom 200% |
| 9 | 2.4.2 | Desconocido | 1 | Título de página descriptivo | `<title>` — “Carrito” |
| 10 | 2.4.6 | Desconocido | 1 | Encabezados y etiquetas describen propósito | h1 carrito, labels cantidad/cupón |
| 11 | 2.4.7 | Desconocido | 4 | Foco visible en UI operable por teclado | +/- cantidad, CTA checkout |
| 12 | 3.3.1 | Desconocido | 2 | Identificación de errores en formularios | Cupón inválido, cantidad mín/máx |
| 13 | 3.3.3 | Desconocido | 1 | Sugerencias ante errores | Mensajes al fallar cupón |
| 14 | 3.3.4 | Desconocido | 3 | Prevención de errores antes de checkout | Confirmación / revisión pedido |

### Sin revisar / no verificados en TAW (revisión manual)

| Criterio | Estado en informe | Notas |
|----------|-------------------|-------|
| 1.3.3 | Sin revisar (1) | Características sensoriales |
| 1.4.1, 1.4.3, 1.4.5 | Sin revisar | Color, contraste, imágenes de texto |
| 2.1.1, 2.1.2 | Sin revisar | Teclado / sin bloqueo de foco |
| 2.2.1, 2.2.2, 2.3.1 | Sin revisar | Tiempo / movimiento / destellos |
| 2.4.1 | Sin revisar (1) | Evitar bloques — sin advertencia en informe |
| 2.4.3, 2.4.5 | Sin revisar | Orden de foco / múltiples vías |
| 3.1.2, 3.2.1, 3.2.3, 3.2.4 | Sin revisar | Idioma partes / foco / consistencia |
| 3.2.2, 4.1.2 | No verificado (1) cada uno además del fallo | Completar prueba AT |

### Resumen por principio WCAG

| Principio | Problemas (incidencias) | Advertencias (suma) |
|-----------|-------------------------|---------------------|
| 1 Perceptible | 3 (1.1.1×1 + 1.3.1×2) | 2 |
| 2 Operable | 1 (2.4.4) | 6 |
| 3 Comprensible | 3 (3.1.1 + 3.2.2 + 3.3.2) | 6 |
| 4 Robusto | 1 (4.1.2) | 0 |

### Notas manuales

- **3.3.4 (3 advertencias)** y flujo hacia checkout: revisar confirmación antes de pagar.
- Controles de **cantidad** y **eliminar** suelen concentrar fallos 3.2.2, 3.3.2 y 4.1.2.
- Si TAW se ejecutó solo con carrito vacío o solo con ítems, documentar ambos estados y re-auditar el otro.
- Comparar con [global.md](./global.md) si `CartSidebar` comparte los mismos patrones.

---

## Criterio de "hecho"

- [ ] 0 errores W3C (HTML + CSS)
- [ ] 0 warnings W3C HTML relevantes (badge Lovable en dev)
- [ ] 0 fallos TAW en criterios 1.1.1, 1.3.1, 2.4.4, 3.1.1, 3.2.2, 3.3.2, 4.1.2
- [ ] Advertencias 2.4.7 y 3.3.x revisadas
- [ ] Re-auditada tras el fix (vacío y con ítems)
- [ ] Estado actualizado en [00-index.md](./00-index.md)
