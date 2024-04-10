"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

type Props = {};

const MenuOptions = (props: Props) => {
  const pathName = usePathname();

  return (
    <nav className="dark:bg-black h-screen overflow-scroll justify-between flex items-center flex-col gap-10 py-6 px-2">
      <div className="flex items-center justify-center flex-col gap-8">
        {/* Correct usage of Link component with an href prop */}
        <Link href="/" legacyBehavior>
          <a className="flex font-bold flex-row">autosyncer.</a>
        </Link>
      </div>
    </nav>
  );
};

export default MenuOptions;
