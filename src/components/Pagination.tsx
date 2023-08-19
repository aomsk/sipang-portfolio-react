import { Link } from "react-scroll";

type PaginatinProps = {
  projectPerPage: number;
  totalProjects: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
};

function Pagination({ projectPerPage, totalProjects, currentPage, paginate }: PaginatinProps) {
  const pageNumber: number[] = [];

  for (let i = 1; i <= Math.ceil(totalProjects / projectPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div className="join my-5">
      {pageNumber.map((number) => (
        <Link
          to={"projects"}
          smooth={true}
          spy={true}
          offset={10}
          onClick={() => paginate(number)}
          key={number}
          className={`join-item btn ${number === currentPage ? "btn-active" : ""}`}
        >
          {number}
        </Link>
      ))}
    </div>
  );
}

export default Pagination;
