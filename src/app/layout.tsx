import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import '@styles/globals.scss';
import { theme } from '@styles/theme';

export const metadata = {
  title: 'Birthdayy | Dashboard V2',
  description: 'Your place to manage your Birthdayy Configurations and Birthdays.',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html
      lang="en"
      // className={`${hindVadodaraFont.variable} ${rubikFont.variable} ${ralewayFont.variable}`}
    >
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no" />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
