import "./globals.css";
import Header from "../components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-main">
        <Header></Header>
        <div className="w-full text-white">{children}</div>
      </body>
    </html>
  );
}
