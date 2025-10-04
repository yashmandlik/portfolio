import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import { ThemeToggle } from "@/app/themeToggle";

const Introduction = ()  => {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-medium"> 
          Hello, I&apos;m Yash 
        </h1>
        <div className="text-xl cursor-pointer text-orange-500">
          <ThemeToggle />
        </div>
      </div>
      <div className="flex text-xs text-stone-500 items-center space-x-2.5">
        <div className="flex group">
          <div>
            <Link href={"https://www.linkedin.com/in/yashmandlik/"} target="_blank" className="inline-flex underline items-center hover:bg-gray-400/30 rounded transition duration-700 ease-in-out"> LinkedIn <LuArrowUpRight className="text-base opacity-0 group-hover:opacity-100 transition-opacity duration-200"/></Link>
          </div>
        </div>
        <div className="flex group">
          <div>
            <Link href={"mailto:yashmandlik.work@gmail.com"} className="inline-flex underline hover:bg-gray-400/30 rounded transition duration-700 ease-in-out"> Email <LuArrowUpRight className="text-base opacity-0 group-hover:opacity-100 transition-opacity duration-200"/> </Link>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Introduction;