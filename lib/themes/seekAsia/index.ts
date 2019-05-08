import reset from '../../reset/reset.css.js';
import atoms from './atoms.css.js';
import jobStreetAtoms from './childThemes/atomsJobStreet.css.js';
import jobsDBAtoms from './childThemes/atomsJobsDB.css.js';
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

export const jobStreet: Theme = {
  name: 'jobStreet',
  tokens,
  atoms: normalizeAtoms(reset, jobStreetAtoms),
  treatTheme,
};

export const jobsDB: Theme = {
  name: 'jobsDB',
  tokens,
  atoms: normalizeAtoms(reset, jobsDBAtoms),
  treatTheme,
};

export default theme;
