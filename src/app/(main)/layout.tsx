import "@/app/globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SiteFrame } from "@/components/landing/site-frame";
import { RedesignThemeProvider } from "@/components/landing/redesign/theme-context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RedesignThemeProvider>
      <SiteFrame>
        <Navbar />
        {children}
        <Footer />
      </SiteFrame>
    </RedesignThemeProvider>
  );
}
