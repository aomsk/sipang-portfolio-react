interface ProjectsProps {
  tags: string[];
  selectBadge: string;
  setSelectBadge: (selectBadge: string) => void;
}
function Projects({ tags, selectBadge, setSelectBadge }: ProjectsProps) {
  return (
    <section className="flex flex-col items-center h-full pt-5">
      <h1 className="text-2xl font-bold mb-5">My Projects</h1>
      <div className="flex justify-center items-center w-full xl:w-[30rem]">
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
    </section>
  );
}

export default Projects;
