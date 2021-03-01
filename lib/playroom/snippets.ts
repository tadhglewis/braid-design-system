import { flatten } from 'lodash';
import { BraidSnippet } from '../components/private/Snippets';
import { searchPage } from './searchPageSnippet';

const req = require.context('../components', true, /\.snippets\.tsx?$/);
export default flatten(
  req.keys().map((filename) => {
    const matches = filename.match(/([a-zA-Z]+)\.snippets\.tsx?$/);
    if (!matches) {
      return [];
    }

    const snippets = req(filename).snippets as BraidSnippet[];

    return [searchPage, ...snippets].map((snippet) => ({
      ...snippet,
      group: snippet.group || matches[1],
      code: snippet.code.code,
    }));
  }),
);
