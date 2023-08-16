import { projects } from "../utils/projectsData";
import CardProject from "./CardProject";
interface ProjectsProps {
  tags: string[];
  selectBadge: string;
  setSelectBadge: (selectBadge: string) => void;
}
function Projects({ tags, selectBadge, setSelectBadge }: ProjectsProps) {
  return (
    <section id="projects" className="flex flex-col items-center h-auto pt-[5rem]">
      <h1 className="text-2xl font-bold py-5">My Projects</h1>
      <div className="flex flex-wrap justify-center items-center w-full xl:w-[30rem]">
        {tags.map((tag, index) => (
          <span
            className={
              selectBadge === tag
                ? "badge m-1 cursor-pointer badge-accent text-white py-3"
                : "badge m-1 cursor-pointer badge-ghost"
            }
            key={index}
            onClick={() => setSelectBadge(tag)}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
        {selectBadge === "All"
          ? projects.map((project, index) => {
              return <CardProject key={index} {...project} />;
            })
          : projects
              .filter((p_tag) => p_tag.tag === selectBadge)
              .map((project, index) => {
                return <CardProject key={index} {...project} />;
              })}
      </div>
      <div className="join mt-5">
        <button className="join-item btn">1</button>
        <button className="join-item btn btn-active">2</button>
        <button className="join-item btn">3</button>
        <button className="join-item btn">4</button>
      </div>
    </section>
  );
}

export default Projects;
