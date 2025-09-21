import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";


const About = () => {
    return (
        <div className="mb-10">
            <p className="text-sm text-stone-700 dark:text-stone-300"> 
                I&apos;m a <Link href={`https://www.nuro.ai/`} className="inline-flex items-center hover:bg-gray-400/30 rounded transition duration-700 ease-in-out"> Sensor Engineer at Nuro<LuArrowUpRight className="text-base"/></Link>, where I focus on sensor development and performance evaluation, helping intelligent machines better perceive the physical world. <br />

                <br /> Before Nuro, I <Link href={`https://www.uhnder.com/`} className="inline-flex items-center hover:bg-gray-400/30 rounded transition duration-700 ease-in-out">was at Uhnder<LuArrowUpRight className="text-base"/></Link>, working on hardware-software integration and system validation for digital imaging radars. <br />
                
                <br /> I&apos;m broadly interested in machine learning and robotics, with a growing focus on signal processing and embedded systems, helping build intelligent autonomous systems that operate reliably in the real world. <br />
            </p>
        </div>
    )
};

export default About;