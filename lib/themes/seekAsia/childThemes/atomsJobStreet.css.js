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
  brandAccent: '#fff200',
  formAccent: '#1c3f94',
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
