// Providers.tsx
import { FC } from 'react';
import { NextChildren } from 'src/lib/types/children';
import { ThemeProvider } from './theme';

const AppContextProvider: FC<NextChildren> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
};

export default AppContextProvider;
