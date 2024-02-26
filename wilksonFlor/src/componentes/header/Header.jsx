import { FaTruck } from "react-icons/fa";
import jordan from "../../assets/jordan/mjordan.png";
import logo from "../../assets/jordan/logo.png";
export const Header = () => {
  const bgHeader = {
    backgroundImage: `url(${jordan})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    maxHeight: "400px",
    width: "100%",
  };
  return (
    <header className="headerContainer">
      <h2>
        <span>
          <FaTruck />
        </span>
        Frete Grátis para todo o Brasil
      </h2>
      <div style={bgHeader}>
        <div>
          <h3>
            <img src={logo} alt="" />
          </h3>
          <h1>
            A melhor loja de Jordan O tênis Jordan é fruto de uma velha e forte
            parceria entre a Nike e o jogador Michael Jordan.
          </h1>
        </div>
      </div>
    </header>
  );
};
