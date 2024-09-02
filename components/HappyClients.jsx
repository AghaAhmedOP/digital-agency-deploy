import { CLIENTS } from "@/constants";
import SectionHeader from "./SectionHeader";
import Link from "next/link";

const HappyClients = () => {
  return (
    <div className="pb-[250px] pt-20 w-full">
      <div className="mx-auto mb-12 max-w-[570px]">
        <SectionHeader
          heading={"Some of Our Happy Clients"}
          paragraph={
            "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          }
          classname={"items-center text-center"}
          hclassname={"text-white"}
          pclassname={"!text-lg !font-medium"}
        />
      </div>

      <div className="flex flex-wrap items-center justify-center">
        {CLIENTS.map((client) => (
          <Link
            key={client.img}
            href={client.link}
            className="relative mx-3 flex max-w-[120px] items-center justify-center py-[15px] opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0 sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]"
          >
            <img
              src={client.img}
              alt="client image logo"
              className="h-10 text-transparent"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HappyClients;
