import { Fraunces, Inter } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'Forma Studio — Brand & Digital Design Agency',
  description:
    'Forma Studio is a design agency crafting brand identity, websites, product design and digital marketing for ambitious companies.',
  keywords: [
    'design agency',
    'branding agency',
    'web design',
    'UI UX design',
    'digital marketing agency',
  ],
  openGraph: {
    title: 'Forma Studio — Brand & Digital Design Agency',
    description: 'We design brands with backbone.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        {/* Prevents a light/dark flash on page load by reading the saved theme before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var theme = localStorage.getItem('forma-theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (!theme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-paper text-ink font-body antialiased dark:bg-ink dark:text-paper transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
