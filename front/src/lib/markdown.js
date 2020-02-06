import removeMd from 'remove-markdown';

export function convertToPlainText(markdown) {
  const replaced = markdown
    .replace(/  +/g, '')
    .replace(/--/g, '')
    .replace(/\|/g, '')
    .replace(/\n/g, ' ')
    .replace(/```(.*)```/g, '')
    .replace(/[<>]/g, '');

  return (
    removeMd(replaced.slice(0, 500))
      .slice(0, 200)
      .replace(/#/g, '') + (replaced.length > 200 ? '...' : '')
  );
}
