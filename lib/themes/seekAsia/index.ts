import reset from '../../reset/reset.css.js';
import atoms from './atoms.css.js';
import jobStreetCandidateAtoms from './childThemes/atomsJobStreetCandidate.css.js';
import treatTheme from './theme.treat';
import normalizeAtoms from '../../atoms/normalizeAtoms';
import tokens from './tokens';
import { Theme } from '../theme';

const theme: Theme = {
  name: 'seekAsia',
  tokens,
  atoms: normalizeAtoms(reset, atoms),
  treatTheme,
};

export const jobStreetCandidate: Theme = {
  name: 'jobStreetCandidate',
  tokens,
  atoms: normalizeAtoms(reset, jobStreetCandidateAtoms),
  treatTheme,
};

export default theme;
