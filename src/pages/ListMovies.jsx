import { Card } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { TableMovieItem } from "../components/tableMovie/tableItemMovie/TableMovieItem";
export const ListMovies = () => {
  const movies = [
    {
      id: crypto.randomUUID(),
      Title: "Rambo",
      Duration: "120",
      Raiting: "9",
      Genre: ["action", "animation"],
      Awards: "9",
    },
    {
      id: crypto.randomUUID(),
      Title: "Batman",
      Duration: "130",
      Raiting: "10",
      Genre: ["action", "drama"],
      Awards: "10",
    },
  ];
  return (
    
        <Card className="shadow mb-5">
          <Card.Body>
            <Table striped borderless>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Duration</th>
                  <th>Raiting</th>
                  <th>Genre</th>
                  <th>Awards</th>
                </tr>
              </thead>
              <tbody>
                {movies.map(
                  ({ id, Title, Duration, Raiting, Genre, Awards }) => (
                    <TableMovieItem
                      key={id}
                      Title={Title}
                      Duration={Duration}
                      Raiting={Raiting}
                      Genre={Genre}
                      Awards={Awards}
                    />
                  )
                )}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
     
  );
};
