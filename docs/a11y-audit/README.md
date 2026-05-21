# Auditoría TAW + W3C

Plantillas para documentar hallazgos de **TAW** (accesibilidad WCAG) y **W3C Validator** (HTML/CSS) por página.

## Antes de auditar

1. Arranca el proyecto: `bun run dev` (puerto **8080**).
2. Para W3C HTML: en [validator.w3.org](https://validator.w3.org/) usa la URL de cada ruta o “View source” / guardar HTML renderizado según prefieras.
3. Para TAW: analiza cada URL con el mismo viewport en todas las páginas.

## Archivos

| Archivo | Uso |
|---------|-----|
| [00-index.md](./00-index.md) | Checklist y estado global |
| [_template.md](./_template.md) | Plantilla genérica por si añades rutas nuevas |
| [global.md](./global.md) | Header, sidebars, toasts (compartidos) |
| `home.md` … `not-found.md` | Una página = un archivo |

## Rellenar hallazgos

- Copia el **mensaje exacto** del validador W3C.
- En TAW incluye **criterio WCAG** (ej. `1.1.1`, `2.4.4`) y **prioridad** (Alta / Media / Baja).
- Borra filas vacías de las tablas si no hay hallazgos en esa categoría.

## Pedir correcciones

Cuando un archivo esté completo, en el chat:

> Corrige según `docs/a11y-audit/home.md`

Tras cada corrección, re-audita y marca checkboxes + tabla en `00-index.md`.
