import { createTheme, colorsTuple } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'mainColor',
  defaultRadius: 'xl',
    colors: {
      mainColor: colorsTuple('var(--mantine-color-lime-5)'),
      
    },
});
