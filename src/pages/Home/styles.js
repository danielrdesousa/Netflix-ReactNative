import styled from 'styled-components';
import { Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #000;
`;

export const Poster = styled.ImageBackground`
  width: 100%;
  height: ${(Dimensions.get('window').height * 81) / 100}px;
`;

export const Gradient = styled(LinearGradient)`
  height: 100%;
`;
