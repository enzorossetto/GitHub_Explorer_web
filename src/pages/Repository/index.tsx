import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="GitHub Explorer" />

        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars1.githubusercontent.com/u/46872902?s=460&u=7e7ec75c273f6efea8dd8daea334867705651c25&v=4"
            alt="Enzo Rossetto"
          />
          <div>
            <strong>enzorossetto/GoBarber_backend_with_NodeJS</strong>
            <p>Descrição do repositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1880</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>120</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>99</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="a">
          <div>
            <strong>gfds</strong>
            <p>gdsg</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
