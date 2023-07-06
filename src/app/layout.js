"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider, createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kitchen Hub",
};
const theme = createTheme({
  palette: {
    primary: orange,
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <div>
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
