import React from 'react';
import PropTypes from 'prop-types';
import { Container, Repositorio } from './styles';

const CompareList = ({ repositories }) => (
  <Container>
    {repositories.map(repositorio => (
      <Repositorio key={repositorio.id}>
        <header>
          <img
            src={repositorio.owner.avatar_url}
            alt={repositorio.owner.login}
          />
          <strong>{repositorio.name}</strong>
          <small>{repositorio.owner.login}</small>
        </header>
        <ul>
          <li>
            {repositorio.stargazers_count} <small>stars</small>
          </li>
          <li>
            {repositorio.forks_count} <small>forks</small>
          </li>
          <li>
            {repositorio.open_issues_count} <small>issues</small>
          </li>
          <li>
            {repositorio.lastCommit} <small>last commit</small>
          </li>
        </ul>
      </Repositorio>
    ))}
  </Container>
);

// declara o tipo das props vindas da API
CompareList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    })
  ).isRequired
};

export default CompareList;
