import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt='GitHub Explorer' />
      <Title>Explore repositórios no GitHub</Title>

      <Form>
        <input placeholder='Digite o nome do repositório' />
        <button type='submit'>Pesquisar</button>
      </Form>

      <Repositories>
        <a href='teste'>
          <img
            src='https://avatars1.githubusercontent.com/u/46872902?s=460&u=7e7ec75c273f6efea8dd8daea334867705651c25&v=4'
            alt='Enzo Rossetto'
          />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
