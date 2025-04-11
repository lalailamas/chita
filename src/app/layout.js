import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "my-app",
  description: "Desafío técnico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen flex items-center justify-center p-4 bg-gray-50 text-[#140D2D] ${roboto.className}`}
      >
        {children}
      </body>
    </html>
  );
}
