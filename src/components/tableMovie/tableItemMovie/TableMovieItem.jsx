import { PropTypes } from "prop-types";
export const TableMovieItem = ({ Title, Duration, Raiting, Genre, Awards }) => {
  return (
    <tr>
      <td> {Title} </td>
      <td> {Duration} </td>
      <td> {Raiting} </td>
      <td>
        <ul>
          { Genre && Genre.map((genres, index) => (
            <li key={index}> {genres} </li>
          ))}
        </ul>
      </td>
      <td> {Awards} </td>
    </tr>
  );
};
TableMovieItem.propTypes = {
  Title: PropTypes.string,
  Duration: PropTypes.number,
  Raiting: PropTypes.number,
  Genre:PropTypes.array,
  Awards: PropTypes.number,
};

TableMovieItem.defaultProps = {
    Title: "Sin titulo",
    Duration: 0,
    Raiting: 0,
    Genre: "Sin genero",
    Awards: 0,
  };