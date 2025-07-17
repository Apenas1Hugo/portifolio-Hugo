function NavBar() {
  return (
    <>
      <nav
        className="bg-[rgb(13,27,42)] text-[rgb(224,225,221)] p-5 text-2xl font-serif  flex
      justify-between items-center"
      >
        <div>portifólio</div>
        <div className="flex space-x-5">
          {["Sobre", "Habilidades", "Projetos", "Contatos"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="
        relative inline-block
        text-2xl font-serif
        text-[rgb(224,225,221)]
        transition duration-300 transform
        hover:scale-105 hover:text-[rgb(65,90,119)]

        after:content-['']
        after:absolute after:left-0 after:bottom-0
        after:w-full after:h-[1px] after:bg-[rgb(65,90,119)]
        after:origin-left after:scale-x-0
        after:transition-transform after:duration-300
        hover:after:scale-x-100
      "
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </> //retorno da função
  );
}
export default NavBar; //exporta a função
