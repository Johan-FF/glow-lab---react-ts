# Auditoría accesibilidad y validación — índice

**Proyecto:** glow-lab-project  
**Entorno de prueba:** `bun run dev` → http://localhost:8080  
**Fecha inicio auditoría:** _rellenar_

## Estado por página

| Ruta | Archivo | W3C HTML | TAW | Estado |
|------|---------|----------|-----|--------|
| `/` | [home.md](./home.md) | pendiente | pendiente | pendiente |
| `/auth` | [auth.md](./auth.md) | pendiente | pendiente | pendiente |
| `/products` | [products.md](./products.md) | pendiente | pendiente | pendiente |
| `/product/:id` | [product-detail.md](./product-detail.md) | pendiente | pendiente | pendiente |
| `/product/:id/reviews` | [product-reviews.md](./product-reviews.md) | pendiente | pendiente | pendiente |
| `/cart` | [cart.md](./cart.md) | pendiente | pendiente | pendiente |
| `/checkout` | [checkout.md](./checkout.md) | pendiente | pendiente | pendiente |
| `/order-confirmation` | [order-confirmation.md](./order-confirmation.md) | pendiente | pendiente | pendiente |
| `*` (404) | [not-found.md](./not-found.md) | pendiente | pendiente | pendiente |

## Componentes globales (opcional)

Hallazgos que aparecen en varias rutas (Header, SubHeader, CartSidebar, FavoritesSidebar, toasts):

| Componente | Archivo | Estado |
|------------|---------|--------|
| Layout compartido | [global.md](./global.md) | pendiente |

## Orden sugerido de corrección

1. [global.md](./global.md) — si hay issues en header/sidebars
2. [home.md](./home.md)
3. [auth.md](./auth.md)
4. [products.md](./products.md)
5. [product-detail.md](./product-detail.md)
6. [product-reviews.md](./product-reviews.md)
7. [cart.md](./cart.md)
8. [checkout.md](./checkout.md)
9. [order-confirmation.md](./order-confirmation.md)
10. [not-found.md](./not-found.md)

## Cómo pedir correcciones al agente

Ejemplo en Agent mode:

> Corrige W3C + TAW según `docs/a11y-audit/home.md`. Al terminar, actualiza el estado en este índice.

## Leyenda de estado

- **pendiente** — sin corregir
- **en curso** — corrección en progreso
- **hecho** — corregido y re-auditado
