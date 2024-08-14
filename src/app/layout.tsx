import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Product Catalog',
  description: 'A simple product catalog with filtering and search features.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
