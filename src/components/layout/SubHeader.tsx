import React, { useState } from 'react';
import { Search, LayoutGrid, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { Badge } from '@/components/ui/badge';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const categories = [
  { key: 'labios', emoji: '💋', label: 'Labios' },
  { key: 'ojos', emoji: '👁️', label: 'Ojos' },
  { key: 'rostro', emoji: '🌸', label: 'Rostro' },
  { key: 'skincare', emoji: '💧', label: 'Skincare' },
  { key: 'accesorios', emoji: '🖌️', label: 'Accesorios' },
];

export const SubHeader: React.FC = () => {
  const [search, setSearch] = useState('');
  const [sheetOpen, setSheetOpen] = useState(false);
  const navigate = useNavigate();
  const { getTotalItems } = useCart();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/products?search=${encodeURIComponent(search.trim())}`);
    }
  };

  return (
    <div className="sticky top-16 z-40 w-full border-b border-primary/10 bg-gradient-to-r from-accent/8 via-primary/5 to-accent/8 backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex h-12 items-center gap-4">
          {/* Categories Sidebar Trigger */}
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2">
                <LayoutGrid className="h-4 w-4" />
                <span className="hidden sm:inline">Categorías</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72">
              <SheetHeader>
                <SheetTitle>Categorías</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1">
                {categories.map(({ key, emoji, label }) => (
                  <Link
                    key={key}
                    to={`/products?category=${key}`}
                    onClick={() => setSheetOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-3 text-foreground hover:bg-muted transition-colors"
                  >
                    <span className="text-xl">{emoji}</span>
                    <span className="font-medium">{label}</span>
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          {/* Products Link */}
          <Link
            to="/products"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Productos
          </Link>

          {/* Search */}
          <form onSubmit={handleSearch} className="flex-1 max-w-lg">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar maquillaje..."
                className="pl-10 h-9 bg-primary/5 border-primary/15 focus:bg-card focus:border-primary/30"
              />
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};
