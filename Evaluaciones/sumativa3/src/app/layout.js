import "./globals.css";

export const metadata = {
  title: "Listado de Inscripciones",
  description: "Visualización de inscripciones y talleres",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}