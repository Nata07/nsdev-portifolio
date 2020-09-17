import React from 'react';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { Container, Content } from './styles';

export default function About() {
  return (
    <Container>
      <Content>
        <div className="about">
          <h1>
            Sobre <span />
          </h1>
          <p>
            Desenvolvedor de Softwares, Graduado em Análise e Desenvolvimento de
            Sistemas, possui especialização em Desenvolvimento Web, Cloud e
            Dispositivos Móveis. Recentemente, descobriu uma nova paixão na
            stack javascript e esta focado em
            <strong> NodeJS</strong>,<strong> ReactJS </strong>e
            <strong> React Native</strong>. Buscando constante evolução para
            acompanhar as constantes mudanças do mercado de tecnologia.
          </p>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/silvanatanael/">
              <FaLinkedin size={30} color="rgb(0, 232, 104)" />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/Nata07">
              <FaGithub size={30} color="rgb(0, 232, 104)" />
              <span>Github</span>
            </a>
          </div>
        </div>
        {/* <div className="img">
          <img
            src="https://res.cloudinary.com/stefanosaffran/image/upload/v1579521489/portfolio/kgheqrikijkbbxcrybat.jpg"
            alt="Stefano Saffran"
          />
        </div> */}
      </Content>
    </Container>
  );
}
