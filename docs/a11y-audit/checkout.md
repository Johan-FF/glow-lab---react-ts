# Checkout — `/checkout`

**Fecha auditoría:** 2026-05-21  
**URL probada:** http://localhost:8080/checkout  
**Estado:** pendiente (TAW documentado; faltan detalle de incidencias y W3C)

**Código:** `src/pages/Checkout.tsx` (+ layout global)

## Contexto

- Viewport / zoom usado en TAW: _rellenar_
- Navegador: _rellenar_
- Usuario autenticado (sí/no): _rellenar_
- Notas: Informe TAW = resumen por criterio WCAG 2.0 AA. Página de **transacción** — priorizar 3.3.4 y validación de formulario.

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
- **Problemas (fallos):** 8 incidencias en 7 criterios
- **Advertencias:** 14 (suma por criterio en informe)
- **No verificados / sin revisar / desconocido:** varios criterios requieren revisión manual (ver tabla inferior)
- Fuente: informe resumen TAW página `/checkout` (2026-05-21)

### Fallos — corregir con prioridad Alta

| # | Criterio WCAG | Tipo TAW | Problemas | Advertencias | Descripción (criterio) | Componente probable | Prioridad |
|---|---------------|----------|-----------|--------------|------------------------|---------------------|-----------|
| 1 | 1.1.1 | Falla | 1 | 0 | Contenido no textual sin alternativa adecuada | Iconos pago/envío, logos métodos de pago | Alta |
| 2 | 1.3.1 | Falla | 2 | 0 | Información y relaciones no determinables programáticamente | Formulario envío/pago, resumen pedido, fieldsets | Alta |
| 3 | 2.4.4 | Falla | 1 | 0 | Propósito del enlace no deducible del texto o contexto | Volver al carrito, enlaces legales, iconos | Alta |
| 4 | 3.1.1 | Falla | 1 | 0 | Idioma de la página no declarado programáticamente | `<html lang>` en `index.html` (global) | Alta |
| 5 | 3.2.2 | Falla | 1 | 0 | Cambio de contexto al introducir datos sin aviso | Select país/CP que cambia envío o navega | Alta |
| 6 | 3.3.2 | Falla | 1 | 0 | Falta de etiquetas o instrucciones en controles | Dirección, tarjeta, todos los campos obligatorios | Alta |
| 7 | 4.1.2 | Falla | 1 | 0 | Nombre, función o valor no expuestos a AT | Radios pago, selects custom, botón pagar | Alta |

_Detalle por incidencia (selector, HTML concreto): pegar desde TAW al expandir cada criterio._

### Advertencias — prioridad Media (revisar y corregir si aplica)

| # | Criterio WCAG | Tipo TAW | Advertencias | Descripción (criterio) | Notas |
|---|---------------|----------|--------------|------------------------|-------|
| 8 | 1.4.4 | Desconocido | 2 | Redimensionamiento del texto al 200% | Formulario multi-paso con zoom 200% |
| 9 | 2.4.2 | Desconocido | 1 | Título de página descriptivo | `<title>` — “Checkout” / “Pago” |
| 10 | 2.4.6 | Desconocido | 1 | Encabezados y etiquetas describen propósito | h1 checkout, secciones envío/pago |
| 11 | 2.4.7 | Desconocido | 4 | Foco visible en UI operable por teclado | Campos, radios, CTA finalizar pedido |
| 12 | 3.3.1 | Desconocido | 2 | Identificación de errores en formularios | Validación campos obligatorios / tarjeta |
| 13 | 3.3.3 | Desconocido | 1 | Sugerencias ante errores | Texto de ayuda al fallar validación |
| 14 | 3.3.4 | Desconocido | 3 | Prevención de errores (transacción financiera) | **Crítico AA** — revisar/confirmar antes de pagar |

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
| 3 Comprensible | 3 (3.1.1 + 3.2.2 + 3.3.2) | 6 |
| 4 Robusto | 1 (4.1.2) | 0 |

### Notas manuales

- Mismo conteo de fallos que `/cart` (8), pero **3.3.4 (3 advertencias)** es más relevante aquí (obligación legal/financiera WCAG AA).
- Formulario completo: priorizar **labels**, **errores en texto** (3.3.1) y **paso de revisión** antes del pago.
- Probar flujo con usuario **logueado** y **invitado** si el markup difiere.

---

## Criterio de "hecho"

- [ ] 0 errores W3C HTML
- [ ] 0 fallos TAW en criterios 1.1.1, 1.3.1, 2.4.4, 3.1.1, 3.2.2, 3.3.2, 4.1.2
- [ ] 3.3.1, 3.3.3 y **3.3.4** cumplidos (checkout financiero)
- [ ] Re-auditada tras el fix
- [ ] Estado actualizado en [00-index.md](./00-index.md)
