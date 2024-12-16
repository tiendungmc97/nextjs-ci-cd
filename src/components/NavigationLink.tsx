"use client";

import { Link } from "@/i18n/routing";
import clsx from "clsx";
import { useSelectedLayoutSegment } from "next/navigation";
import { ComponentProps } from "react";

interface NavigationLinkProps extends ComponentProps<any> {
  href: any;
  className?: string;
  disabled?: boolean;
}

export default function NavigationLink({
  href,
  className,
  disabled,
  ...rest
}: NavigationLinkProps) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === href;

  if (disabled) {
    return (
      <div
        {...rest}
        className={clsx(
          "inline-block w-full cursor-pointer px-2 py-3 text-gray-800 transition-colors",
          className,
        )}
      >
        {rest.children}
      </div>
    );
  }

  return (
    <Link
      {...rest}
      aria-current={isActive ? "page" : undefined}
      href={href}
      className={clsx(
        "inline-block px-2 py-3 transition-colors",
        isActive ? "text-gray-800" : "text-gray-400 hover:text-gray-200",
        className,
      )}
    />
  );
}
