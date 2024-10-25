export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description ?? "Sem descricao"}</p>
      <a href={props.repository.html_url} target="blank">
        Acessar repositório
      </a>
    </li>
  );
}
