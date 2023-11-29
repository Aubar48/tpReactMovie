import { LastMoviesDb } from "./../components/contentWrapper/contentRowTop/lastMoviesDb/LastMoviesDb";
import { GenreInDb } from "./../components/contentWrapper/contentRowTop/genreInDb/GenreInDb";
export const Home = () => {
  return (
    <>
      <div className="row">
        <LastMoviesDb />
        <GenreInDb />
      </div>
    </>
  );
};
