import "./globals.css";

export const metadata = {
  title: "Akbar Mamanazarov | Fullstack JavaScript Developer",
  description: "Fullstack JavaScript/TypeScript Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans bg-dark overflow-x-hidden max-w-[1920px] mx-auto">
        {children}
      </body>
    </html>
  );
}