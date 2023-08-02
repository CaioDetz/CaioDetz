import "./globals.css";
import Header from "@/components/Header";
import Chat from "@/components/Chat";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head />
      <body>
        <Header />
        <Chat>
          {children}
        </Chat>
      </body>
    </html>
  );
}
