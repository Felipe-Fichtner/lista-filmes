import './Sobre.css';

function Sobre() {
  return (
    <section className="sobre-container">
      <div className="sobre-card">
        <h1>Sobre o Projeto</h1>
        <p>
          Este projeto foi desenvolvido com React para a disciplina de Desenvolvimento
          de Sistemas Frontend e evoluído na fase 2 com integração API.
        </p>
        <p>
          Aqui você pode cadastrar, visualizar, editar e excluir séries assistidas,
          com interface Material UI e testes automatizados dos componentes principais.
        </p>
      </div>
    </section>
  );
}

export default Sobre;
