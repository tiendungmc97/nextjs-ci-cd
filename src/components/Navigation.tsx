"use client";
import useClickOutside from "@/hook/useClickOutside";
import Image from "next/image";
import { useState } from "react";
import Drawer from "./Drawer";
import LocaleSwitcher from "./LocaleSwitcher";
import NavigationLink from "./NavigationLink";
const routers = [
  { label: "Home", href: "/home" },
  {
    label: "About",
    href: "/about",
    children: [
      {
        label: "About Us",
        href: "/about/about-us",
      },
      {
        label: "Security",
        href: "/about/security",
      },
    ],
  },
  {
    label: "Help",
    href: "/help",
    children: [
      {
        label: "FAQs",
        href: "/help/faqs",
      },
      {
        label: "Contact Form",
        href: "/help/contact-form",
      },
    ],
  },
  {
    label: "Learn",
    href: "/learn",
    children: [
      {
        label: "Education",
        href: "/learn/education",
      },
      {
        label: "News",
        href: "/learn/news",
      },
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      {
        label: "Trade",
        href: "/products/trade",
      },
      {
        label: "Cold Wallet Solution",
        href: "/products/cold-wallet-solution",
      },
    ],
  },
];
function NavigationMobile() {
  const [activeRouter, setActiveRouter] = useState<null | string>(null);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const handleExtendRouter = (href: string) => {
    if (activeRouter === href) {
      setActiveRouter(null);
    } else {
      setActiveRouter(href);
    }
  };
  return (
    <nav className="fixed left-0 top-0 z-50 w-full sm:hidden">
      <div className="flex w-full justify-between bg-white p-4">
        <div>Crypto</div>
        <div onClick={() => setIsOpenDrawer(true)} className="cursor-pointer">
          <Image src="/icons/hamburger.svg" alt="hamburger" width={25} height={25} />
        </div>
      </div>
      <Drawer title="Crypto" isOpen={isOpenDrawer} setIsOpen={setIsOpenDrawer}>
        <div className="px-4">
          {routers.map((router, i) => (
            <div key={i}>
              <NavigationLink
                href={router.href}
                disabled={!!router?.children}
                className="px-0"
                onClick={() => !router?.children && setIsOpenDrawer(false)}
              >
                <div
                  className="flex w-full justify-between"
                  onClick={() => handleExtendRouter(router.href)}
                >
                  <div>{router.label}</div>
                  {router.children && (
                    <Image
                      src="/icons/chevron-down.svg"
                      alt="chevron-down"
                      width={20}
                      height={20}
                    />
                  )}
                </div>
              </NavigationLink>
              {router.children && router.href === activeRouter && (
                <div className="animate__animated animate__slideInLeft pl-4">
                  {router.children.map((child, j) => (
                    <NavigationLink
                      key={j}
                      href={child.href}
                      className="!block"
                      onClick={() => setIsOpenDrawer(false)}
                    >
                      {child.label}
                    </NavigationLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </Drawer>
    </nav>
  );
}
function NavigationDesktop() {
  const [activeRouter, setActiveRouter] = useState<null | string>(null);
  const handleExtendRouter = (href: string) => {
    if (activeRouter === href) {
      setActiveRouter(null);
    } else {
      setActiveRouter(href);
    }
  };
  const ref = useClickOutside(() => setActiveRouter(null));

  return (
    <nav
      className="fixed left-0 top-0 z-50 hidden w-full justify-between bg-gray-200 p-2 sm:flex"
      ref={ref}
    >
      <div className="flex w-full justify-center gap-8">
        {routers.map((router, i) => (
          <div
            key={i}
            className="relative inline-block"
            onClick={() => handleExtendRouter(router.href)}
            onMouseEnter={() => handleExtendRouter(router.href)}
            onMouseLeave={() => handleExtendRouter(router.href)}
          >
            <NavigationLink href={router.href} disabled={!!router?.children} className="px-0">
              <div className="flex w-full justify-between">
                <div className="font-semibold text-black">{router.label}</div>
                {router.children && (
                  <Image
                    src="/icons/chevron-down.svg"
                    alt="chevron-down"
                    width={12}
                    height={12}
                    className="ps-1"
                  />
                )}
              </div>
            </NavigationLink>
            {router.children && router.href === activeRouter && (
              <div className="animate__animated animate__fadeIn absolute left-0 top-12 z-10 min-w-48 rounded-md bg-white px-2">
                <div className="flex flex-col">
                  {router.children.map((child, j) => (
                    <NavigationLink key={j} href={child.href} className="!block py-0 !text-black">
                      {child.label}
                    </NavigationLink>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <LocaleSwitcher />
    </nav>
  );
}
export default function Navigation() {
  return (
    <>
      <NavigationDesktop />
      <NavigationMobile />
    </>
  );
}
