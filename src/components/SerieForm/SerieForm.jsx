import { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, Button, Box, Card, CardContent, Typography } from '@mui/material';
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
            <Box sx={{ display: 'grid', gap: 2 }}>
              <TextField
                label="Título"
                value={titleValue}
                onChange={(e) => setTitleValue(e.target.value)}
                error={Boolean(errors.title)}
                helperText={errors.title || ''}
                disabled={isSubmitting}
                fullWidth
              />

              <TextField
                label="Número de Temporadas"
                type="number"
                value={seasons}
                onChange={(e) => setSeasons(e.target.value)}
                error={Boolean(errors.seasons)}
                helperText={errors.seasons || ''}
                disabled={isSubmitting}
                inputProps={{ min: 1 }}
                fullWidth
              />

              <TextField
                label="Data de Lançamento da Temporada"
                type="date"
                value={releaseDate}
                onChange={(e) => setReleaseDate(e.target.value)}
                error={Boolean(errors.releaseDate)}
                helperText={errors.releaseDate || ''}
                disabled={isSubmitting}
                InputLabelProps={{ shrink: true }}
                fullWidth
              />

              <TextField
                label="Diretor"
                value={director}
                onChange={(e) => setDirector(e.target.value)}
                error={Boolean(errors.director)}
                helperText={errors.director || ''}
                disabled={isSubmitting}
                fullWidth
              />

              <TextField
                label="Produtora"
                value={production}
                onChange={(e) => setProduction(e.target.value)}
                error={Boolean(errors.production)}
                helperText={errors.production || ''}
                disabled={isSubmitting}
                fullWidth
              />

              <TextField
                label="Categoria"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                error={Boolean(errors.category)}
                helperText={errors.category || ''}
                disabled={isSubmitting}
                fullWidth
              />

              <TextField
                label="Data em que assistiu"
                type="date"
                value={watchedAt}
                onChange={(e) => setWatchedAt(e.target.value)}
                error={Boolean(errors.watchedAt)}
                helperText={errors.watchedAt || ''}
                disabled={isSubmitting}
                InputLabelProps={{ shrink: true }}
                fullWidth
              />

              <Button type="submit" variant="contained" fullWidth disabled={isSubmitting} sx={{ mt: 1 }}>
                {isSubmitting ? 'Salvando...' : submitLabel}
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
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

export default SerieForm;
