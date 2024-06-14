
import "./globals.css";
import Home from "./page";



export const metadata = {
  title: "scandan.dev",
  description: "potfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="web-container">
          {children}
        </div>
      </body>
    </html>
  );
}
