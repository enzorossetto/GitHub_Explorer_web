import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

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
          <div>
            <strong>enzorossetto/GoBarber_backend_with_NodeJS</strong>
            <p>Server for GoBarber - Find a barber shop near you</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href='teste'>
          <img
            src='https://avatars1.githubusercontent.com/u/46872902?s=460&u=7e7ec75c273f6efea8dd8daea334867705651c25&v=4'
            alt='Enzo Rossetto'
          />
          <div>
            <strong>enzorossetto/GoBarber_backend_with_NodeJS</strong>
            <p>Server for GoBarber - Find a barber shop near you</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href='teste'>
          <img
            src='https://avatars1.githubusercontent.com/u/46872902?s=460&u=7e7ec75c273f6efea8dd8daea334867705651c25&v=4'
            alt='Enzo Rossetto'
          />
          <div>
            <strong>enzorossetto/GoBarber_backend_with_NodeJS</strong>
            <p>Server for GoBarber - Find a barber shop near you</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
