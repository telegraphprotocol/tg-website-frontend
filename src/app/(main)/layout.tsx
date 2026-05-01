import "@/app/globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SiteFrame } from "@/components/landing/site-frame";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SiteFrame>
      <Navbar />
      {children}
      <Footer />
    </SiteFrame>
  );
}
