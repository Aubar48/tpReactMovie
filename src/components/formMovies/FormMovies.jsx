export const FormMovies = () => {
  return (
    <>
      <form className="form-floating mb-3">
        <label htmlFor="floatingInput">Title</label>
        <input
          type="text"
          className="form-control"
          id="floatingInputTitle"
          value="Movie title"
        />

        <div className="mb-3">
          <label htmlFor="floatingInput">Rating</label>
          <input
            type="number"
            className="form-control"
            id="floatingInputRating"
          />
        </div>
      </form>
    </>
  );
};
