import { flatten } from 'lodash';
import { ComponentDocs } from '../../site/src/types';

const req = require.context('../components', true, /\.docs\.tsx?$/);
export default flatten(
  req.keys().map(filename => {
    const matches = filename.match(/([a-zA-Z]+)\.docs\.tsx?$/);
    if (!matches) {
      return;
    }

    const componentName = matches[1];
    const docs = req(filename).default as ComponentDocs;

    const patterns = docs.patterns || [];

    return patterns.map(pattern => ({
      category: pattern.category || componentName,
      ...pattern,
    }));
  }),
);
