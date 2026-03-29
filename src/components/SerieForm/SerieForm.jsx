import { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, Button, Box, Card, CardContent, Typography, Alert } from '@mui/material';
import './SerieForm.css';

function SerieForm({
  initialData,
  isSubmitting,
  onSubmit,
  submitLabel = 'Salvar',
  title = 'Cadastrar série',
}) {
  const [titleValue, setTitleValue] = useState(initialData?.title || '');
  const [seasons, setSeasons] = useState(initialData?.seasons || '');
  const [releaseDate, setReleaseDate] = useState(initialData?.releaseDate || '');
  const [director, setDirector] = useState(initialData?.director || '');
  const [production, setProduction] = useState(initialData?.production || '');
  const [category, setCategory] = useState(initialData?.category || '');
  const [watchedAt, setWatchedAt] = useState(initialData?.watchedAt || '');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!titleValue.trim()) newErrors.title = 'Título é obrigatório';
    if (!seasons || seasons <= 0) {
      newErrors.seasons = 'Número de temporadas é obrigatório';
    }
    if (!releaseDate) newErrors.releaseDate = 'Data de lançamento é obrigatória';
    if (!director.trim()) newErrors.director = 'Diretor é obrigatório';
    if (!production.trim()) newErrors.production = 'Produtora é obrigatória';
    if (!category.trim()) newErrors.category = 'Categoria é obrigatória';
    if (!watchedAt) newErrors.watchedAt = 'Data em que assistiu é obrigatória';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const seriePayload = {
      ...(initialData?.id ? { id: initialData.id } : {}),
      title: titleValue.trim(),
      seasons: Number(seasons),
      releaseDate,
      director: director.trim(),
      production: production.trim(),
      category: category.trim(),
      watchedAt,
    };

    const success = await onSubmit(seriePayload);

    if (success && !initialData?.id) {
      setTitleValue('');
      setSeasons('');
      setReleaseDate('');
      setDirector('');
      setProduction('');
      setCategory('');
      setWatchedAt('');
      setErrors({});
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4, mb: 4 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 3, color: '#3f5db8' }}>
            {title}
          </Typography>
          <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Título:</label>
          <input
            type="text"
            value={titleValue}
            onChange={(e) => setTitleValue(e.target.value)}
            disabled={isSubmitting}
          />
          {errors.title && <span className="error">{errors.title}</span>}
        </div>

        <div className="form-group">
          <label>Número de Temporadas:</label>
          <input
            type="number"
            value={seasons}
            onChange={(e) => setSeasons(e.target.value)}
            min="1"
            disabled={isSubmitting}
          />
          {errors.seasons && <span className="error">{errors.seasons}</span>}
        </div>

        <div className="form-group">
          <label>Data de Lançamento da Temporada:</label>
          <input
            type="date"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
            disabled={isSubmitting}
          />
          {errors.releaseDate && <span className="error">{errors.releaseDate}</span>}
        </div>

        <div className="form-group">
          <label>Diretor:</label>
          <input
            type="text"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
            disabled={isSubmitting}
          />
          {errors.director && <span className="error">{errors.director}</span>}
        </div>

        <div className="form-group">
          <label>Produtora:</label>
          <input
            type="text"
            value={production}
            onChange={(e) => setProduction(e.target.value)}
            disabled={isSubmitting}
          />
          {errors.production && <span className="error">{errors.production}</span>}
        </div>

        <div className="form-group">
          <label>Categoria:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            disabled={isSubmitting}
          />
          {errors.category && <span className="error">{errors.category}</span>}
        </div>

        <div className="form-group">
          <label>Data em que assistiu:</label>
          <input
            type="date"
            value={watchedAt}
            onChange={(e) => setWatchedAt(e.target.value)}
            disabled={isSubmitting}
          />
          {errors.watchedAt && <span className="error">{errors.watchedAt}</span>}
        </div>

        <Button type="submit" variant="contained" fullWidth disabled={isSubmitting} sx={{ mt: 2, mb: 2 }}>
          {isSubmitting ? 'Salvando...' : submitLabel}
        </Button>
      </form>
        </CardContent>
      </Card>
    </div>
  );
}

SerieForm.propTypes = {
  initialData: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    seasons: PropTypes.number,
    releaseDate: PropTypes.string,
    director: PropTypes.string,
    production: PropTypes.string,
    category: PropTypes.string,
    watchedAt: PropTypes.string,
  }),
  isSubmitting: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  submitLabel: PropTypes.string,
  title: PropTypes.string,
};

SerieForm.defaultProps = {
  initialData: null,
  isSubmitting: false,
  submitLabel: 'Salvar',
  title: 'Cadastrar série',
};

export default SerieForm;
