import Image, { StaticImageData } from "next/image";
import { Inter } from "next/font/google";

import image from "../images/HotelFrontView.png";
import zimmer from "../../images/Zimmer.jpg";
import styled from "styled-components";
import { ST } from "next/dist/shared/lib/utils";

export const Arrangements = () => {
  const firstHighlightClassName = "ml-4";
  const lastHighlightClassName = "mr-4";

  return (
    <div className="flex gap-4 py-40">
      <div className="flex gap-2 overflow-scroll md:overflow-hidden whitespace-nowrap -mx-4 pb-2">
        {ArrangementsArray.map((arrangement, index) => {
          let highlightClassName;
          if (index === ArrangementsArray.length - 1)
            highlightClassName = lastHighlightClassName;
          if (index === 0) highlightClassName = firstHighlightClassName;
          return (
            <div className={highlightClassName} key={index}>
              <Arrangement imageSrc={zimmer} text={arrangement.text} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Arrangement = ({ imageSrc, text }: ArrangementProps) => {
  return (
    <div className="min-w-[200px] relative md:min-w-[150px]">
      <Image
        src={imageSrc}
        style={{ aspectRatio: 9 / 16 }}
        alt="Your Image"
        className="object-cover"
      />
      <div
        className="absolute right-0 bottom-0 text-4xl"
        style={{ writingMode: "vertical-rl", translate: "180deg" }}
      >
        <h1 className="text-white"> {text.toUpperCase()}</h1>
      </div>
    </div>
  );
};

const Container = styled.div`
  position: relative;
  display: inline-block;
`;

type ArrangementProps = {
  imageSrc: StaticImageData;
  text: string;
};

const ArrangementsArray = [
  {
    imageSrc: "/../../images/Zimmer.jpg",
    text: "Zimmer",
  },
  {
    imageSrc: "../../images/Zimmer.jpg",
    text: "Zimmer2",
  },
  {
    imageSrc: "../../images/Zimmer.jpg",
    text: "Zimmer3",
  },
  {
    imageSrc: "../../images/Zimmer.jpg",
    text: "Zimmer4",
  },
];
