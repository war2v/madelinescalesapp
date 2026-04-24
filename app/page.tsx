
import { About } from "@/components/About";
import { Donations } from "@/components/Donations";
import { Footer } from "@/components/Footer";
import { HeartForThePeople } from "@/components/HeartForThePeople";
import Hero from "@/components/Hero";
import { Legacy } from "@/components/Legacy";
import { Markee } from "@/components/Markee";
import Nav from "@/components/Nav";
import { Testamonials } from "@/components/Testamonials";
import { Volunteer } from "@/components/Volunteer";

export default function Home() {
  return (
    <div className="w-full flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Nav/>
      <div className="bg-[url('data:image/jpeg;base64,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')] bg-cover bg-center bg-black h-screen w-screen">
        <div className="absolute inset-0 bg-linear-to-t from-black to-transparent"></div>
        <Hero/>
      </div>
      <div className="w-full">
        <Markee/>
      </div>
      
      <HeartForThePeople/>
      <About/>
      <Legacy />
      <Testamonials />
      <div className="w-full flex flex-col lg:flex-row">
        <Volunteer />
        <Donations />
      </div>
      <Footer />
    </div>
  );
}
