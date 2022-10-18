import { RepositoryItem } from "./RepositoryItem";
import '../style/repositories.scss';
import { useEffect, useState } from "react";
//https://api.github.com/users/OliverioJunior/repos

export function RepositoryList() {
  const [repo, setRepo] = useState([]);

  useEffect(()=>{
    fetch('https://api.github.com/users/OliverioJunior/repos')
    .then(response => response.json())
    .then(data => setRepo(data))
  })
  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>

      <ul>
        {repo.map(repos => <RepositoryItem key={repos.name} repository= {repos} />)}
    

      </ul>
    </section>
  );
}