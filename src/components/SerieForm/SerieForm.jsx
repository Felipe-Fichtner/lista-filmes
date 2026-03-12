import { useState } from 'react';
import './SerieForm.css';

function SerieForm({ onAddSerie, serieParaEditar, onUpdateSerie }) {
  const [titulo, setTitulo] = useState(serieParaEditar?.titulo || '');
  const [temporadas, setTemporadas] = useState(serieParaEditar?.temporadas || '');
  const [dataLancamento, setDataLancamento] = useState(serieParaEditar?.dataLancamento || '');
  const [diretor, setDiretor] = useState(serieParaEditar?.diretor || '');
  const [produtora, setProdutora] = useState(serieParaEditar?.produtora || '');
  const [categoria, setCategoria] = useState(serieParaEditar?.categoria || '');
  const [dataAssistida, setDataAssistida] = useState(serieParaEditar?.dataAssistida || '');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!titulo.trim()) newErrors.titulo = 'Título é obrigatório';
    if (!temporadas || temporadas <= 0) newErrors.temporadas = 'Número de temporadas é obrigatório';
    if (!dataLancamento) newErrors.dataLancamento = 'Data de lançamento é obrigatória';
    if (!diretor.trim()) newErrors.diretor = 'Diretor é obrigatório';
    if (!produtora.trim()) newErrors.produtora = 'Produtora é obrigatória';
    if (!categoria.trim()) newErrors.categoria = 'Categoria é obrigatória';
    if (!dataAssistida) newErrors.dataAssistida = 'Data em que assistiu é obrigatória';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const novaSerie = {
      id: serieParaEditar?.id || Date.now(),
      titulo,
      temporadas: Number(temporadas),
      dataLancamento,
      diretor,
      produtora,
      categoria,
      dataAssistida,
    };

    if (serieParaEditar) {
      onUpdateSerie(novaSerie);
    } else {
      onAddSerie(novaSerie);
    }

    // Limpar formulário
    setTitulo('');
    setTemporadas('');
    setDataLancamento('');
    setDiretor('');
    setProdutora('');
    setCategoria('');
    setDataAssistida('');
    setErrors({});
  };

  return (
    <div className="serie-form-container">
      <h2>{serieParaEditar ? 'Editar série' : 'Cadastrar séries'}</h2>
      <form onSubmit={handleSubmit} className="serie-form">
        <div className="form-group">
          <label>Título:</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
          {errors.titulo && <span className="error">{errors.titulo}</span>}
        </div>

        <div className="form-group">
          <label>Número de Temporadas:</label>
          <input
            type="number"
            value={temporadas}
            onChange={(e) => setTemporadas(e.target.value)}
            min="1"
          />
          {errors.temporadas && <span className="error">{errors.temporadas}</span>}
        </div>

        <div className="form-group">
          <label>Data de Lançamento da Temporada:</label>
          <input
            type="date"
            value={dataLancamento}
            onChange={(e) => setDataLancamento(e.target.value)}
          />
          {errors.dataLancamento && <span className="error">{errors.dataLancamento}</span>}
        </div>

        <div className="form-group">
          <label>Diretor:</label>
          <input
            type="text"
            value={diretor}
            onChange={(e) => setDiretor(e.target.value)}
          />
          {errors.diretor && <span className="error">{errors.diretor}</span>}
        </div>

        <div className="form-group">
          <label>Produtora:</label>
          <input
            type="text"
            value={produtora}
            onChange={(e) => setProdutora(e.target.value)}
          />
          {errors.produtora && <span className="error">{errors.produtora}</span>}
        </div>

        <div className="form-group">
          <label>Categoria:</label>
          <input
            type="text"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          />
          {errors.categoria && <span className="error">{errors.categoria}</span>}
        </div>

        <div className="form-group">
          <label>Data em que assistiu:</label>
          <input
            type="date"
            value={dataAssistida}
            onChange={(e) => setDataAssistida(e.target.value)}
          />
          {errors.dataAssistida && <span className="error">{errors.dataAssistida}</span>}
        </div>

        <button type="submit" className="btn-submit">
          {serieParaEditar ? 'Salvar alterações' : 'Cadastrar Série'}
        </button>
      </form>
    </div>
  );
}

export default SerieForm;
