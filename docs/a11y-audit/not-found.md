# Not found (404) — `*`

**Fecha auditoría:** 2026-05-21  
**URL probada:** http://localhost:8080/ruta-que-no-existe  
**Estado:** hecho (código 2026-05-25; re-auditar TAW/W3C; 3.1.1 ya pasaba)

**Código:** `src/pages/NotFound.tsx` (+ layout global)

## Contexto

- Viewport / zoom usado en TAW: _rellenar_
- Navegador: _rellenar_
- **URL exacta usada para provocar el 404:** _pegar ruta probada_
- Notas: Informe TAW = resumen por criterio WCAG 2.0 AA. **3.1.1 pasa** en esta página (única ruta auditada sin fallo en idioma).

---

## W3C (validator.w3.org)

**Fuente:** validator.w3.org sobre documento servido en ruta inexistente (`/*` → 404, p. ej. `http://localhost:8080/ruta-que-no-existe`) (2026-05-21).  
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
- **Problemas (fallos):** 7 incidencias en **6** criterios (**3.1.1 sin fallo**)
- **Advertencias:** 14 (suma por criterio en informe)
- **No verificados / sin revisar / desconocido:** varios criterios requieren revisión manual (ver tabla inferior)
- Fuente: informe resumen TAW página 404 / catch-all `*` (2026-05-21)

### Fallos — corregir con prioridad Alta

| # | Criterio WCAG | Tipo TAW | Problemas | Advertencias | Descripción (criterio) | Componente probable | Prioridad |
|---|---------------|----------|-----------|--------------|------------------------|---------------------|-----------|
| 1 | 1.1.1 | Falla | 1 | 0 | Contenido no textual sin alternativa adecuada | Ilustración 404, iconos decorativos | Alta |
| 2 | 1.3.1 | Falla | 2 | 0 | Información y relaciones no determinables programáticamente | Mensaje error, estructura main, enlaces de ayuda | Alta |
| 3 | 2.4.4 | Falla | 1 | 0 | Propósito del enlace no deducible del texto o contexto | “Volver inicio”, enlaces sin texto claro | Alta |
| 4 | 3.2.2 | Falla | 1 | 0 | Cambio de contexto al introducir datos sin aviso | Controles que redirigen (si existen) | Alta |
| 5 | 3.3.2 | Falla | 1 | 0 | Falta de etiquetas o instrucciones en controles | Probable NA; verificar detalle TAW | Media |
| 6 | 4.1.2 | Falla | 1 | 0 | Nombre, función o valor no expuestos a AT | Botones/enlaces custom en página 404 | Alta |

### Criterio que pasa en TAW (referencia)

| Criterio | Resultado TAW | Notas |
|----------|---------------|-------|
| **3.1.1** | **Pasa** | Si `lang` se corrigió globalmente, re-validar otras rutas; en 404 TAW no reportó fallo |

_Detalle por incidencia (selector, HTML concreto): pegar desde TAW al expandir cada criterio._

### Advertencias — prioridad Media (revisar y corregir si aplica)

| # | Criterio WCAG | Tipo TAW | Advertencias | Descripción (criterio) | Notas |
|---|---------------|----------|--------------|------------------------|-------|
| 7 | 1.4.4 | Desconocido | 2 | Redimensionamiento del texto al 200% | Mensaje 404 con zoom 200% |
| 8 | 2.4.2 | Desconocido | 1 | Título de página descriptivo | `<title>` — “Página no encontrada” (no genérico) |
| 9 | 2.4.6 | Desconocido | 1 | Encabezados y etiquetas describen propósito | **h1** claro (“404” / “Página no encontrada”) |
| 10 | 2.4.7 | Desconocido | 4 | Foco visible en UI operable por teclado | Enlaces de salida |
| 11 | 3.3.1 | Desconocido | 2 | Identificación de errores | Probable NA sin formulario |
| 12 | 3.3.3 | Desconocido | 1 | Sugerencias ante errores | Probable NA |
| 13 | 3.3.4 | Desconocido | 3 | Prevención de errores | Probable NA |

### Sin revisar / no verificados en TAW (revisión manual)

| Criterio | Estado en informe | Notas |
|----------|-------------------|-------|
| 1.3.3 | Sin revisar (1) | Características sensoriales |
| 1.4.1, 1.4.3, 1.4.5 | Sin revisar | Color, contraste, imágenes de texto |
| 2.1.1, 2.1.2 | Sin revisar | Teclado / sin bloqueo de foco |
| 2.2.1, 2.2.2, 2.3.1 | Sin revisar | Tiempo / movimiento / destellos |
| 2.4.1 | Sin revisar (1) | Evitar bloques |
| 2.4.3, 2.4.5 | Sin revisar | Orden de foco / múltiples vías |
| 3.1.2, 3.2.1, 3.2.3, 3.2.4 | Sin revisar | Idioma partes / foco / consistencia |
| 3.2.2, 4.1.2 | No verificado (1) cada uno además del fallo | Completar prueba AT |

### Resumen por principio WCAG

| Principio | Problemas (incidencias) | Advertencias (suma) |
|-----------|-------------------------|---------------------|
| 1 Perceptible | 3 (1.1.1×1 + 1.3.1×2) | 2 |
| 2 Operable | 1 (2.4.4) | 6 |
| 3 Comprensible | 1 (3.2.2) — **sin 3.1.1** | 6 |
| 4 Robusto | 1 (4.1.2) | 0 |

### Notas manuales

- Comprobar en servidor que la respuesta HTTP sea **404** (no 200 con contenido de error).
- **h1** único y mensaje claro para usuarios de lectores de pantalla.
- Enlace principal de recuperación con texto descriptivo (no solo “Click aquí”).
- Tras corregir `lang` en `index.html`, 3.1.1 podría pasar en todas las rutas; en TAW solo 404 apareció como “Pasa” en el momento del informe.

---

## Criterio de "hecho"

- [ ] 0 errores W3C (HTML + CSS)
- [ ] 0 warnings W3C HTML relevantes (badge Lovable en dev)
- [ ] 0 fallos TAW en 1.1.1, 1.3.1, 2.4.4, 3.2.2, 3.3.2 (si aplica), 4.1.2
- [ ] 2.4.2 título específico de error 404
- [ ] Re-auditada tras el fix
- [ ] Estado actualizado en [00-index.md](./00-index.md)
