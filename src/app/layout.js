import './globals.css';

export const metadata = {
  title: 'Pokedéx',
  description: 'Search for any Pokémon that exists on the planet',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
