import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/lib/formatPrice';

export const Cart: React.FC = () => {
  const { 
    items, 
    updateQuantity, 
    removeFromCart, 
    getTotalPrice,
    getTotalItems,
    clearCart
  } = useCart();

  const shipping = getTotalPrice() >= 200000 ? 0 : 15000;
  const finalTotal = getTotalPrice() + shipping;

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="h-12 w-12 text-primary/50" />
          </div>
          <h1 className="text-2xl font-bold mb-4">Tu bolsa está vacía</h1>
          <p className="text-muted-foreground mb-8">
            Parece que no has agregado ningún producto a tu carrito todavía.
          </p>
          <Link to="/products">
            <Button className="bg-gradient-accent hover:opacity-90">
              Explorar Productos
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Cart Hero Header */}
      <div className="bg-gradient-to-r from-primary/15 via-accent/10 to-primary/15 border-b border-primary/10">
        <div className="container mx-auto px-4 py-8">
          <Link 
            to="/products" 
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Seguir comprando
          </Link>
          <h1 className="text-3xl font-bold text-foreground">
            🛍️ Carrito de Compras
          </h1>
          <p className="text-muted-foreground">
            {getTotalItems()} {getTotalItems() === 1 ? 'producto' : 'productos'} en tu carrito
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {/* Clear Cart Button */}
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Productos</h2>
            <Button
              variant="outline"
              size="sm"
              onClick={clearCart}
              className="text-destructive hover:text-destructive"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Vaciar Carrito
            </Button>
          </div>

          {/* Items List */}
          <div className="space-y-4">
            {items.map((item) => (
              <Card key={`${item.id}-${item.size}-${item.color}`} className="border-primary/10 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <div className="w-24 h-24 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-foreground">
                            {item.name}
                          </h3>
                          <div className="flex gap-2 mt-1">
                            <Badge variant="secondary" className="text-xs">
                              {item.size}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {item.color}
                            </Badge>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.id, item.size, item.color)}
                          className="text-destructive hover:text-destructive h-8 w-8"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Quantity and Price */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-muted-foreground">Cantidad:</span>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="font-medium w-8 text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">
                            {formatPrice(item.price)} c/u
                          </p>
                          <p className="font-bold text-lg text-price">
                            {formatPrice(item.price * item.quantity)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-8 border-primary/15 bg-gradient-to-b from-primary/5 to-accent/5">
            <CardHeader>
              <CardTitle>Resumen del Pedido</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Items Summary */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal ({getTotalItems()} productos)</span>
                  <span>{formatPrice(getTotalPrice())}</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span>Envío</span>
                  <span className={shipping === 0 ? 'text-success' : ''}>
                    {shipping === 0 ? 'GRATIS' : formatPrice(shipping)}
                  </span>
                </div>

                {shipping > 0 && (
                  <p className="text-xs text-muted-foreground">
                    Envío gratis en pedidos superiores a $200.000
                  </p>
                )}
              </div>

              <Separator />

              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>{formatPrice(finalTotal)}</span>
              </div>
            </CardContent>
            
            <CardFooter className="space-y-3">
              <Link to="/checkout" className="w-full">
                <Button className="w-full bg-gradient-accent hover:opacity-90" size="lg">
                  Proceder al Checkout
                </Button>
              </Link>
              
              <Link to="/products" className="w-full">
                <Button variant="outline" className="w-full">
                  Seguir Comprando
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
      </div>
    </div>
  );
};