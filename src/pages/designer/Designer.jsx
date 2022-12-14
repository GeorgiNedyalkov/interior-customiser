import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import DesignerList from "../../components/designerList/DesignerList";
import Sidebar from "../../components/sidebar/Sidebar";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import { DesignProvider } from "../../context/context";

const Designer = () => {
  return (
    <DesignProvider>
      <Navbar />
      <div className="main">
        <Slider />
        <div className="sidebar">
          <Sidebar>
            <h1 className="title">Who is your preferred designer?</h1>
            <p className="description">
              Choose Nabr’s design, which you can make your own with custom
              features, or premium packages from world-class designers.
              Furnishings not included.
            </p>
            <DesignerList />
            <Button>
              <Link to="/features" className="link">
                Continue
              </Link>
            </Button>
          </Sidebar>
        </div>
      </div>
    </DesignProvider>
  );
};

export default Designer;
