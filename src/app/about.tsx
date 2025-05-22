import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";


const About = () => {
    return (
        <div className="mb-10">
            <p className="text-sm text-stone-700 dark:text-stone-300"> 
                I&apos;m an engineer at <Link href={"https://www.nuro.ai/"} target="_blank" className="inline-flex items-center hover:bg-gray-400/30 rounded transition duration-700 ease-in-out">Nuro<LuArrowUpRight className="text-base"/></Link>, where I focus on sensor development and hardware-software integration for ADAS and robotics platforms. My interests span a broad range of areas, including embedded systems, signal processing, machine learning and applied AI for robotics, working at the intersection of software, hardware and systems. <br />
                
                <br /> Previously, I worked at <Link href={"https://www.uhnder.com/"} target="_blank" className="inline-flex items-center hover:bg-gray-400/30 rounded transition duration-700 ease-in-out">Uhnder<LuArrowUpRight className="text-base"/></Link>, where I helped develop and validate imaging radars, focusing on software and system integration. <br />
                
                <br /> Currently based in Mountain View, California. <br />

                <br /> Reach out to me on <Link href={"https://www.linkedin.com/in/yashmandlik/"} target="_blank" className="inline-flex items-center hover:bg-gray-400/30 rounded transition duration-700 ease-in-out">LinkedIn<LuArrowUpRight className="text-base"/></Link> or at <Link href={"mailto:yashmandlik.work@gmail.com"} className="inline-flex hover:bg-gray-400/30 rounded transition duration-700 ease-in-out">yashmandlik.work@gmail.com</Link>
            </p>
        </div>
    )
};

export default About;