import { FaTruck, FaShoppingCart } from "react-icons/fa";
import jordan from "../../assets/jordan/mjordan.png";
import logo from "../../assets/jordan/logo.png";

export const Header = () => {
  const bgHeader = {
    backgroundImage: `url(${jordan})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "500px",
    width: "100%",
  };

  return (
    <header className="headerContainer">
      <div className="containerFrete">
        <span className="carFrete">
          <FaTruck className="iconeCarrinho" />
        </span>
        <h2>Frete Grátis para todo o Brasil</h2>
        <div className="containerCarrinhoCompras">
          <button className="carrinhoCompras">
            <FaShoppingCart />
          </button>
        </div>
      </div>
      <div style={bgHeader} className="containerTextHeader">
        <div className="textHeader">
          <h3>
            <img src={logo} alt="" />
          </h3>
          <h1>A melhor loja de Jordan </h1>
          <p>
            O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e
            o jogador Michael Jordan.
          </p>
        </div>
      </div>
    </header>
  );
};
