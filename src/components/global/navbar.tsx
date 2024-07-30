import React from "react";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

type Props = {};

const Navbar = async (props: Props) => {
  return (
    <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
      <aside className="flex items-center gap-[2px]">
        <p className="text-3xl font-bold">Joi</p>
      </aside>
      <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
        <ul className="flex items-center gap-4 list-none">
          <li>
            <Link href="#">Home</Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
        <Link
          href="/dashboard"
          className="px-8 py-2 border border-black bg-transparent text-black  dark:border-white relative group transition duration-200"
        >
          <div className="absolute -bottom-2 -right-2 bg-purple-300 h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
          <span className="relative">
            {/* User Section Here to be added */}
            {true ? "Dashboard" : "Get Started"}
          </span>
        </Link>
        <UserButton/>

        <MenuIcon className="md:hidden" />
      </aside>
    </header>
  );
};

export default Navbar;
