import "./style.scss";
import logo from "../../assets/Logo.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo principal do website" />
    </header>
  );
};

export default Header;
