export function parseSearching({ searchText, filter }) {
  let qs = null;
  if (filter === 'series') {
    const parsedText = searchText.trim();
    qs = `q=${parsedText}&page=1`;
  } else if (filter === 'tags') {
    const regExp = /^#?[^/s]{1,}/i;
    const parsedText = regExp.exec(searchText);
    qs = `tag=${parsedText}&page=1`;
  } else {
    const parsedText = searchText.trim();
    qs = `q=${parsedText}&page=1`;
  }
  return qs;
}
