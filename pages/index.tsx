import Image from "next/image";
import { Inter } from "next/font/google";

import image from "../images/HotelFrontView.png";
import zimmer from "../images/Zimmer.jpg";
import styled from "styled-components";
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

const inter = Inter({ subsets: ["latin"] });

const TranslatedElement = styled.div`
  transform: translateY(-50%);
`;

export default function Home() {
  const { data: homePageData } = useCustomQuery<
    GetHomePageQuery,
    GetHomePageQueryVariables
  >({
    graphQlDocument: GetHomePageDocument,
    variables: {},
    name: "getHomePageData",
  });

  const { data: homePageByIdQuery, error } = useCustomQuery<
    GetHomePageByIdQuery,
    GetHomePageByIdQueryVariables
  >({
    graphQlDocument: GetHomePageByIdDocument,
    variables: { id: "cloyhlgge0wmx0bw1y6h9cm5x" },
    name: "getHomePageDataById",
  });

  console.log("homePages", homePageData?.homePages);

  console.log("homepageById", homePageByIdQuery?.homePage, error);

  return (
    <div className="mx-auto">
      <div className="md:h-[540px] xl:h-[800px]">
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
            <div className="z-20 h-20 w-80 mx-auto bg-green-700 p-small elevation-2" />
          </TranslatedElement>
          <div className="h-40 flex flex-row gap-4 bg-gray-300">
            <div className="ml-6">
              <TranslatedElement>
                <h1 className="text-4xl">Seehotel</h1>
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

// const Arrangement = () => {
//   return (
//     <div>
//       <div className="relative" style={{ height: "372px", width: "235px" }}>
//         <Image
//           src={zimmer}
//           fill
//           className="absolute object-cover object-center"
//           alt={""}
//         />
//         <div className=" text-black text-4xl ">
//           <RotatedText>ZIMMER LAng</RotatedText>
//         </div>
//       </div>
//     </div>
//   );
// };

/* Zimmer */

// const Image = styled.img`
//   width: 200px; /* Adjust the width as needed */
//   height: auto; /* Maintain the aspect ratio */
// `;

const RotatedText = styled.div`
  position: absolute;
  top: 80%;
  left: 100%;
  transform: translate(-50%, 0%) rotate(270deg);
  transform-origin: 0 0;
`;

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
