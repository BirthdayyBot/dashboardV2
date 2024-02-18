import AppContextProvider from '@/provider/provider';
import Container from '@/ui/container';
import { cn } from '@/utils/shadcn';
import NavbarComponent from '@components/header/header';
import '@styles/globals.css';
import { hindVadodaraFont, rubikFont } from '@styles/theme/fonts';

export const metadata = {
  title: 'Birthdayy | Dashboard V2',
  description: 'Your place to manage your Birthdayy Configurations and Birthdays.',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no" />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-rubik font-hind-vadodara font-sans antialiased',
          hindVadodaraFont.variable,
          rubikFont.variable,
        )}
      >
        <AppContextProvider>
          <NavbarComponent />
          {/* <div className="container">{children}</div> */}
          <Container>{children}</Container>
        </AppContextProvider>
      </body>
    </html>
  );
}
