import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      '404 Error: User attempted to access non-existent route:',
      location.pathname
    );
  }, [location.pathname]);

  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md text-center">
        <p className="text-sm font-medium text-muted-foreground mb-2">Error 404</p>
        <h1 className="text-4xl font-bold text-foreground mb-4">Página no encontrada</h1>
        <p className="text-lg text-muted-foreground mb-8">
          La ruta <span className="font-mono text-foreground">{location.pathname}</span> no existe en
          GlowLab.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild className="bg-gradient-accent hover:opacity-90">
            <Link to="/">Volver al inicio de GlowLab</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/products">Ver catálogo de productos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
