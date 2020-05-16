import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  Container,
  Banner,
  Tags,
  MenuTag,
  Separator,
  MenuHero,
  Button,
  TextButton,
  Play,
  TextButtonPlay,
} from './styles';

import imgBanner from '../../assets/banner.png';

const Hero = () => {
  return (
    <Container>
      <Banner resizeMode="contain" source={imgBanner} />
      <Tags>
        <MenuTag>Envolvente</MenuTag>
        <Separator />
        <MenuTag>Empolgante</MenuTag>
      </Tags>
      <MenuHero>
        <Button>
          <Feather name="plus" size={26} color="#fff" />
          <TextButton>Minha lista</TextButton>
        </Button>
        <Play>
          <Ionicons name="ios-play" size={26} />
          <TextButtonPlay>Assistir</TextButtonPlay>
        </Play>
        <Button>
          <Feather name="info" size={22} color="#fff" />
          <TextButton>Saiba mais</TextButton>
        </Button>
      </MenuHero>
    </Container>
  );
};

export default Hero;
