import React from 'react';

import { Container, Logo, Menu } from './styles';

import imgLogo from '../../assets/logo.png';

const Header = () => {
  return (
    <Container>
      <Logo source={imgLogo} resizeMode="contain" />
      <Menu> Series </Menu>
      <Menu> Filmes </Menu>
      <Menu> Minha Lista </Menu>
    </Container>
  );
};

export default Header;
