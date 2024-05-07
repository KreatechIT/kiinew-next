import PagesLayout from "@/components/PagesLayout";
import ShopProducts from "@/sections/ShopProducts";
import Image from "next/image";

function Page() {
  return (
    <div>
      <PagesLayout title={"Our Products"} />
      <ShopProducts />
    </div>
  );
}

export default Page;
