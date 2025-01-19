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
        <div className="w-full">
          <Header></Header>
          {children}
        </div>
      </body>
    </html>
  );
}
