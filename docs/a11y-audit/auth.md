# Auth — `/auth`

**Fecha auditoría:** 2026-05-21  
**URL probada:** http://localhost:8080/auth  
**Estado:** pendiente (TAW documentado; faltan detalle de incidencias y W3C)

**Código:** `src/pages/Auth.tsx` (+ layout global: Header, SubHeader)

## Contexto

- Viewport / zoom usado en TAW: _rellenar_
- Navegador: _rellenar_
- Modo probado (login / registro / recuperar): _rellenar ambos si aplica_
- Notas: Informe TAW = resumen por criterio WCAG 2.0 AA. Ampliar cada fila con el detalle de incidencias desde la vista expandida de TAW.

---

## W3C (validator.w3.org)

### HTML

| # | Severidad | Mensaje (texto del validador) | Línea/col | Elemento / snippet |
|---|-----------|-------------------------------|-----------|------------------|
| — | — | _Pendiente de auditoría W3C_ | — | — |

### CSS

| # | Severidad | Mensaje | Archivo / regla |
|---|-----------|---------|-----------------|
| — | — | _Pendiente_ | — |

---

## TAW (accesibilidad)

### Resumen TAW

- Nivel probado: WCAG 2.0 — nivel AA (informe TAW)
- **Problemas (fallos):** 9 incidencias en 7 criterios
- **Advertencias:** 23 (suma por criterio en informe)
- **No verificados / sin revisar / desconocido:** varios criterios requieren revisión manual (ver tabla inferior)
- Fuente: informe resumen TAW página `/auth` (2026-05-21)

### Fallos — corregir con prioridad Alta

| # | Criterio WCAG | Tipo TAW | Problemas | Advertencias | Descripción (criterio) | Componente probable | Prioridad |
|---|---------------|----------|-----------|--------------|------------------------|---------------------|-----------|
| 1 | 1.1.1 | Falla | 1 | 0 | Contenido no textual sin alternativa adecuada | Iconos decorativos, logo, botones solo icono | Alta |
| 2 | 1.3.1 | Falla | 3 | 0 | Información y relaciones no determinables programáticamente | Formulario login/registro, grupos de campos, mensajes de error | Alta |
| 3 | 2.4.4 | Falla | 1 | 0 | Propósito del enlace no deducible del texto o contexto | Enlaces “¿Olvidaste contraseña?”, tabs, iconos | Alta |
| 4 | 3.1.1 | Falla | 1 | 0 | Idioma de la página no declarado programáticamente | `<html lang>` en `index.html` (global) | Alta |
| 5 | 3.2.2 | Falla | 1 | 0 | Cambio de contexto al introducir datos sin aviso | Cambio login/registro al escribir o al foco | Alta |
| 6 | 3.3.2 | Falla | 1 | 0 | Falta de etiquetas o instrucciones en controles | Inputs email/password, checkbox, botones submit | Alta |
| 7 | 4.1.2 | Falla | 1 | 0 | Nombre, función o valor no expuestos a AT | Tabs custom, toggle password, botones Radix/shadcn | Alta |

_Detalle por incidencia (selector, HTML concreto): pegar desde TAW al expandir cada criterio._

### Advertencias — prioridad Media (revisar y corregir si aplica)

| # | Criterio WCAG | Tipo TAW | Advertencias | Descripción (criterio) | Notas |
|---|---------------|----------|--------------|------------------------|-------|
| 8 | 1.4.4 | Desconocido | 2 | Redimensionamiento del texto al 200% | Probar zoom 200% en formulario |
| 9 | 2.4.1 | Desconocido | 1 | Evitar bloques (skip link) | 2 no verificados en informe |
| 10 | 2.4.2 | Desconocido | 1 | Título de página descriptivo | `<title>` para auth |
| 11 | 2.4.6 | Desconocido | 3 | Encabezados y etiquetas describen propósito | h1 del formulario, labels asociados |
| 12 | 2.4.7 | Desconocido | 4 | Foco visible en UI operable por teclado | Inputs, tabs, botones |
| 13 | 3.3.1 | Desconocido | 4 | Identificación de errores en formularios | Validación email/password |
| 14 | 3.3.3 | Desconocido | 2 | Sugerencias ante errores | Mensajes de ayuda al fallar validación |
| 15 | 3.3.4 | Desconocido | 6 | Prevención de errores en envíos críticos | Revisar si aplica a registro (datos personales) |

### Sin revisar / no verificados en TAW (revisión manual)

| Criterio | Estado en informe | Notas |
|----------|-------------------|-------|
| 1.3.3 | Sin revisar (1) | Características sensoriales |
| 1.4.1, 1.4.3, 1.4.5 | Sin revisar | Color, contraste, imágenes de texto |
| 2.1.1, 2.1.2 | Sin revisar | Teclado / sin bloqueo de foco |
| 2.2.1, 2.2.2, 2.3.1 | Sin revisar | Tiempo / movimiento / destellos |
| 2.4.3, 2.4.5 | Sin revisar | Orden de foco / múltiples vías |
| 3.1.2, 3.2.1, 3.2.3, 3.2.4 | Sin revisar | Idioma partes / foco / consistencia |
| 3.2.2 | No verificado (1) además del fallo | Completar prueba |
| 4.1.2 | No verificado (1) además del fallo | Completar prueba AT |

### Resumen por principio WCAG

| Principio | Problemas (incidencias) | Advertencias (suma) |
|-----------|-------------------------|---------------------|
| 1 Perceptible | 4 (1.1.1×1 + 1.3.1×3) | 2 |
| 2 Operable | 1 (2.4.4) | 9 |
| 3 Comprensible | 3 (3.1.1 + 3.2.2 + 3.3.2) | 12 |
| 4 Robusto | 1 (4.1.2) | 0 |

### Notas manuales

- **1.3.1 (3 problemas)** y **3.3.x (12 advertencias)** sugieren foco fuerte en el **formulario de autenticación** (`Auth.tsx`).
- Criterios compartidos con `/` (3.1.1, 4.1.2, layout): pueden resolverse en [global.md](./global.md) o `index.html` una sola vez.
- Probar TAW en **modo login** y **modo registro** por separado si el informe mezcló ambos.

---

## Criterio de "hecho"

- [ ] 0 errores W3C HTML
- [ ] 0 fallos TAW en criterios 1.1.1, 1.3.1, 2.4.4, 3.1.1, 3.2.2, 3.3.2, 4.1.2
- [ ] Advertencias prioritarias revisadas (3.3.1, 3.3.3, 3.3.4, 2.4.6, 2.4.7)
- [ ] Re-auditada tras el fix (login y registro)
- [ ] Estado actualizado en [00-index.md](./00-index.md)
