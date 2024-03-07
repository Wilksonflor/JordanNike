// import { useState } from "react";
import produtosList from "../../ProdutosData/ProdutosList.jsx";

export const Cards = () => {
  return (
    <>
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

                <button>Comprar</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer>Desenvolvidor por Wilkson Flor &copy;</footer>
    </>
  );
};
