import React from 'react';
import { ArrowRight, Star, Truck, Shield, Headphones, Heart, Eye, Sparkles, Droplet, Brush, type LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ProductCard } from '@/components/products/ProductCard';
import { Link } from 'react-router-dom';
import productsData from '@/data/products.json';
import heroImage from '@/assets/hero-makeup.jpg';

export const Home: React.FC = () => {
  const featuredProducts = productsData.filter(product => product.featured).slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-black/30" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`
          }}
        />
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent text-accent-foreground" variant="secondary">
              Nueva Colección 2024
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Belleza que 
              <span className="block bg-gradient-accent bg-clip-text text-transparent">
                Te Inspira
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto animate-slide-up">
              Descubre nuestra colección de maquillaje premium. Fórmulas de alta calidad, 
              colores vibrantes y acabados profesionales.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounce-in">
              <Link to="/products">
                <Button size="lg" className="bg-accent hover:bg-accent-hover text-accent-foreground">
                  Explorar Colección
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="!border-white/40 !text-white !bg-transparent hover:!bg-white/10">
                Ver Ofertas
              </Button>
            </div>
          </div>
        </div>
        
        {/* Hero Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Truck className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Envío Gratis</h3>
              <p className="text-muted-foreground">En pedidos superiores a $200.000. Entrega en 24-48h.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Shield className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">100% Original</h3>
              <p className="text-muted-foreground">Todos nuestros productos son auténticos y certificados.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Headphones className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Asesoría Beauty</h3>
              <p className="text-muted-foreground">Consulta con nuestras expertas en belleza 24/7.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Badge className="mb-4" variant="outline">Categorías</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Compra por Categoría</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {([
              { cat: 'labios', Icon: Heart, label: 'Labios' },
              { cat: 'ojos', Icon: Eye, label: 'Ojos' },
              { cat: 'rostro', Icon: Sparkles, label: 'Rostro' },
              { cat: 'skincare', Icon: Droplet, label: 'Skincare' },
              { cat: 'accesorios', Icon: Brush, label: 'Accesorios' },
            ] as { cat: string; Icon: LucideIcon; label: string }[]).map(({ cat, Icon, label }) => (
              <Link
                key={cat}
                to={`/products?category=${cat}`}
                className="group flex flex-col items-center p-6 rounded-2xl bg-card border border-primary/20 hover:border-primary hover:shadow-medium transition-all duration-300 hover:bg-primary/5"
              >
                <span className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-gradient-accent group-hover:text-accent-foreground group-hover:scale-110 transition-all duration-300">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <span className="font-semibold text-foreground">{label}</span>
                <span className="text-xs text-muted-foreground mt-1">
                  {productsData.filter(p => p.category === cat).length} productos
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="outline">Productos Destacados</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Lo Más Popular
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Descubre los productos favoritos de nuestras clientas. 
              Seleccionados por su calidad, pigmentación y resultados.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/products">
              <Button size="lg" variant="outline">
                Ver Toda la Colección
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-primary-foreground/80">Clientas Felices</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-primary-foreground/80">Productos Beauty</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9</div>
              <div className="text-primary-foreground/80 flex items-center justify-center gap-1">
                <Star className="h-4 w-4 fill-current" />
                Valoración
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24h</div>
              <div className="text-primary-foreground/80">Envío Express</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
