import React from "react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    img: "/imagens/projeto1.png",
    titulo: "To-do list",
    texto: "Uma To-do list simples criada com html,css e JavaScript",
    link: "https://github.com/Apenas1Hugo/To-do-list",
  },
];

export default function Projetos() {
  return (
    <section
      id="projetos"
      className="
        bg-[rgb(65,90,119)]
        p-8 mx-auto max-w-4xl
        rounded-xl mt-8 pb-24
        mb-15
      "
    >
      <h2 className="text-3xl font-serif text-[rgb(224,225,221)] mb-6 text-center">
        Projetos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(({ id, img, titulo, texto, link }) => (
          <div
            key={id}
            className="
              flex flex-col
              bg-[rgb(26,40,56)]
              rounded-lg overflow-hidden
              shadow-lg
            "
          >
            <div className="w-full h-40 overflow-hidden">
              <img
                src={img}
                alt={titulo}
                className="object-cover"
              />
            </div>

            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-[rgb(224,225,221)] mb-2">
                {titulo}
              </h3>
              <p className="text-[rgb(224,225,221)] flex-grow">{texto}</p>

              <a
                href={link}
                target="_blank"
                className="
                  mt-4
                  inline-flex items-center justify-center
                  bg-[rgb(65,90,119)]
                  hover:bg-[rgb(119,141,169)]
                  text-[rgb(224,225,221)]
                  px-4 py-2 rounded
                  transition-colors
                
                "
              >
                <FaGithub className="mr-2" />
                Veja mais
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
