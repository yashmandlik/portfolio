import Link from "next/link";
import { WorkMetadata } from "@/components/WorkMetadata";
import { LuArrowUpRight } from "react-icons/lu";

const workPreview = (props: WorkMetadata) => {
    return (
        <div className="text-sm">
            <div className="flex items-baseline mb-5">
                <span className="text-stone-500 text-xs whitespace-nowrap">{props.date}</span>
                <div className="ml-10 group">
                    <p className="inline-flex items-center hover:bg-gray-400/30 rounded transition duration-700 ease-in-out">
                        {/* <Link href={`/work/${props.slug}`} className="inline-block"> */}
                        <Link href={props.website} target="_blank" className="inline-block">
                            {props.company}
                        </Link>
                        <LuArrowUpRight className="text-base opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-1" />
                    </p>
                    <p className="text-stone-500 group-hover:opacity-100 transition-opacity duration-200">{props.desc}</p>
                </div>
            </div>
        </div>
    )
};

export default workPreview;