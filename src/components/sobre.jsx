import React from "react";

const Sobre = () => {
  return (
    <>
      <div //div principal
        className="
  flex flex-col md:flex-row
  items-center justify-center   
  gap-8
  bg-[rgb(65,90,119)]
  p-8 mx-auto max-w-4xl
  rounded-xl
  mt-25  
  "
      >
        <div    //div com a foto e nome
          className="
    flex flex-col items-center space-y-2
    p-4 rounded-lg flex-shrink-0 
  "
        >
          <img
            src="https://github.com/Apenas1Hugo.png"
            alt="Meu avatar do GitHub"
            className="w-40 h-40 md:w-48 md:h-48 rounded-xl object-cover"
          />
          <h1
            className="
      bg-[rgb(26,40,56)]
      text-[rgb(224,225,221)]
      px-3 py-1 font-serif text-center rounded
    "
          >
            Hugo Rodrigues
          </h1>
        </div>

           {/*div com texto*/}
        <div className="md:max-w-md"> 
          <p className="text-[rgb(224,225,221)]">
            Tenho 20 anos e estou concluindo o curso de Análise e
            Desenvolvimento de Sistemas. Busco minha primeira oportunidade no
            mercado de trabalho, onde possa colocar em prática os conhecimentos
            adquiridos na faculdade e crescer profissionalmente. Sou uma pessoa
            calma, com grande vontade de aprender e evoluir a cada dia.
            Apaixonado por tecnologia, estou sempre em busca de novos desafios e
            soluções eficientes para entregar resultados de qualidade.
          </p>
        </div>
      </div>
    </>
  );
};

export default Sobre;
