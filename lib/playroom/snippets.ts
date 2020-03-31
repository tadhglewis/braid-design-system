import { flatten } from 'lodash';
import reactElementToJsxString from 'react-element-to-jsx-string';
import { Snippets } from 'sku/playroom';

import { ComponentDocs } from '../../site/src/types';

const req = require.context('../components', true, /\.docs\.tsx?$/);
export default flatten(
  req.keys().map((filename) => {
    const matches = filename.match(/([a-zA-Z]+)\.docs\.tsx?$/);
    if (!matches) {
      return [];
    }

    const { snippets = [] } = req(filename).default as ComponentDocs;
    return snippets.map((snippet) => ({
      ...snippet,
      group: snippet.group || matches[1],
    }));
  }),
).map<Snippets[number]>((snippet) => ({
  ...snippet,
  group: snippet.group,
  code: reactElementToJsxString(snippet.code, {
    sortProps: false,
    useBooleanShorthandSyntax: false,
  }),
}));
