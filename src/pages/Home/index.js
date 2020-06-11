import React from 'react';

import logo from '~/assets/logo-ns.png';
import { Container, Content } from './styles';

export default function Home() {
  return (
    <Container>
      <Content>
        <div className="img-container">
          <img src={logo} alt="logo" />
        </div>
        <div>
          <h1>Natanael Silva</h1>
          <h2>Software Developer</h2>
          <ul>
            <li>NodeJS</li>
            <li>ReactJS</li>
            <li>React Native</li>
          </ul>
        </div>
      </Content>
    </Container>
  );
}
