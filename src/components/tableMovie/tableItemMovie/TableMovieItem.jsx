import { PropTypes } from "prop-types";
export const TableMovieItem = ({ title, length, rating, genre, awards }) => {
  return (
    <tr>
      <td> {title ? title : "Not Title"} </td>
      <td> {length ? length + " Min" : "Not Length"} </td>
      <td> {rating ? rating : "Not Rating"} </td>
      <td> {genre ? genre.name : "Not Genre"} </td>
      <td> {awards ? awards : "Not Awards"} </td>
      <td>
        <div className="d-flex">
          <button className="btn btn-sm btn-outline-success mr-3">
            <i className="fas fa fa-pencil-alt"></i>
          </button>
          <button className="btn btn-sm btn-outline-danger">
            <i className="fas fa fa-trash-alt"></i>
          </button>
        </div>
      </td>
    </tr>
  );
};
TableMovieItem.propTypes = {
  title: PropTypes.string,
  length: PropTypes.number,
  rating: PropTypes.string, // Puede cambiar a PropTypes.number si `rating` es siempre un número
  genre: PropTypes.shape({
    name: PropTypes.string,
  }),
  awards: PropTypes.number,
};

TableMovieItem.defaultProps = {
  genre: {},
};
