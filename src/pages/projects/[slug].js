import ProjectDetails from "@/components/ProjectDetails";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import ResponsiveProjectDetails from "@/components/ResponsiveProjectDetails";

export default function Projects() {
  return (
    <>
      <div className="hidden md:block ">
        <ProjectDetails />
      </div>
      <div className="block md:hidden">
        <ResponsiveProjectDetails/>
      </div>
    </>
  );
}