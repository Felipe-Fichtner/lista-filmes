import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './SerieList.css';

function SerieList({ series, onDelete, onEdit }) {
  const navigate = useNavigate();

  return (
    <div className="serie-list-container">
      <h2>Lista de séries</h2>
      {series.length === 0 ? (
        <p>Nenhuma série cadastrada.</p>
      ) : (
        <table className="serie-table">
          <thead>
            <tr>
              <th>Título</th>
              <th>Temporadas</th>
              <th>Lançamento</th>
              <th>Diretor</th>
              <th>Produtora</th>
              <th>Categoria</th>
              <th>Assistida em</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {series.map((serie) => (
              <tr key={serie.id}>
                <td>{serie.title}</td>
                <td>{serie.seasons} temporadas</td>
                <td>{serie.releaseDate}</td>
                <td>{serie.director}</td>
                <td>{serie.production}</td>
                <td>{serie.category}</td>
                <td>{serie.watchedAt}</td>
                <td className="acoes">
                  <button className="btn-editar" onClick={() => onEdit(serie.id)}>
                    Editar
                  </button>
                  <button className="btn-excluir" onClick={() => onDelete(serie.id)}>
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button className="btn-cadastrar" onClick={() => navigate('/cadastrar')}>
        Cadastrar nova série
      </button>
    </div>
  );
}

SerieList.propTypes = {
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
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default SerieList;
