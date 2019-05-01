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
  brandAccent: '#0f2c55',
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
