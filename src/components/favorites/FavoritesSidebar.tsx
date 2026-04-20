import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useFavorites } from '@/contexts/FavoritesContext';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/lib/formatPrice';

export const FavoritesSidebar: React.FC = () => {
  const { favorites, isFavoritesOpen, setIsFavoritesOpen, removeFavorite } = useFavorites();
  const { addToCart } = useCart();

  if (!isFavoritesOpen) return null;

  const handleAddToBag = (item: typeof favorites[number]) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      size: item.sizes[0] ?? 'Único',
      color: item.colors[0] ?? 'Default',
    });
    removeFavorite(item.id);
  };

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 animate-fade-in"
        onClick={() => setIsFavoritesOpen(false)}
      />

      {/* Sidebar */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-background shadow-strong border-l z-10 animate-slide-in-right">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary fill-primary" />
              <h2 className="text-lg font-semibold">Guarda tus favoritos</h2>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsFavoritesOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {favorites.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground">
                  Aún no tienes favoritos ❤️
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {favorites.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 rounded-lg border border-border/50 p-3 hover:border-primary/30 transition-colors"
                  >
                    <div className="h-20 w-20 rounded-lg overflow-hidden bg-muted shrink-0">
                      <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                    </div>

                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <h4 className="font-medium text-sm leading-tight line-clamp-2">{item.name}</h4>
                          <p className="text-sm font-bold text-price mt-1">{formatPrice(item.price)}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 shrink-0 text-primary hover:text-destructive"
                          onClick={() => removeFavorite(item.id)}
                          aria-label="Quitar de favoritos"
                        >
                          <Heart className="h-4 w-4 fill-current" />
                        </Button>
                      </div>

                      <Button
                        size="sm"
                        className="bg-gradient-accent hover:opacity-90 mt-2 self-start"
                        onClick={() => handleAddToBag(item)}
                      >
                        <ShoppingBag className="h-3 w-3 mr-2" />
                        Agregar a la bolsa
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {favorites.length > 0 && (
            <div className="p-6 border-t">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setIsFavoritesOpen(false)}
              >
                Seguir explorando
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
