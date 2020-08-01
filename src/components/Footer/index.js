import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
        {/* <img src="../../assets/img/LogoRodape.png" alt="Logo Luckyflix" /> */}
      </a>

      <p>
        Criado por <a href="https://github.com/lucianojec">Luciano Oliveira</a> durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
