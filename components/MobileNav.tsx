/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useScrollPosition } from "@utils/hooks";
import { classNames } from "@utils/helpers";

const solutions = [
  {
    name: "All Products",
    href: "/products",
    icon: ChartBarIcon,
  },
  {
    name: "Hoodies",
    href: "/products/hoodies",
    icon: CursorClickIcon,
  },
  {
    name: "Sweaters",
    href: "/products/sweaters",
    icon: ShieldCheckIcon,
  },
  {
    name: "Tees",
    href: "/products/tees",
    icon: ViewGridIcon,
  },
  {
    name: "Hats",
    href: "/products/hats",
    icon: RefreshIcon,
  },
];

const resources = [
  {
    name: "McGolf Collection",
    href: "/collections/mcgolf",
    icon: SupportIcon,
  },
  {
    name: "Swang Collection",
    href: "/collections/swang",
    icon: BookmarkAltIcon,
  },
  {
    name: "OnCourse Collection",
    href: "/collections/oncourse",
    icon: CalendarIcon,
  },
];

export default function MobileNav() {
  const { scrollPosition } = useScrollPosition();

  return (
    <Popover
      className={classNames(
        scrollPosition > 0 ? "bg-white" : "bg-transparent",
        "fixed top-0 z-50 w-screen bg-opacity-50 px-6 backdrop-blur backdrop-filter transition-all duration-1000 ease-in-out dark:bg-gray-900 dark:bg-opacity-75 md:hidden"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href={"/"}>
              <a href="/">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-400.svg"
                  alt=""
                />
              </a>
            </Link>
          </div>
          <div className="-my-2 -mr-2 flex md:hidden">
            <div className="mr-5 pt-2">
              <ThemeToggle />
            </div>
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:bg-slate-900 dark:text-white">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:divide-slate-900 dark:bg-slate-700">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-400.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:bg-slate-900 dark:text-white">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <item.icon
                        className="h-6 w-6 flex-shrink-0 text-indigo-600 dark:text-indigo-400"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900 dark:text-slate-200">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-1 gap-y-4 gap-x-4">
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-slate-200"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <a className="mt-6 text-center text-base font-medium text-gray-500 dark:text-slate-200">
                About us
              </a>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
