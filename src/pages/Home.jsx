import './Home.css';

function Home() {
  return (
    <section className="home-container">
      <div className="home-hero">
        <span className="home-badge">Serie Journal</span>
        <h1>Página Inicial</h1>
        <p className="home-lead">Bem-vindo ao projeto CRUD de séries.</p>
        <p>Gerencie suas séries assistidas com cadastro, edição e exclusão em tempo real usando API REST.</p>
      </div>
    </section>
  );
}

export default Home;
