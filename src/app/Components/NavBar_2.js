"use client";
import Logo from "../../assets/images/logo.png";
import Image from "next/image";
import LangSelector from "./LangSelector";

const Menu = [
  { name: "Home", href: "#", current: true },
  { name: "About", href: "#", current: false },
  { name: "Sweaters", href: "#", current: false },
  { name: "Crystals", href: "#", current: false },
  { name: "Healing", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar_2 = () => {
  return (
    <nav class="bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <Image src={Logo} alt="Logo" width={50} height={50} />

        <div class="flex md:order-2">
          <div>
            <LangSelector />
          </div>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 text-sm text-primary-500 rounded-lg md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            {Menu.map((item) => (
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar_2;
