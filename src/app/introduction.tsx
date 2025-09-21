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
      <div className="flex text-xs text-gray-500/80 items-center space-x-5">
        <div>
          <Link href={"https://www.linkedin.com/in/yashmandlik/"} target="_blank" className="inline-flex items-center hover:bg-gray-400/30 rounded transition duration-700 ease-in-out"> LinkedIn <LuArrowUpRight className="text-base"/></Link>
        </div>
        <div>
          <Link href={"mailto:yashmandlik.work@gmail.com"} className="inline-flex hover:bg-gray-400/30 rounded transition duration-700 ease-in-out"> Email <LuArrowUpRight className="text-base"/> </Link>
        </div>
      </div>
    </div>
  )
};

export default Introduction;