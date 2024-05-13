import { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  LightBulbIcon,
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ModeToggle } from "@/components/shared/mode-toggle";
import { useTheme } from "@/components/shared/theme-provider";
import headerLogo from "@/assets/_auth_img/form_logo.jpg";

const exploreItems = [
  {
    name: "Item1",
    description: "Just An Item",
    to: "/",
    icon: LightBulbIcon,
  },
  {
    name: "Item2",
    description: "Just An Item",
    to: "/",
    icon: LightBulbIcon,
  },
  {
    name: "Item3",
    description: "Just An Item",
    to: "/",
    icon: LightBulbIcon,
  },
  {
    name: "Item4",
    description: "Just An Item",
    to: "/",
    icon: LightBulbIcon,
  },
  {
    name: "Item5",
    description: "Just An Item",
    to: "/",
    icon: LightBulbIcon,
  },
];
const exploreBottomItems = [
  { name: "Item6", to: "/", icon: LightBulbIcon },
  { name: "Item7", to: "/", icon: LightBulbIcon },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const HeaderSection = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

  return (
    <header
      className={`shadow-lg ${isDark ? " shadow-light-1" : " shadow-black"}`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className=" -m-1.5 p-1.5">
            <span className="sr-only">Mumu</span>
            <img src={headerLogo} alt="headerLogo" className="h-8 w-auto" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">啟動</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className={`hidden lg:flex lg:gap-x-12`}>
          <Popover className={`relative`}>
            <Popover.Button
              className={`flex items-center gap-x-1 text-sm font-semibold leading-6`}
            >
              Explore
              <ChevronDownIcon
                className="h-5 w-5 flex-none"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                className={`absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ${
                  isDark ? "" : "bg-white ring-gray-900/5"
                }`}
              >
                <div className="p-4">
                  {exploreItems.map((item) => (
                    <div
                      key={item.name}
                      className={`group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 ${
                        isDark ? "" : "hover:bg-gray-50"
                      }`}
                    >
                      <div
                        className={`flex h-11 w-11 flex-none items-center justify-center rounded-lg ${
                          isDark ? "" : "bg-gray-50 group-hover:bg-white"
                        }`}
                      >
                        <item.icon
                          className="h-6 w-6 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <Link to={item.to} className="block font-semibold">
                          {item.name}
                          <span className="absolute inset-0"></span>
                        </Link>
                        <p className="mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  className={`grid grid-cols-2 divide-x ${
                    isDark ? "" : "divide-gray-900/5 bg-gray-50"
                  }`}
                >
                  {exploreBottomItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className={`flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 ${
                        isDark ? "" : "hover:bg-gray-100"
                      }`}
                    >
                      <item.icon
                        className="h-5 w-5 flex-none"
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Link to="/" className={`text-sm font-semibold leading-6`}>
            Propose
          </Link>
          <Link to="/" className={`text-sm font-semibold leading-6`}>
            Social
          </Link>
        </Popover.Group>
        <div className="ml-8 hidden lg:flex lg:flex-1 lg:justify-end w-full max-w-sm items-center space-x-2">
          <Input type="text" placeholder="Searching..." />
          <Button type="submit">Search</Button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <ModeToggle />
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="/sign-in" className="text-sm font-semibold leading-6">
            Sign in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog
        className={`lg:hidden`}
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10">
          <Dialog.Panel
            className={`fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 ${
              isDark ? "bg-slate-900" : "bg-white ring-gray-900/10"
            }`}
          >
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Mumu</span>
                <img src={headerLogo} alt="headerLogo" className="h-8 w-auto" />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div
                className={`-my-6 divide-y ${
                  isDark ? "" : "divide-gray-500/10"
                }`}
              >
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className={`-mx-3`}>
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={`flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 ${
                            isDark ? "" : "hover:bg-gray-50"
                          }`}
                        >
                          Explore
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          ></ChevronDownIcon>
                        </Disclosure.Button>

                        <Disclosure.Panel className={`mt-2 space-y-2`}>
                          {[...exploreItems, ...exploreBottomItems].map(
                            (item) => (
                              <Disclosure.Button
                                key={item.name}
                                as={Link}
                                to={item.to}
                                className={`block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 ${
                                  isDark ? "" : "hover:bg-gray-50"
                                }`}
                              >
                                {item.name}
                              </Disclosure.Button>
                            )
                          )}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Link
                    to="/"
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                      isDark ? "" : "hover:bg-gray-50"
                    }`}
                  >
                    Propose
                  </Link>
                  <Link
                    to="/"
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                      isDark ? "" : "hover:bg-gray-50"
                    }`}
                  >
                    Social
                  </Link>
                </div>
                <div className="py-6 w-full items-center space-y-2">
                  <Input type="text" placeholder="Searching..." />
                  <Button type="submit">Search</Button>
                </div>
                <div className="py-6">
                  <Link
                    to="/sign-in"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Sign in
                  </Link>
                </div>
                <div className="py-6">
                  <ModeToggle />
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </header>
  );
};

export default HeaderSection;
