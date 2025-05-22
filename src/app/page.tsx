import Introduction from "@/app/introduction";
import About from "@/app/about";
// import getProjectMetadata from "@/components/getProjectMetadata";
// import ProjectPreview from "@/components/projectPreview";
import getWorkMetadata from "@/components/getWorkMetadata";
import WorkPreview from "@/components/workPreview";

const HomePage = () => {
  // const projectMetadata = getProjectMetadata();
  // const projectPreviews = projectMetadata.map((project) => (
  //   <ProjectPreview key={project.slug} {...project} />
  // ));

  const workMetadata = getWorkMetadata();
  const workPreviews = workMetadata.map((work) => (
    <WorkPreview key={work.slug} {...work} />
  ));

  return (
    <div className="flex flex-col
                    max-w-2xl mx-auto pt-50 px-20 md:px-0
                    transition-[padding] duration-1000 ease-in-out
                    animate-fade-in">
      <Introduction />
      <About />
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 text-left md:pr-10 mb-10 md:mb-0">
          <p className="mb-5">Work</p>
          {workPreviews}
        </div>
        <div className="w-full md:w-1/2 text-left md:pl-10 mb-30 md:mb-0">
          <p className="mb-5">Projects and Learnings</p>
          {/* {projectPreviews} */}
          <p className="text-xs text-stone-500">[In Progress]</p>
        </div>
      </div>
    </div>
  )
};

export default HomePage;