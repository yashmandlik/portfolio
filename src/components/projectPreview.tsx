import Link from "next/link";
import { ProjectMetadata } from "@/components/ProjectMetadata";
import { LuArrowUpRight } from "react-icons/lu";

const projectPreview = (props: ProjectMetadata) => {
    return (
         <div className="text-sm">
            <div className="flex items-baseline mb-5">
                <p className="text-stone-500 text-xs whitespace-nowrap">{props.date}</p>
                <div className="ml-10 group">
                    <p className="inline-flex items-center hover:bg-gray-400/30 rounded transition duration-700 ease-in-out">
                        <Link href={`/project/${props.slug}`} className="inline-block">
                            {props.project}
                        </Link>
                        <LuArrowUpRight className="text-base opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-1" />
                    </p>
                    <p className="text-stone-500 group-hover:opacity-100 transition-opacity duration-200">{props.desc}</p>
                </div>
            </div>
        </div>
    )
};
export default projectPreview;