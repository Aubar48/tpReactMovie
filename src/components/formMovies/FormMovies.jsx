/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import { PropTypes } from "prop-types";
import { validate } from "./../../validations/formMoviesValidation";
export const FormMovies = ({
  handleAddMovie,
  handleUpdateMovie,
  movie,
  setMovie,
}) => {
  const [genres, setGenres] = useState([]);
  const getGenres = async (endpoint = "/api/v1/genres") => {
    let response = await fetch(`http://localhost:3001${endpoint}`);
    let result = await response.json();

    setGenres(result.data);
  };
  useEffect(() => {
    getGenres();
  }, []);

  useEffect(() => {
    if (movie) {
      formik.setValues({
        title: movie.title ? movie.title : "Not Title",
        rating: movie.rating ? movie.rating : 0,
        awards: movie.awards ? movie.awards : 0,
        release_date: movie.release_date ? movie.release_date : "",
        length: movie.length ? movie.length : 0,
        genre_id: movie.genre_id ? movie.genre_id : "Not Genre",
      });
    }
  }, [movie]);

  const formik = useFormik({
    initialValues: {
      title: "",
      rating: "",
      awards: "",
      release_date: "",
      length: "",
      genre_id: "",
    },
    validate,
    onSubmit: (values) => {
      movie ? handleUpdateMovie(movie.id, values) : handleAddMovie(values);
      formik.handleReset();
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
            value={formik.values.title}
          />
          {formik.errors.title && (
            <small className="text-danger"> {formik.errors.title} </small>
          )}
        </Form.Group>

        <Form.Group className="mb-3 col-12 col-md-6">
          <Form.Label htmlFor="rating">Rating</Form.Label>
          <Form.Control
            type="number"
            className="form-control"
            id="rating"
            name="rating"
            onChange={formik.handleChange}
            value={formik.values.rating}
          />
          {formik.errors.rating && (
            <small className="text-danger"> {formik.errors.rating} </small>
          )}
        </Form.Group>

        <Form.Group className="mb-3 col-12 col-md-6">
          <Form.Label htmlFor="awards">Awards</Form.Label>
          <Form.Control
            type="number"
            className="form-control"
            id="awards"
            name="awards"
            onChange={formik.handleChange}
            value={formik.values.awards}
          />
          {formik.errors.awards && (
            <small className="text-danger"> {formik.errors.awards} </small>
          )}
        </Form.Group>

        <Form.Group className="mb-3 col-12 col-md-6">
          <Form.Label htmlFor="length">Length</Form.Label>
          <Form.Control
            type="number"
            className="form-control"
            id="length"
            name="length"
            onChange={formik.handleChange}
            value={formik.values.length}
          />
          {formik.errors.length && (
            <small className="text-danger"> {formik.errors.length} </small>
          )}
        </Form.Group>

        <Form.Group className="mb-3 col-12 col-md-6">
          <Form.Label htmlFor="release_date">date</Form.Label>
          <Form.Control
            type="date"
            className="form-control"
            id="release_date"
            name="release_date"
            onChange={formik.handleChange}
            value={formik.values.release_date.split("T")[0].toString()}
          />
          {formik.errors.release_date && (
            <small className="text-danger">
              {" "}
              {formik.errors.release_date}{" "}
            </small>
          )}
        </Form.Group>

        <Form.Group className="mb-3 col-12">
          <Form.Label htmlFor="genre_id">Genre</Form.Label>
          <Form.Select
            className="form-control"
            id="genre_id"
            name="genre_id"
            onChange={formik.handleChange}
            value={formik.values.genre_id}
          >
            <option defaultChecked>Select Genre</option>
            {genres.map(({ name, id }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </Form.Select>
          {formik.errors.genre_id && (
            <small className="text-danger"> {formik.errors.genre_id} </small>
          )}
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
  handleUpdateMovie: PropTypes.func,
  movie: PropTypes.object,
  setMovie: PropTypes.func,
};
