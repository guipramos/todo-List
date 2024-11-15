import "./style.scss";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo principal do website" />
    </header>
  );
};

export default Header;
