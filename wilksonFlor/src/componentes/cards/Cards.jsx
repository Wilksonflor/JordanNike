import img1 from "../../assets/produtos/green.png";
import img2 from "../../assets/produtos/air-jordan-1-high-zoom-cmft-tropical-twist-1-400.png";
import img3 from "../../assets/produtos/air-jordan-1-retro-high-court-purple-w-1-400.png";
import img4 from "../../assets/produtos/air-jordan-1-mid-grey-camo-1-1000 1.png";
import img5 from "../../assets/produtos/air-jordan-1-mid-light-smoke-grey-gs-1-1000.png";
import img6 from "../../assets/produtos/air-jordan-1-mid-bright-citrus-1-1000 1.png";

const produtosList = [
  {
    id: 1,
    img: img1,
    nome: "Air Jordan 1 Mid Dutch Green",
    modelo: "Tênis Air Jordan",
    preco: "1.199,99",
  },
  {
    id: 2,
    img: img2,
    nome: "Air Jordan 1 High Zoom CMFT Tropical Twist",
    modelo: "Tênis Air Jordan",
    preco: "1.049,00",
  },
  {
    id: 3,
    img: img3,
    nome: "Air Jordan 1 Mid Dutch Green",
    modelo: "Tênis Air Jordan",
    preco: "1.350,00",
  },
  {
    id: 4,
    img: img4,
    nome: "Air Jordan 1 Mid GS Light Smoke Grey",
    modelo: "Tênis Air Jordan",
    preco: "1.585,00",
  },
  {
    id: 5,
    img: img5,
    nome: "Air Jordan 1 Mid SE Bright Citrus",
    modelo: "Tênis Air Jordan",
    preco: "949,99",
  },
  {
    id: 6,
    img: img6,
    nome: "Air Jordan 1 Mid Grey Camo",
    modelo: "Tênis Air Jordan",
    preco: "999,99",
  },
];

export const Cards = () => {
  return (
    <div className="containerCards">
      <div className="textTCards">
        <h2>Os melhores em só lugar</h2>
        <p>
          A marca Jordan na JordanShoes é a escolha certa para os amantes de
          sneakers que buscam estilo e conforto.
        </p>
      </div>

      <div className="cardsContainer">
        {produtosList.map((data, index) => (
          <div key={index} className="cards">
            <div className="bgImg">
              <img src={data.img} alt={data.nome} />
            </div>

            <div className="text">
              <p className="nome">{data.nome}</p>
              <p className="modelo">{data.modelo}</p>
              <p className="preco">R$ {data.preco}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
