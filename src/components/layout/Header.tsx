import React from 'react';
import { User, Moon, Sun, Menu, ShoppingBag, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useTheme } from '@/contexts/ThemeContext';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { useFavorites } from '@/contexts/FavoritesContext';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const { getTotalItems } = useCart();
  const { getTotalFavorites, setIsFavoritesOpen } = useFavorites();
  const cartCount = getTotalItems();
  const favoritesCount = getTotalFavorites();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/15 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 backdrop-blur supports-[backdrop-filter]:bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2" aria-label="GlowLab, ir al inicio">
            <div className="h-8 w-8 rounded-lg bg-gradient-hero flex items-center justify-center" aria-hidden="true">
              <span className="text-primary-foreground font-bold text-sm">GL</span>
            </div>
            <span className="text-xl font-bold text-foreground">GlowLab</span>
          </Link>

          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="h-9 w-9"
              aria-label={theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'}
            >
              {theme === 'light' ? (
                <Moon className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Sun className="h-4 w-4" aria-hidden="true" />
              )}
            </Button>

            <div className="relative">
              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9"
                onClick={() => setIsFavoritesOpen(true)}
                aria-label={
                  favoritesCount > 0
                    ? `Abrir favoritos, ${favoritesCount} productos guardados`
                    : 'Abrir favoritos'
                }
              >
                <Heart className="h-4 w-4" aria-hidden="true" />
              </Button>
              {favoritesCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs pointer-events-none"
                  aria-hidden="true"
                >
                  {favoritesCount}
                </Badge>
              )}
            </div>

            <Link
              to="/cart"
              className="relative"
              aria-label={
                cartCount > 0 ? `Ir al carrito, ${cartCount} productos` : 'Ir al carrito de compras'
              }
            >
              <Button variant="outline" size="icon" className="h-9 w-9">
                <ShoppingBag className="h-4 w-4" aria-hidden="true" />
              </Button>
              {cartCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs pointer-events-none"
                  aria-hidden="true"
                >
                  {cartCount}
                </Badge>
              )}
            </Link>

            {user ? (
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" aria-label={`Cuenta de ${user.name}`}>
                  <User className="h-4 w-4 mr-2" aria-hidden="true" />
                  {user.name}
                </Button>
                <Button variant="ghost" size="sm" onClick={logout}>
                  Salir
                </Button>
              </div>
            ) : (
              <Link to="/auth">
                <Button variant="default" size="sm">
                  <User className="h-4 w-4 mr-2" aria-hidden="true" />
                  Iniciar Sesión
                </Button>
              </Link>
            )}

            <Button
              variant="outline"
              size="icon"
              className="md:hidden h-9 w-9"
              aria-label="Abrir menú de navegación"
            >
              <Menu className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
