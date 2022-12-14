import "./Dashboard.css";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <Navbar />
        <div className="bg-image"></div>

        <div className="hero">
          <div className="hero-greeting">
            <h1 className="hero-title">Welcome User!</h1>
            <p className="hero-heading-text spacing">Let's design your home</p>
            <p className="spacing">
              Enter your preferences and see all available homes that are a
              match.
            </p>
            <Button>
              <Link to="/" className="link">
                Find a home
              </Link>
            </Button>
          </div>
          <hero className="img-wrap">
            <div className="hero-image"></div>
          </hero>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
