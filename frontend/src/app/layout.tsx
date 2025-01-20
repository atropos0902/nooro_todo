import "./globals.css";
import Header from "../components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        <div className="w-full">{children}</div>
      </body>
    </html>
  );
}
