export function parseSearching(searchText, filter) {
  if (filter === 'series') {
    const parsedText = searchText.match(/#[^\s]+/g);
  } else if (filter === 'tags') {
    const parsedText = searchText.match(/#[^\s]+/g);
    const queryString = `?tag=${parsedText}&page=1`;
  } else {
  }
  const parsedText = searchText.trim().filter(text => text.match(/#/));

  const headingsInfo = headings.map(heading => ({
    id: heading.id,
    text: heading.textContent,
    level: parseInt(heading.tagName.replace('H', ''), 10),
  }));

  const minLevel = Math.min(
    ...Array.from(headingsInfo.map(info => info.level)),
  );

  headingsInfo.forEach(info => {
    info.level -= minLevel;
  });

  return headingsInfo;
}
