
import React from "react";
import { CartItem as CartItemType } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Trash, Minus, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const { product, quantity } = item;
  const { removeFromCart, updateQuantity } = useCart();

  const handleIncreaseQuantity = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    updateQuantity(product.id, quantity - 1);
  };

  return (
    <div className="flex py-4 border-b last:border-b-0">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div className="flex justify-between text-base font-medium">
          <h3 className="line-clamp-1">{product.name}</h3>
          <p className="ml-4 whitespace-nowrap">
            ${(product.price * quantity).toFixed(2)}
          </p>
        </div>
        
        <p className="mt-1 text-sm text-muted-foreground line-clamp-1">
          {product.category}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={handleDecreaseQuantity}
              disabled={quantity <= 1}
            >
              <Minus size={12} />
              <span className="sr-only">Decrease quantity</span>
            </Button>
            
            <span className="w-6 text-center text-sm">{quantity}</span>
            
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={handleIncreaseQuantity}
              disabled={quantity >= product.inventory}
            >
              <Plus size={12} />
              <span className="sr-only">Increase quantity</span>
            </Button>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 text-muted-foreground hover:text-destructive"
            onClick={() => removeFromCart(product.id)}
          >
            <Trash size={14} />
            <span className="sr-only">Remove item</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
