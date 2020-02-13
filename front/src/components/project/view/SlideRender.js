import React from 'react';

import { Deck, MarkdownSlides } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import palette from 'lib/styles/palette';

const theme = createTheme(
  {
    primary: `${palette.gray2}`,
    secondary: `${palette.gray7}`,
    tertiary: `${palette.gray8}`,
    quaternary: `${palette.gray9}`,
  },
  {
    primary: 'Helvetica',
    secondary: {
      name: 'Droid Serif',
      googleFont: true,
      styles: ['400', '700i'],
    },
  },
);

export default function RemarkRender({ markdown }) {
  return (
    <>
      <Deck
        controls={false}
        contentHeight="100vh"
        contentWidth="80vw"
        progress="none"
        theme={theme}
      >
        {MarkdownSlides(markdown)}
      </Deck>
    </>
  );
}
