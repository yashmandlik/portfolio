import Link from "next/link";
import { ThemeToggle } from "@/app/themeToggle";
import { LuArrowUpRight } from "react-icons/lu";

const Header = () => {
    return (
        <header className="flex
        mt-10 px-10 lg:px-0
        transition-[padding] duration-1000 ease-in-out 
        max-w-4xl mx-auto
        text-sm items-center justify-end">
            <div className="group mr-5">
              <Link href={"/"} className="inline-flex items-center hover:bg-gray-400/30 rounded transition duration-700 ease-in-out">
                home
                <LuArrowUpRight className="text-base opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-1" />
              </Link>
            </div>
            <div className="group mr-5">
              <Link href={"/"} className="inline-flex items-center hover:bg-gray-400/30 rounded transition duration-700 ease-in-out">
                work
                <LuArrowUpRight className="text-base opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-1" />
              </Link>
            </div>
            <div className="group mr-5">
              <Link href={"/"} className="inline-flex items-center hover:bg-gray-400/30 rounded transition duration-700 ease-in-out">
                projects
                <LuArrowUpRight className="text-base opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-1" />
              </Link>
            </div>
            <div className="text-xl text-orange-400 hover:animate-pulse">
              <ThemeToggle />
            </div>
        </header>
    )
};

export default Header;