import type { Metadata } from "next";
import "./style/globals.css";
import ThemeProvider from "./interface/components/hooks/useTheme";
import { DefaultLayout } from "./interface/components/DefaultLayout/DefaultLayout";

export const metadata: Metadata = {
  title: "Viva Saude",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" id="container">
        <ThemeProvider>{children}</ThemeProvider>
      </html>
    </>
  );
}
