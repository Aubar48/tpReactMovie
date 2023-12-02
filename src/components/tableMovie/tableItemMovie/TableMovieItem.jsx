import { PropTypes } from "prop-types";
export const TableMovieItem = ({
  movie: { id, title, length, rating, genre, awards },
  handleEdditMovie,
  handleDeleteMovie,
}) => {
  return (
    <tr>
      <td> {title ? title : "Not Title"} </td>
      <td> {length ? length + " Min" : "Not Length"} </td>
      <td> {rating ? rating : "Not Rating"} </td>
      <td> {genre ? genre.name : "Not Genre"} </td>
      <td> {awards ? awards : "Not Awards"} </td>
      <td>
        <div className="d-flex">
          <button
            className="btn btn-sm btn-outline-success mr-3"
            onClick={() => handleEdditMovie(id)}
          >
            <i className="fas fa fa-pencil-alt"></i>
          </button>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => handleDeleteMovie(id)}
          >
            <i className="fas fa fa-trash-alt"></i>
          </button>
        </div>
      </td>
    </tr>
  );
};
TableMovieItem.propTypes = {
  movie: PropTypes.object,
  handleEdditMovie: PropTypes.func,
  handleDeleteMovie: PropTypes.func,
};

TableMovieItem.defaultProps = {
  genre: {},
  title: "Not Title",
  length: 0,
};
