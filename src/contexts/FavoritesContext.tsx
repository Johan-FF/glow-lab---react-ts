import React, { createContext, useContext, useState, useEffect } from 'react';

export interface FavoriteItem {
  id: number;
  name: string;
  price: number;
  image: string;
  sizes: string[];
  colors: string[];
}

interface FavoritesContextType {
  favorites: FavoriteItem[];
  toggleFavorite: (item: FavoriteItem) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
  getTotalFavorites: () => number;
  isFavoritesOpen: boolean;
  setIsFavoritesOpen: (open: boolean) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error('useFavorites must be used within a FavoritesProvider');
  return context;
};

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('glowlab_favorites');
    if (saved) {
      try {
        setFavorites(JSON.parse(saved));
      } catch {
        // ignore
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('glowlab_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (item: FavoriteItem) => {
    setFavorites((current) =>
      current.some((f) => f.id === item.id)
        ? current.filter((f) => f.id !== item.id)
        : [...current, item]
    );
  };

  const removeFavorite = (id: number) => {
    setFavorites((current) => current.filter((f) => f.id !== id));
  };

  const isFavorite = (id: number) => favorites.some((f) => f.id === id);
  const getTotalFavorites = () => favorites.length;

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
        removeFavorite,
        isFavorite,
        getTotalFavorites,
        isFavoritesOpen,
        setIsFavoritesOpen,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
