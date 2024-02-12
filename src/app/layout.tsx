import NavbarComponent from '@components/navbar/navbar';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import '@styles/globals.scss';
import { theme } from '@styles/theme';

export const metadata = {
  title: 'Birthdayy | Dashboard V2',
  description: 'Your place to manage your Birthdayy Configurations and Birthdays.',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no" />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="light">
          <NavbarComponent />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}

/**
 *
 *  <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        />
        <div>Logo</div>
      </AppShell.Header>

      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
 */
