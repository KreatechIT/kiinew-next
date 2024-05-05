import HomeSwiper from "@/components/HomeSwiper";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full flex ">
      <section className="w-full overflow-x-hidden">
        <HomeSwiper />
      </section>
    </main>
  );
}
