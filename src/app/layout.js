import "./globals.css";
import Header from "@/components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
