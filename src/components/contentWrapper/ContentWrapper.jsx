
import { ContentRowTop } from "./contentRowTop/ContentRowTop";
import { Footer } from "./footer/Footer";
import { TopBar } from "./topBar/TopBar";
export const ContentWrapper = () => {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <TopBar />
        <ContentRowTop />
      </div>
      <Footer />
    </div>
  );
};
