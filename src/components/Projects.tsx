import { projects } from "../utils/projectsData";
import CardProject from "./CardProject";
import { useState } from "react";
import Pagination from "./Pagination";
interface ProjectsProps {
  tags: string[];
  selectBadge: string;
  setSelectBadge: (selectBadge: string) => void;
}
function Projects({ tags, selectBadge, setSelectBadge }: ProjectsProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [projectPerPage] = useState<number>(6);

  // Get current cards
  const indexOfLastProject = currentPage * projectPerPage;
  const indexOfFirstProject = indexOfLastProject - projectPerPage;
  const currentProject = projects.slice(indexOfFirstProject, indexOfLastProject);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <section id="projects" className="flex flex-col items-center h-auto pt-[5rem]">
      <h1 className="text-2xl font-bold py-5">My Projects</h1>
      <div className="flex flex-wrap justify-center items-center w-full xl:w-[30rem]">
        {tags.map((tag, index) => (
          <span
            className={
              selectBadge === tag
                ? "badge m-1 cursor-pointer badge-accent text-white py-3 shadow-md"
                : "badge m-1 cursor-pointer badge-ghost shadow-md"
            }
            key={index}
            onClick={() => setSelectBadge(tag)}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
        {selectBadge === "All"
          ? currentProject.map((project, index) => {
              return <CardProject key={index} {...project} />;
            })
          : projects
              .filter((p_tag) => p_tag.tag === selectBadge)
              .map((project, index) => {
                return <CardProject key={index} {...project} />;
              })}
      </div>
      {selectBadge === "All" && (
        <Pagination
          projectPerPage={projectPerPage}
          totalProjects={projects.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      )}
    </section>
  );
}

export default Projects;
