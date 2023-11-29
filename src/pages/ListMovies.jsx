import { Card } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { TableMovieItem } from "../components/tableMovie/tableItemMovie/TableMovieItem";
import { useEffect, useState } from "react";
import { Loading } from "./../components/loading/Loading";
export const ListMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/movies");
        const result = await response.json();
        
        setLoading(false);
        setMovies(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);

  return (
    <Card className="shadow mb-5">
      <Card.Body>
        {loading ? (
          <Loading />
        ) : (
          <Table striped borderless>
            <thead>
              <tr>
                <th>Title</th>
                <th>Length</th>
                <th>Rating</th>
                <th>Genre</th>
                <th>Awards</th>
              </tr>
            </thead>
            <tbody>
              {movies.map(({ id, title, length, rating, genre, awards }) => (
                <TableMovieItem
                  key={id}
                  title={title}
                  length={length}
                  rating={rating}
                  genre={genre}
                  awards={awards}
                />
              ))}
            </tbody>
          </Table>
        )}
      </Card.Body>
    </Card>
  );
};
