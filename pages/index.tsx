import Image from "next/image";
import { Inter } from "next/font/google";

import image from "../images/HotelFrontView.png";
import { Arrangements } from "@/components/HomePage/Arrangements";
import { ServiceSection } from "@/components/HomePage/ServiceSection";
import { ImpressionSection } from "@/components/HomePage/ImpressionSection";
import { MatterportSection } from "@/components/HomePage/MatterportSection";
import { NewsSection } from "@/components/HomePage/NewsSection";
import { useCustomQuery } from "@/useRequest";
import {
  GetHomePageDocument,
  GetHomePageQuery,
  GetHomePageQueryVariables,
} from "@/src/homePageQuery.generated";
import {
  GetHomePageByIdDocument,
  GetHomePageByIdQuery,
  GetHomePageByIdQueryVariables,
} from "@/src/getHomePageById.generated";
import { DatePicker } from "@/components/HomePage/DatePickerTest";
import styled from "styled-components";
import request from "graphql-request";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { Searchbar } from "@/components/Searchbar";

const inter = Inter({ subsets: ["latin"] });

const TranslatedElement = styled.div`
  transform: translateY(-50%);

  .tobi {
    background: red;
  }
`;

export default function Home({
  homePageData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { data: homePageByIdQuery, error } = useCustomQuery<
    GetHomePageByIdQuery,
    GetHomePageByIdQueryVariables
  >("getHomePageDataById", GetHomePageByIdDocument, {
    id: "cloyhlgge0wmx0bw1y6h9cm5x",
  });

  console.log("homePages", homePageData?.homePages);

  // console.log("homepageById", homePageByIdQuery?.homePage, error);

  return (
    <div className="mx-auto">
      <div className="md:h-[540px] xl:h-[600px]">
        <Image
          src={image}
          alt="test"
          sizes="(min-width: 1440px) 1440px, 100vw"
          loading="eager"
          quality={80}
          className="object-cover object-center w-full h-full"
        />
      </div>

      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full px-4 lg:px-10 md:px-8 sm:px-6">
          <TranslatedElement>
            <div className="flex justify-center">
              <Searchbar />
            </div>
          </TranslatedElement>
          <div className="h-40 flex flex-row mt-20 gap-4 bg-gray-300">
            <div className="ml-6">
              <TranslatedElement>
                <h1 className="text-4xl tobi">Seehotel</h1>
              </TranslatedElement>
              <TranslatedElement>
                <h1 className="text-4xl whitespace-nowrap ">Gut Dürnhof</h1>
              </TranslatedElement>
            </div>
            <div className=" h-20 w-full mt-6 mr-10">
              <div className=" h-20 bg-red-700"></div>
            </div>
          </div>
          <Arrangements />
          <div className="mx-auto w-40 h-20 bg-indigo-600"></div>
          <ServiceSection />
          <ImpressionSection />
          <MatterportSection />
          <NewsSection />
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<{
  homePageData: GetHomePageQuery;
}> = async () => {
  const res = await request<GetHomePageQuery>(
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cloueut9v04gn01t789ft3289/master",
    GetHomePageDocument
  );

  return {
    props: {
      homePageData: res,
    },
  };
};

// /* Group 28 */

// position: absolute;
// width: 431px;
// height: 462px;
// left: 263px;
// top: 1609px;

// /* Rectangle 27 */

// position: absolute;
// width: 380px;
// height: 266px;
// left: 314px;
// top: 1736px;

// background: url(image.png);
// border-radius: 4px;
