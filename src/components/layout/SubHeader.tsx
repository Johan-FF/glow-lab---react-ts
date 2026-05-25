import React, { useState } from 'react';
import { Search, LayoutGrid, Heart, Eye, Sparkles, Droplet, Brush, type LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link, useNavigate } from 'react-router-dom';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const categories: { key: string; Icon: LucideIcon; label: string }[] = [
  { key: 'labios', Icon: Heart, label: 'Labios' },
  { key: 'ojos', Icon: Eye, label: 'Ojos' },
  { key: 'rostro', Icon: Sparkles, label: 'Rostro' },
  { key: 'skincare', Icon: Droplet, label: 'Skincare' },
  { key: 'accesorios', Icon: Brush, label: 'Accesorios' },
];

export const SubHeader: React.FC = () => {
  const [search, setSearch] = useState('');
  const [sheetOpen, setSheetOpen] = useState(false);
  const navigate = useNavigate();

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
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2" aria-label="Abrir categorías de productos">
                <LayoutGrid className="h-4 w-4" aria-hidden="true" />
                <span className="hidden sm:inline">Categorías</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72">
              <SheetHeader>
                <SheetTitle>Categorías</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1" aria-label="Categorías de productos">
                {categories.map(({ key, Icon, label }) => (
                  <Link
                    key={key}
                    to={`/products?category=${key}`}
                    onClick={() => setSheetOpen(false)}
                    className="group flex items-center gap-3 rounded-lg px-3 py-3 text-foreground hover:bg-primary/10 transition-colors"
                  >
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      aria-hidden="true"
                    >
                      <Icon className="h-4 w-4" strokeWidth={1.75} />
                    </span>
                    <span className="font-medium">{label}</span>
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <Link
            to="/products"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Productos
          </Link>

          <form onSubmit={handleSearch} className="flex-1 max-w-lg" role="search">
            <Label htmlFor="header-search" className="sr-only">
              Buscar productos de maquillaje
            </Label>
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" aria-hidden="true" />
              <Input
                id="header-search"
                type="search"
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
