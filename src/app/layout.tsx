import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import ReduxProvider from "../redux/ReduxProvider";

const nunito = Nunito({ weight: "500", subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Demo",
  description: "",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ReduxProvider>
          {/* <MainComponent> */}
            {children}
          {/* </MainComponent> */}
        </ReduxProvider>
      </body>
    </html>
  );
}
