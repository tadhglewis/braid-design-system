import {
  colors,
  fills,
  fontFamily,
  borderRadius,
  boxShadows,
  fontWeights,
  backgroundColor,
  transforms,
} from '../rawAtoms';
import tokens from '../tokens';
import makeAtoms from '../../../atoms/makeAtoms';

const jobStreetBackgroundColor = {
  ...backgroundColor,
  brandAccent: '#ff9000',
  formAccent: '#0f2C55',
};

export default makeAtoms(
  tokens,
  colors,
  fills,
  fontFamily,
  borderRadius,
  boxShadows,
  fontWeights,
  jobStreetBackgroundColor,
  transforms,
);
