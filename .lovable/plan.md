# Plan: Make all views accessible without login (for TAW/W3C audits)

## Objetivo
Permitir que herramientas de auditoría de accesibilidad (TAW, W3C) puedan recorrer todas las rutas sin sesión. No se cambia la UI ni se elimina código: solo se comenta/neutraliza la lógica que bloquea o redirige por falta de usuario.

## Estrategia reversible
Para que sea fácil revertir, marcaré cada cambio con un comentario único:

```
// [A11Y-AUDIT] ...código original comentado...
```

Así, una búsqueda global de `A11Y-AUDIT` lista todos los puntos a restaurar. No se borra código original; se comenta junto al reemplazo temporal.

No se tocan: `Header.tsx` (solo muestra/oculta UI según `user`, no bloquea navegación), `AuthContext.tsx` (se deja intacto), ni la página `/auth` (sigue accesible para auditarla también).

## Cambios

### 1. `src/pages/ProductReviews.tsx`
- Línea ~77: bloque `if (!user) { ... }` que impide enviar reseña → comentar el guard para que la lógica continúe (la página ya es accesible, esto solo afecta al submit; lo neutralizamos para no romper auditoría de formulario).
- Línea ~203: rama `{user ? (...) : (...)}` se deja como está (solo cambia UI condicional, ambas ramas son accesibles vía toggle natural). Sin cambios salvo verificar que ambas ramas rendericen markup válido.

### 2. `src/pages/Checkout.tsx`
- No hay redirect por falta de usuario, solo se usa `user?.email` para prefill. Sin cambios funcionales necesarios. Se verifica que la ruta `/checkout` sea alcanzable sin sesión (lo es).

### 3. `src/App.tsx`
- No hay `ProtectedRoute`. Todas las rutas ya están públicas a nivel router. Sin cambios.

### 4. Verificación de rutas
Confirmo que estas rutas son alcanzables sin login:
`/`, `/auth`, `/products`, `/product/:id`, `/product/:id/reviews`, `/cart`, `/checkout`, `/order-confirmation`.

## Para revertir más adelante
Cuando me pidas deshacerlo, buscaré `A11Y-AUDIT` en el repo y restauraré cada bloque a su versión original (descomentar lo guardado, eliminar el reemplazo temporal y el marcador).

## Notas
- No se modifica ningún estilo, copy ni estructura visible.
- `AuthContext` sigue funcionando; un usuario puede iniciar sesión normalmente durante la auditoría si lo desea.
- Si prefieres un enfoque aún más conservador (no tocar ni el guard de ProductReviews), dímelo y lo dejo intacto: en ese caso no haría falta ningún cambio de código, porque ninguna ruta está bloqueada hoy.
