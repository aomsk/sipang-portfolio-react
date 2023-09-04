import { IProjects } from "../utils/typeHelper";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

function CardProject({ imageUrl, title, description, tag, technologies, githubLink, previewLink }: IProjects) {
  return (
    <div className="card w-auto md:w-[22rem] lg:w-[22rem] bg-base-100 shadow-lg mx-5 md:mx-0 cursor-pointer dark:bg-slate-800 dark:text-slate-200">
      <figure>
        <img
          src={`/static/images/${imageUrl}`}
          alt={imageUrl}
          className="transition-all duration-200 ease-in-out relative hover:scale-[1.2]"
        />
      </figure>
      <div className="card-body px-4">
        <h2 className="card-title text-[16px] md:text-[18px]">
          {title}
          <div className="badge badge-secondary">{tag}</div>
          <a href={githubLink} target="_blank">
            <FaGithub className="w-[20px] h-[20px] transition-all duration-200 ease-in hover:w-[25px] hover:h-[25px]" />
          </a>
          {previewLink !== "" ? (
            <a href={previewLink} target="_blank">
              <HiOutlineExternalLink className="w-[23px] h-[23px]  transition-all duration-200 ease-in hover:w-[27px] hover:h-[27px]" />
            </a>
          ) : (
            ""
          )}
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          {technologies.map((tech, index) => {
            return (
              <div key={index} className="badge badge-outline">
                {tech}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CardProject;
