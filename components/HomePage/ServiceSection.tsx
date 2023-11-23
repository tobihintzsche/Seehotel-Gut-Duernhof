import Image from "next/image";
import { Inter } from "next/font/google";

import image from "../images/HotelFrontView.png";
import zimmer from "../../images/Zimmer.jpg";
import styled from "styled-components";
import { ST } from "next/dist/shared/lib/utils";
import {
  GetHomePageQuery,
  GetHomePageQueryVariables,
  GetHomePageDocument,
} from "@/src/homePageQuery.generated";
import { useCustomQuery } from "@/useRequest";

const StyledBlured = styled.div`
  width: 345px;
  height: 462px;

  background: rgba(191, 151, 120, 0.19);
  filter: blur(5px);
  border-radius: 19px;

  /* image 5 */
`;

const StyledBlured2 = styled.div`
  width: 462px;
  height: 345px;

  background: rgba(9, 255, 0, 0.632);
  filter: blur(5px);
  border-radius: 19px;

  /* image 5 */
`;

export const ServiceSection = () => {
  const { data: homePageData } = useCustomQuery<
    GetHomePageQuery,
    GetHomePageQueryVariables
  >("getHomePageData", GetHomePageDocument);

  return (
    <div className="flex flex-col md:flex-row gap-10 pb-40">
      <div className="flex items-center">
        <div className="relative hidden lg:inline-block w-[490px] h-[462px] items-center">
          <div className="absolute top-0 bottom-0 right-0 left-0">
            <StyledBlured>
              <div></div>
            </StyledBlured>
          </div>
          <div className="absolute bottom-10 left-10 w-[450px] h-[300px]">
            <Image src={zimmer} alt="" className="object-cover object-center" />
          </div>
        </div>
      </div>

      <div className="bg-gray-200 h-[600px] w-full flex items-center">
        <div className=" flex flex-col gap-4 ">
          <div>
            <h1>{homePageData?.homePages[0].serviceSection?.subline}</h1>
            <h1 className="text-4xl">
              {homePageData?.homePages[0].serviceSection?.headline}
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {homePageData?.homePages[0].serviceSection?.arrangements.map(
              (arrangement) => {
                return (
                  <div key={arrangement.title}>
                    <div>{arrangement.title}</div>
                    <div>{arrangement.serviceIcon}</div>
                    <p>{arrangement.openingHours}</p>
                  </div>
                );
              }
            )}
          </div>
          <div>
            <div className="flex gap-2">
              <button className="bg-white p-2 rounded-sm text-black">
                text1
              </button>
              <button className="bg-white p-2 rounded-sm text-black">
                text1
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
