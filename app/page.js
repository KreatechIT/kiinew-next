import HomeSwiper from "@/components/HomeSwiper";
import NewArrival from "@/sections/NewArrival";
import PopularProducts from "@/sections/PopularProducts";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <section className="">
        <HomeSwiper />
      </section>
      <section className="">
        <NewArrival />
      </section>
      <section className="">
        <PopularProducts />
      </section>
    </main>
  );
}
