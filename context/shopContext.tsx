import { createContext, useState, useEffect, FC } from "react";
import { createCheckout, updateCheckout } from "../lib/shopify";

export interface ShopProviderProps extends React.HTMLProps<HTMLDivElement> {}

const CartContext = createContext<any>(null);

const ShopProvider: FC<ShopProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<any[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutId, setCheckoutId] = useState("");
  const [checkoutUrl, setCheckoutUrl] = useState("");

  useEffect(() => {
    if (localStorage.checkout_id) {
      const cartObject = JSON.parse(localStorage.checkout_id);

      if (cartObject[0].id) {
        setCart([cartObject[0]]);
      } else if (cartObject[0].length > 0) {
        setCart([...cartObject[0]]);
      }

      setCheckoutId(cartObject[1].id);
      setCheckoutUrl(cartObject[1].webUrl);
    }
  }, []);

  async function addToCart(newItem: any) {
    setCartOpen(true);

    if (cart.length === 0) {
      setCart([newItem]);

      const checkout = await createCheckout(
        newItem.id,
        newItem.variantQuantity
      );

      setCheckoutId(checkout.id);
      setCheckoutUrl(checkout.webUrl);

      localStorage.setItem("checkout_id", JSON.stringify([newItem, checkout]));
    } else {
      let newCart: any[] = [];
      let added = false;

      cart.map((item: any) => {
        if (item.id === newItem.id) {
          item.variantQuantity++;
          newCart = [...cart];
          added = true;
        }
      });

      if (!added) {
        newCart = [...cart, newItem];
      }

      setCart(newCart);
      const newCheckout = await updateCheckout(checkoutId, newCart);

      localStorage.setItem(
        "checkout_id",
        JSON.stringify([newCart, newCheckout])
      );
    }
  }

  async function changeQuantity(updatedItem: any, quantity: number) {
    let newCart: any[] = [];
    let added = false;

    cart.map((item: any) => {
      if (item.id === updatedItem.id) {
        item.variantQuantity = quantity;
        newCart = [...cart];
        added = true;
      }
    });

    if (!added) {
      newCart = [...cart, updatedItem];
    }

    setCart(newCart);
    const newCheckout = await updateCheckout(checkoutId, newCart);

    localStorage.setItem("checkout_id", JSON.stringify([newCart, newCheckout]));
  }

  async function removeCartItem(itemToRemove: any) {
    const updatedCart = cart.filter((item) => item.id !== itemToRemove);

    setCart(updatedCart);

    const newCheckout = await updateCheckout(checkoutId, updatedCart);

    localStorage.setItem(
      "checkout_id",
      JSON.stringify([updatedCart, newCheckout])
    );

    if (cart.length === 1) setCartOpen(false);
  }
  return (
    <CartContext.Provider
      value={{
        cart,
        cartOpen,
        setCartOpen,
        changeQuantity,
        addToCart,
        removeCartItem,
        checkoutUrl,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const ShopConsumer = CartContext.Consumer;

export default ShopProvider;
export { ShopConsumer, CartContext };
