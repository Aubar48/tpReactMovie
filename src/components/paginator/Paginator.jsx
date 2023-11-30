import propType from "prop-types";
import { Link } from "react-router-dom";
export const Paginator = ({ pagination, handlePagination }) => {
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        <li className="page-item">
          <Link className="page-link" to="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </Link>
        </li>
        {pagination.pages.map((paginate) => (
          <li
            key={paginate.number}
            className={`page-item ${
              paginate.number === paginate.currentPage && "active"
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
        <li className="page-item">
          <Link className="page-link" to="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

Paginator.propTypes = {
  pagination: propType.object,
  handlePagination: propType.func,
};
