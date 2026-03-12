import { useNavigate } from 'react-router-dom';
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
                <td>{serie.titulo}</td>
                <td>{serie.temporadas} temporadas</td>
                <td>{serie.dataLancamento}</td>
                <td>{serie.diretor}</td>
                <td>{serie.produtora}</td>
                <td>{serie.categoria}</td>
                <td>{serie.dataAssistida}</td>
                <td className="acoes">
                  <button className="btn-editar" onClick={() => onEdit(serie)}>
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

export default SerieList;
