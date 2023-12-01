import { Card, Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { TableMovieItem } from "../components/tableMovie/tableItemMovie/TableMovieItem";
import { useEffect, useState } from "react";
import { Loading } from "./../components/loading/Loading";
import { Paginator } from "../components/paginator/Paginator";
import { FormSearch } from "../components/formSearch/FormSearch";
import { FormMovies } from "../components/formMovies/FormMovies";
export const ListMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState();

  const getMovies = async (endpoint = "/api/v1/movies") => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:3001${endpoint}`);
      const result = await response.json();

      setLoading(false);
      setMovies(result.data);
      setPagination(result.meta);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);

  const handlePagination = async (event, endpoint) => {
    event.preventDefault();
    getMovies(endpoint);
  };

  const handleAddMovie = async (data, endpoint = "/api/v1/movies") => {
    try {
      const response = await fetch(`http://localhost:3001${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return loading ? (
    <Loading />
  ) : (
    <Row>
      <Col sm={12} md={8} lg={4}>
        <Card.Header>
          <Card.Title>Add Movie</Card.Title>
        </Card.Header>
        <Card.Body>
          <FormMovies handleAddMovie={handleAddMovie} />
        </Card.Body>
      </Col>
      <Col sm={12} md={10} lg={8}>
        <Card className="shadow mb-5">
          <Card.Body>
            <div className="d-flex flex-column flex-nowrap flex-xl-row justify-content-between">
              <FormSearch getMovies={getMovies} />
              <Paginator
                pagination={pagination}
                handlePagination={handlePagination}
              />
            </div>
            <Table striped borderless responsive>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Length</th>
                  <th>Rating</th>
                  <th>Genre</th>
                  <th>Awards</th>
                  <th>Actions</th>
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
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
