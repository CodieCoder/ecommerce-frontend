import { ThemeProvider } from "@/components/theme";
import { Toaster } from "@/components/ui/sonner";
import UseQueryProvider from "@/lib/useQuery/provider";
import { StoreProvider } from "@/store/redux/provider";
import "@/styles/global.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const inter = Poppins({
  weight: "300",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "App",
  description: "Best app in the world!!!!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <StoreProvider>
          <UseQueryProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <div className="App">{children}</div>
              <Toaster richColors />
            </ThemeProvider>
          </UseQueryProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
