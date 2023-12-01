import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

export const FormMovies =  () => {

  const [genres, setGenres] = useState([]);
  const getGenres = async () => {
    let response = await fetch(`http://localhost:3001/api/v1/genres`);
    let result = await response.json();
  
    setGenres(result.data);
  };
  useEffect(() => {
    getGenres();
  }, []);

  return (
    <>
      <Form className="row">
        <Form.Group className="mb-3 col-12">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            className="form-control"
            defaultValue="Movie title"
          />
        </Form.Group>

        <Form.Group className="mb-3 col-12 col-md-6">
          <Form.Label>Rating</Form.Label>
          <Form.Control type="number" className="form-control" />
        </Form.Group>

        <Form.Group className="mb-3 col-12 col-md-6">
          <Form.Label>Awards</Form.Label>
          <Form.Control type="number" className="form-control" />
        </Form.Group>

        <Form.Group className="mb-3 col-12 col-md-6">
          <Form.Label>Length</Form.Label>
          <Form.Control type="number" className="form-control" />
        </Form.Group>

        <Form.Group className="mb-3 col-12 col-md-6">
          <Form.Label>Release date</Form.Label>
          <Form.Control type="date" className="form-control" />
        </Form.Group>

        <Form.Group className="mb-3 col-12">
          <Form.Label>Genre</Form.Label>
          <Form.Select className="form-control" defaultValue="">
            <option >
              Select Genre
            </option>
            {genres.map(({ name, id }) => (
              <option key={id} value={id}>{name}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3 col-12">
          <Button variant="outline-dark" className="w-100" type="submit">
            Save
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};
