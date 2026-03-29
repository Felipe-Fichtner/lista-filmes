import { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useNavigate,
  useParams,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import SerieForm from './components/SerieForm';
import SerieList from './components/SerieList';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import { createSerie, deleteSerie, getSeries, updateSerie } from './services/seriesApi';
import './App.css';

function EditSerieRoute({ series, onSubmit, isSubmitting }) {
  const { id } = useParams();
  const serie = useMemo(
    () => series.find((item) => item.id === Number(id)),
    [id, series]
  );

  if (!serie) {
    return (
      <div className="feedback-card">
        <h2>Série não encontrada</h2>
        <p>Selecione uma série na listagem para editar.</p>
      </div>
    );
  }

  return (
    <SerieForm
      initialData={serie}
      onSubmit={onSubmit}
      isSubmitting={isSubmitting}
      submitLabel="Salvar alterações"
      title="Editar série"
    />
  );
}

EditSerieRoute.propTypes = {
  series: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      seasons: PropTypes.number.isRequired,
      releaseDate: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
      production: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      watchedAt: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
};

function AppContent() {
  const [series, setSeries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const loadSeries = async () => {
    setIsLoading(true);
    setError('');

    try {
      const data = await getSeries();
      setSeries(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(`Nao foi possivel carregar as series: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadSeries();
  }, []);

  const handleCreateSerie = async (novaSerie) => {
    setIsSubmitting(true);
    setError('');

    try {
      const created = await createSerie(novaSerie);
      setSeries((prev) => [...prev, created]);
      navigate('/series');
      return true;
    } catch (err) {
      setError(`Nao foi possivel cadastrar a serie: ${err.message}`);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleUpdateSerie = async (serieAtualizada) => {
    setIsSubmitting(true);
    setError('');

    try {
      const updated = await updateSerie(serieAtualizada);
      setSeries((prev) => prev.map((s) => (s.id === updated.id ? updated : s)));
      navigate('/series');
      return true;
    } catch (err) {
      setError(`Nao foi possivel atualizar a serie: ${err.message}`);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteSerie = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir esta série?')) {
      setError('');

      try {
        await deleteSerie(id);
        setSeries((prev) => prev.filter((s) => s.id !== id));
      } catch (err) {
        setError(`Nao foi possivel excluir a serie: ${err.message}`);
      }
    }
  };

  const handleEditSerie = (id) => {
    navigate(`/editar/${id}`);
  };

  return (
    <div className="app">
      <NavBar />
      <main className="main-content">
        {error && <div className="feedback-error">{error}</div>}

        {isLoading ? (
          <div className="feedback-card">
            <h2>Carregando dados da API...</h2>
            <p>Verifique se o backend serieJournal-api esta em execucao.</p>
          </div>
        ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route
            path="/cadastrar"
            element={
              <SerieForm
                onSubmit={handleCreateSerie}
                isSubmitting={isSubmitting}
                submitLabel="Cadastrar série"
                title="Cadastrar série"
              />
            }
          />
          <Route
            path="/editar/:id"
            element={
              <EditSerieRoute
                series={series}
                onSubmit={handleUpdateSerie}
                isSubmitting={isSubmitting}
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
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        )}
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
