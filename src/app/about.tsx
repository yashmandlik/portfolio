import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";


const About = () => {
    return (
        <div className="mb-10">
            <p className="text-sm text-stone-700 dark:text-stone-300"> 
                I&apos;m an <Link href={`/work/nuro`} className="inline-flex items-center hover:bg-gray-400/30 rounded transition duration-700 ease-in-out">engineer at Nuro<LuArrowUpRight className="text-base"/></Link>, where I focus on sensor development for autonomous mobility. My interests span a broad range of areas, including embedded systems, signal processing, machine learning and applied AI for robotics. <br />
                
                <br /> Previously, I <Link href={`/work/uhnder`} className="inline-flex items-center hover:bg-gray-400/30 rounded transition duration-700 ease-in-out">worked at Uhnder<LuArrowUpRight className="text-base"/></Link>, where I helped develop digital imaging radars, focusing on sensor software, hardware-software integration and system validation. <br />
                
                <br /> Currently based in Mountain View, California. <br />

                <br /> Reach out to me on <Link href={"https://www.linkedin.com/in/yashmandlik/"} target="_blank" className="inline-flex items-center hover:bg-gray-400/30 rounded transition duration-700 ease-in-out">LinkedIn<LuArrowUpRight className="text-base"/></Link> or at <Link href={"mailto:yashmandlik.work@gmail.com"} className="inline-flex hover:bg-gray-400/30 rounded transition duration-700 ease-in-out">yashmandlik.work@gmail.com</Link>
            </p>
        </div>
    )
};

export default About;