import Image from "next/image";
import React from "react";

interface DrawerProps {
  children: React.ReactNode;
  isOpen: boolean;
  title?: string;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Drawer({ children, isOpen, title = "", setIsOpen }: DrawerProps) {
  return (
    <main
      className={
        "fixed inset-0 z-10 transform overflow-hidden" +
        (isOpen
          ? " translate-x-0 opacity-100 transition-opacity duration-500"
          : " translate-x-full opacity-0 transition-all delay-500")
      }
    >
      <section
        className={
          "delay-400 absolute right-0 h-full w-screen max-w-lg transform bg-white shadow-xl transition-all duration-500 ease-in-out " +
          (isOpen ? " translate-x-0" : " translate-x-full")
        }
      >
        <article className="relative flex h-full w-screen max-w-lg flex-col pb-10">
          <div className="flex items-center justify-between p-4">
            <div>{title}</div>
            <button
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <Image src="/icons/close-x.svg" alt="close" width={20} height={20} />
            </button>
          </div>
          {children}
        </article>
      </section>
      <section
        className="h-full w-screen cursor-pointer"
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}
