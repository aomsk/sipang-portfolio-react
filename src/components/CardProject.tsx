import { IProjects } from "../utils/typeHelper";

function CardProject({ imageUrl, title, description, tag, technologies }: IProjects) {
  return (
    <div className="card w-auto md:w-96 bg-base-100 shadow-xl mx-5 md:mx-0">
      <figure>
        <img src={`/static/images/${imageUrl}`} alt={imageUrl} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">{tag}</div>
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
