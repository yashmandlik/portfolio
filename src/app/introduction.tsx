import { ThemeToggle } from "@/app/themeToggle";

const Introduction = ()  => {
  return (
    <div className="flex items-center justify-between mb-10">
      <h1 className="text-xl font-medium"> 
        Hello, I&apos;m Yash 
      </h1>
      <div className="text-xl text-orange-400 hover:animate-pulse">
        <ThemeToggle />
      </div>
    </div>
  )
};

export default Introduction;