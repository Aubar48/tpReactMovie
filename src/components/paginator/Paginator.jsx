import propType from "prop-types";
import { Link } from "react-router-dom";
export const Paginator = ({
  pagination: { currentPage, pages },
  handlePagination,
}) => {
  return (
    <nav aria-label="Page navigation ">
      <ul className="pagination flex-wrap">
        {currentPage !== 1 && (
          <li className="page-item">
            <Link
              className="page-link"
              to="#"
              aria-label="Previous"
              onClick={(event) =>
                handlePagination(
                  event,
                  `/api/v1/movies?page=${currentPage - 1}&limit=5`
                )
              }
            >
              <span aria-hidden="true">&laquo;</span>
            </Link>
          </li>
        )}
        {pages.map((paginate) => (
          <li
            key={paginate.number}
            className={`page-item ${
              paginate.number === currentPage && "active"
            }`}
          >
            <Link
              className="page-link"
              to="#"
              onClick={(event) => handlePagination(event, paginate.url)}
            >
              {paginate.number}
            </Link>
          </li>
        ))}
        {currentPage !== pages[pages.length -1].number && (
          <li className="page-item">
            <Link
              className="page-link"
              to="#"
              aria-label="Next"
              onClick={(event) =>
                handlePagination(
                  event,
                  `/api/v1/movies?page=${currentPage + 1}&limit=5`
                )
              }
            >
              <span aria-hidden="true">&raquo;</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

Paginator.propTypes = {
  pagination: propType.object,
  handlePagination: propType.func,
};
