import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import { PropTypes } from "prop-types";
export const FormMovies = ({ handleAddMovie, movie, setMovie }) => {
  const [genres, setGenres] = useState([]);
  const getGenres = async (endpoint = "/api/v1/genres") => {
    let response = await fetch(`http://localhost:3001${endpoint}`);
    let result = await response.json();

    setGenres(result.data);
  };
  useEffect(() => {
    getGenres();
  }, []);

  const formik = useFormik({
    initialValues: {
      title: movie ? movie.title : "",
      rating: movie ? movie.rating : "",
      awards: movie ? movie.awards : "",
      release_date: movie ? movie.release_date : "",
      length: movie ? movie.length : "",
      genre_id: movie ? movie.genre_id : "",
    },
    onSubmit: (values) => {
      movie ? alert("actualizando") : alert("error");

      handleAddMovie(values);
    },
  });

  const handleFormReset = () => {
    setMovie(null);
    formik.handleReset();
  };
  return (
    <>
      <Form className="row" onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3 col-12">
          <Form.Label htmlFor="title">Title</Form.Label>
          <Form.Control
            type="text"
            className="form-control"
            placeholder="Movie Title"
            id="title"
            name="title"
            onChange={formik.handleChange}
            value={movie ? movie.title : formik.values.title}
          />
        </Form.Group>

        <Form.Group className="mb-3 col-12 col-md-6">
          <Form.Label htmlFor="rating">Rating</Form.Label>
          <Form.Control
            type="number"
            className="form-control"
            id="rating"
            name="rating"
            onChange={formik.handleChange}
            value={movie ? movie.rating : formik.values.rating}
          />
        </Form.Group>

        <Form.Group className="mb-3 col-12 col-md-6">
          <Form.Label htmlFor="awards">Awards</Form.Label>
          <Form.Control
            type="number"
            className="form-control"
            id="awards"
            name="awards"
            onChange={formik.handleChange}
            value={movie ? movie.awards : formik.values.awards}
          />
        </Form.Group>

        <Form.Group className="mb-3 col-12 col-md-6">
          <Form.Label htmlFor="length">Length</Form.Label>
          <Form.Control
            type="number"
            className="form-control"
            id="length"
            name="length"
            onChange={formik.handleChange}
            value={movie ? movie.length : formik.values.length}
          />
        </Form.Group>

        <Form.Group className="mb-3 col-12 col-md-6">
          <Form.Label htmlFor="release_date">date</Form.Label>
          <Form.Control
            type="date"
            className="form-control"
            id="release_date"
            name="release_date"
            onChange={formik.handleChange}
            value={movie ? movie.release_date : formik.values.release_date.toString()}
          />
        </Form.Group>

        <Form.Group className="mb-3 col-12">
          <Form.Label htmlFor="genre_id">Genre</Form.Label>
          <Form.Select
            className="form-control"
            id="genre_id"
            name="genre_id"
            onChange={formik.handleChange}
            value={movie ? movie.genre_id : formik.values.genre_id}
          >
            <option defaultChecked>Select Genre</option>
            {genres.map(({ name, id }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3 col-12 ">
          <div className="d-flex justify-content-between ">
            <Button variant="outline-dark" className="w-100 mr-3" type="submit">
              Save
            </Button>
            <Button
              variant="outline-dark"
              className="w-100"
              onClick={handleFormReset}
            >
              Reset
            </Button>
          </div>
        </Form.Group>
      </Form>
    </>
  );
};
FormMovies.propTypes = {
  handleAddMovie: PropTypes.func,
  movie: PropTypes.object,
  setMovie: PropTypes.func,
};
