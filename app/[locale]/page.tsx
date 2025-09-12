import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Partners } from "@/components/partners";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { NosEspaces } from "@/components/nos-espaces";
import { getMetaData, Language } from "@/utils/meta-data";

export async function generateMetadata({
  params,
}: Readonly<{
  params: Promise<{ locale: Language }>;
}>) {
  // read locale params
  const { locale } = await params;

  return getMetaData("home", locale) || { title: " " };
}
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <NosEspaces />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}
