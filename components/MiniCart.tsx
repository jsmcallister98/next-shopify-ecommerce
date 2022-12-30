import { Fragment, useContext, useRef, FC } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { CartContext } from "@context/shopContext";
import { formatter } from "@utils/helpers";

export interface MiniCartProps extends React.HTMLProps<HTMLDivElement> {
  cart: any;
}
const MiniCart: FC<MiniCartProps> = ({ cart }) => {
  const { cartOpen, setCartOpen, checkoutUrl, removeCartItem } =
    useContext(CartContext);
  const cancelButtonRef = useRef(null);

  let cartTotal = 0;
  cart.map((item: any) => {
    cartTotal += item?.variantPrice * item?.variantQuantity;
  });

  return (
    <Transition.Root show={cartOpen} as={Fragment}>
      <Dialog
        initialFocus={cancelButtonRef}
        as="div"
        className="fixed inset-0 z-50 overflow-hidden"
        onClose={() => setCartOpen(!cartOpen)}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-[350ms]"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-[350ms]"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-100 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-[350ms]"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-[350ms]"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-md">
                <div className="flex h-full flex-col overflow-y-scroll bg-white bg-opacity-70 shadow-xl backdrop-blur backdrop-filter dark:bg-slate-800">
                  <div className="flex-1 overflow-y-auto px-4 pb-6 pt-7 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-lg font-medium text-gray-900 dark:text-white">
                        Shopping cart
                      </Dialog.Title>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          ref={cancelButtonRef}
                          type="button"
                          className="-m-2 p-2 text-gray-400 hover:text-gray-500 dark:text-white dark:hover:text-gray-300"
                          onClick={() => setCartOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        <ul
                          role="list"
                          className="-my-6 divide-y divide-gray-200 dark:divide-slate-500"
                        >
                          {cart.map((product: any) => (
                            <li
                              key={product.id + Math.random()}
                              className="flex py-6"
                            >
                              <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <Link
                                  legacyBehavior
                                  href={`/products/${product.handle}`}
                                  passHref
                                >
                                  <a onClick={() => setCartOpen(false)}>
                                    <Image
                                      src={product.image}
                                      alt={product.title}
                                      fill
                                    />
                                  </a>
                                </Link>
                              </div>

                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900 dark:text-white">
                                    <h3>
                                      <Link
                                        legacyBehavior
                                        href={`/products/${product.handle}`}
                                        passHref
                                      >
                                        <a onClick={() => setCartOpen(false)}>
                                          {product.title}
                                        </a>
                                      </Link>
                                    </h3>
                                    <p className="ml-4">
                                      {formatter.format(product.variantPrice)}
                                    </p>
                                  </div>
                                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                                    {product.variantTitle}
                                  </p>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                  <p className="text-gray-500 dark:text-gray-300">
                                    Qty {product.variantQuantity}
                                  </p>

                                  <div className="flex">
                                    <button
                                      onClick={() => removeCartItem(product.id)}
                                      type="button"
                                      className="font-medium text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-gray-300"
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  {cart.length > 0 && (
                    <div className="border-t border-gray-200 py-6 px-4 dark:border-slate-500 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900 dark:text-white">
                        <p>Subtotal</p>
                        <p>{formatter.format(cartTotal)}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-300">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <a
                          href={checkoutUrl}
                          className="flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-800 dark:bg-slate-400 dark:text-black dark:hover:bg-slate-500"
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500 dark:text-gray-300">
                        <p>
                          or{" "}
                          <button
                            type="button"
                            className="font-medium text-black hover:text-gray-800 dark:text-white dark:hover:text-gray-300"
                            onClick={() => setCartOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default MiniCart;
