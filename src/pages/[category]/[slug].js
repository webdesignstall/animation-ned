import ProjectDetails from "@/components/ProjectDetails";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ResponsiveProjectDetails from "@/components/ResponsiveProjectDetails";


const Projects =({title})=> {
  return (
    <>
      <div className="hidden lg:block ">
          <h2>{title}</h2>
        <ProjectDetails />
      </div>
      <div className="block lg:hidden">
        <ResponsiveProjectDetails/>
      </div>
    </>
  );
}

export default Projects;
