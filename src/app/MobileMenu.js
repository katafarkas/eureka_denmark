import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const MobileMenu = ({ open, leftMenu }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className="absolute inset-y-0 left-0 flex items-center">
      {/* Mobile menu button*/}
      <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-primary-500 hover:bg-primary-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
        <span className="sr-only">Open main menu</span>
        {open ? (
          <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
        ) : (
          <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
        )}
      </Disclosure.Button>

      <Disclosure.Panel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {leftMenu.map((item) => (
            <Disclosure.Button
              key={item.name}
              as="a"
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-secondary-200 text-white"
                  : "text-primary-500 hover:bg-primary-300 hover:text-white",
                "block px-3 py-2 rounded-md text-base font-medium"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </Disclosure.Button>
          ))}
        </div>
      </Disclosure.Panel>
    </div>
  );
};

export default MobileMenu;
