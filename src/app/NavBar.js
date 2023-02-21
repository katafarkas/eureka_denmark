"use client";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/images/logo_1.png";
import Image from "next/image";
import LangSelector from "./LangSelector";
import MobileMenu from "./MobileMenu";

const leftMenu = [
  { name: "Home", href: "#", current: true },
  { name: "About", href: "#", current: false },
  { name: "Sweaters", href: "#", current: false },
];
const rightMenu = [
  { name: "Crystals", href: "#", current: false },
  { name: "Healing", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-white ">
      {({ open }) => (
        <>
          <div className="mx-auto relative max-w-7xl px-2 sm:px-6 lg:px-8">
            <MobileMenu open={open} leftMenu={leftMenu} />
            <div className="hidden relative sm:flex h-16 items-center justify-between">
              <div className="flex w-full justify-center relative">
                <div className="flex space-x-4">
                  {leftMenu.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-secondary-200 text-white"
                          : "text-primary-500 hover:bg-primary-300 hover:text-white",
                        "px-3 py-2 rounded-md text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="block space-x-4" style={{ minWidth: "200px" }}>
                  faszér nem lehet üres
                </div>
                <div
                  className="flex absolute"
                  style={{
                    top: "-20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <Image src={Logo} alt="Logo" width={150} height={150} />
                </div>
                <div className="flex space-x-4">
                  {rightMenu.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-secondary-200 text-white"
                          : "text-primary-500 hover:bg-primary-300 hover:text-white",
                        "px-3 py-2 rounded-md text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
