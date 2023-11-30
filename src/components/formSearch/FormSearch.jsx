import propTypes from 'prop-types';
import { useState } from "react";
import { Form } from "react-bootstrap";

export const FormSearch = ({ getMovies }) => {
  const [valuesForm, setValuesForm] = useState({});
  const handleInputChanges = ({ target }) => {
    setValuesForm({
      ...valuesForm,
      [target.name]: target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies(`/api/v1/movies?keyword=${valuesForm.keyword}`);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          name="keyword"
          onChange={handleInputChanges}
        />
        <button className="btn input-group-text" type="submit">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </Form>
  );
};

FormSearch.propTypes = {
  getMovies: propTypes.func,
};
