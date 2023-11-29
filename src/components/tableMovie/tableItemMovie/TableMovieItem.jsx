import { PropTypes } from "prop-types";
export const TableMovieItem = ({ title, length, rating, genre, awards }) => {
  return (
    <tr>
      <td> {title ? title : "Not Title"} </td>
      <td> {length ? length + " Min" : "Not Length"} </td>
      <td> {rating ? rating : "Not Rating"} </td>
      <td> {genre ? genre.name : "Not Genre"} </td>
      <td> {awards ? awards : "Not Awards"} </td>
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
  genre: "Sin género asignado",
};
