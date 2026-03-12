import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import SerieForm from './components/SerieForm';
import SerieList from './components/SerieList';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import './App.css';

function AppContent() {
  const [series, setSeries] = useState([]);
  const [serieParaEditar, setSerieParaEditar] = useState(null);
  const navigate = useNavigate();

  const handleAddSerie = (novaSerie) => {
    setSeries([...series, novaSerie]);
    alert('Série cadastrada com sucesso!');
    navigate('/series');
  };

  const handleUpdateSerie = (serieAtualizada) => {
    setSeries(
      series.map((s) => (s.id === serieAtualizada.id ? serieAtualizada : s))
    );
    setSerieParaEditar(null);
    alert('Série atualizada com sucesso!');
    navigate('/series');
  };

  const handleDeleteSerie = (id) => {
    if (window.confirm('Tem certeza que deseja excluir esta série?')) {
      setSeries(series.filter((s) => s.id !== id));
    }
  };

  const handleEditSerie = (serie) => {
    setSerieParaEditar(serie);
    navigate('/cadastrar');
  };

  return (
    <div className="app">
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route
            path="/cadastrar"
            element={
              <SerieForm
                key={serieParaEditar?.id || 'new'}
                onAddSerie={handleAddSerie}
                serieParaEditar={serieParaEditar}
                onUpdateSerie={handleUpdateSerie}
              />
            }
          />
          <Route
            path="/series"
            element={
              <SerieList
                series={series}
                onDelete={handleDeleteSerie}
                onEdit={handleEditSerie}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
