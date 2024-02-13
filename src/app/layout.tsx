import AppContextProvider from '@/provider/provider';
import { cn } from '@/utils/shadcn';
import '@styles/globals.css';
import { hindVadodaraFont, rubikFont } from '@styles/theme/fonts';
import NavbarComponent from 'src/components/navbar/navbar';

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
          'min-h-screen bg-background font-body font-heading antialiased',
          hindVadodaraFont.variable,
          rubikFont.variable,
        )}
      >
        <AppContextProvider>
          <NavbarComponent />
          {children}
        </AppContextProvider>
      </body>
    </html>
  );
}
