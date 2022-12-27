import Link from "next/link";
import React from "react";
import {
  ChartBarIcon,
  CursorArrowRaysIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import cx from "classnames";

export const NavigationMenu = () => {
  const variant = "light";
  const textColor = variant === "light" ? "text-white" : "text-gray-900";
  const textHoverColor =
    variant === "light" ? "text-gray-200" : "text-gray-700";

  const categories = [
    {
      name: "Tees",
      description: "Short sleeve necessities for warm days",
      href: "/products",
      icon: ChartBarIcon,
    },
    {
      name: "Sweatshirts",
      description: "Cozy and casual long sleeve sweaters",
      href: "/products",
      icon: CursorArrowRaysIcon,
    },
    {
      name: "Hoodies",
      description: "Stay warm and look cool",
      href: "/products",
      icon: ShieldCheckIcon,
    },
    {
      name: "Hats",
      description: "Golfers just look weird without hats, you know?",
      href: "/products",
      icon: Squares2X2Icon,
    },
  ];

  const collections = [
    {
      id: 1,
      name: "Wild",
      href: "/products",
      preview:
        "Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.",
      imageUrl:
        "https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80",
    },
    {
      id: 2,
      name: "McGolf",
      href: "/products",
      preview:
        "Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.",
      imageUrl:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80",
    },
    {
      id: 3,
      name: "Birdies Happen By Accident",
      href: "/products",
      preview:
        "Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.",
      imageUrl:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80",
    },
  ];

  return (
    <NavigationMenuPrimitive.Root className="relative">
      <NavigationMenuPrimitive.List className="flex flex-row space-x-2 p-2">
        <NavigationMenuPrimitive.Item value="one">
          <NavigationMenuPrimitive.Trigger
            className={cx(
              "rounded-md px-3 py-2 text-sm",
              "text-sm font-medium",
              `${textColor} hover:${textHoverColor}`
            )}
          >
            Products
          </NavigationMenuPrimitive.Trigger>

          <NavigationMenuPrimitive.Content
            className={cx(
              "relative top-0 left-0 w-auto rounded-lg",
              "radix-motion-from-start:animate-enter-from-left",
              "radix-motion-from-end:animate-enter-from-right",
              "radix-motion-to-start:animate-exit-to-left",
              "radix-motion-to-end:animate-exit-to-right"
            )}
          >
            <div
              className="absolute inset-0 top-1/2 bg-white shadow"
              aria-hidden="true"
            />

            <div className="relative bg-white">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                  {categories.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          {item.name}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                  <div className="text-sm font-medium">
                    <Link
                      href="#"
                      className="text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500"
                    >
                      Shop all products
                      <span aria-hidden="true"> &rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </NavigationMenuPrimitive.Content>
        </NavigationMenuPrimitive.Item>

        <NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Trigger
            className={cx(
              "rounded-md px-3 py-2 text-sm",
              `text-sm font-medium ${textColor} hover:${textHoverColor}`
            )}
          >
            Collections
          </NavigationMenuPrimitive.Trigger>

          <NavigationMenuPrimitive.Content
            className={cx(
              "relative top-0 left-0 w-auto rounded-lg",
              "radix-motion-from-start:animate-enter-from-left",
              "radix-motion-from-end:animate-enter-from-right",
              "radix-motion-to-start:animate-exit-to-left",
              "radix-motion-to-end:animate-exit-to-right"
            )}
          >
            <div
              className="absolute inset-0 top-1/2 bg-white shadow"
              aria-hidden="true"
            />

            <div className="relative bg-white">
              <div className="bg-gray-50 px-5 py-6 sm:p-8">
                <div>
                  <ul role="list" className="">
                    {collections.map((collection) => (
                      <li key={collection.id} className="mb-4 flow-root">
                        <Link
                          href={collection.href}
                          className="-m-3 flex rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-100"
                        >
                          <div className="hidden flex-shrink-0 sm:block">
                            <img
                              className="h-20 w-32 rounded-md object-cover"
                              src={collection.imageUrl}
                              alt=""
                            />
                          </div>
                          <div className="min-w-0 flex-1 sm:ml-8">
                            <h4 className="truncate text-base font-medium text-gray-900">
                              {collection.name}
                            </h4>
                            <p className="mt-1 text-sm text-gray-500">
                              {collection.preview}
                            </p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 text-sm font-medium">
                  <Link
                    href="#"
                    className="text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500"
                  >
                    View all collections
                    <span aria-hidden="true"> &rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </NavigationMenuPrimitive.Content>
        </NavigationMenuPrimitive.Item>

        <NavigationMenuPrimitive.Item asChild>
          <NavigationMenuPrimitive.Link
            asChild
            className={cx(
              "rounded-md px-3 py-2 text-sm",
              `text-sm font-medium ${textColor} hover:${textHoverColor}`
            )}
          >
            <Link href="/about">About</Link>
          </NavigationMenuPrimitive.Link>
        </NavigationMenuPrimitive.Item>

        <NavigationMenuPrimitive.Indicator
          className={cx(
            "z-10",
            "top-[100%] flex h-2 items-end justify-center overflow-hidden",
            "radix-state-visible:animate-fade-in",
            "radix-state-hidden:animate-fade-out",
            "transition-[width_transform] duration-[250ms] ease-[ease]"
          )}
        >
          <div className="relative top-1 h-2 w-2 rotate-45 bg-white dark:bg-gray-800" />
        </NavigationMenuPrimitive.Indicator>
      </NavigationMenuPrimitive.List>

      <div
        className={cx(
          "absolute flex justify-center",
          "left-[-50%] top-[100%] w-[200%]",
          "-mt-1"
        )}
        style={{
          perspective: "2000px",
        }}
      >
        <NavigationMenuPrimitive.Viewport
          className={cx(
            "relative overflow-hidden rounded-md bg-white shadow-lg dark:bg-gray-800",
            "w-radix-navigation-menu-viewport",
            "h-radix-navigation-menu-viewport",
            "radix-state-open:animate-scale-in-content",
            "radix-state-closed:animate-scale-out-content",
            "origin-[top_center] transition-[width_height] duration-300 ease-[ease]"
          )}
        />
      </div>
    </NavigationMenuPrimitive.Root>
  );
};
