import PagesLayout from "@/components/PagesLayout";
import Image from "next/image";

function Page({ params }) {
  return (
    <div>
      <PagesLayout title={params.slug} />
      <div className="my-[10%]">
        <div className="flex mx-[5%]">
          <div className="h-[800px] relative">
            <div className="h-[600px] w-[700px]">
              <Image
                alt=""
                src={
                  "https://demos.webicode.com/html/eco-shop-html/Single_Img_Demo/images/item-img-1-3.jpg"
                }
                layout="responsive"
                height={600}
                width={700}
              />
            </div>
            <div className="h-[200px] absolute bottom-[-10%] shadow-2xl shadow-black left-[5%] w-[200px]">
              <Image
                alt=""
                src={
                  "https://demos.webicode.com/html/eco-shop-html/Single_Img_Demo/images/item-img-1-3.jpg"
                }
                layout="responsive"
                height={200}
                width={200}
              />
            </div>
            <div className="h-[200px] absolute bottom-[-10%] shadow-2xl shadow-black left-[35.5%] w-[200px]">
              <Image
                alt=""
                src={
                  "https://demos.webicode.com/html/eco-shop-html/Single_Img_Demo/images/item-img-1-3.jpg"
                }
                layout="responsive"
                height={200}
                width={200}
              />
            </div>
            <div className="h-[200px] absolute bottom-[-10%] shadow-2xl shadow-black right-[5%] w-[200px]">
              <Image
                alt=""
                src={
                  "https://demos.webicode.com/html/eco-shop-html/Single_Img_Demo/images/item-img-1-3.jpg"
                }
                layout="responsive"
                height={200}
                width={200}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
