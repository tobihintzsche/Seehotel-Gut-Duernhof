import styled from "styled-components";
import request from "graphql-request";
import { useQuery } from "@tanstack/react-query";

export const NewsSection = () => {
  return (
    <div className="bg-slate-400 mt-20">
      <div className="mx-auto text-center text-4xl">
        <TranslatedElement>Was gibts neues im Dürnhof</TranslatedElement>
      </div>
      <div className="mx-auto w-min">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="bg-stone-600 w-40 h-20"></div>
          <div className="bg-stone-600 w-40 h-20"></div>
          <div className="bg-stone-600 w-40 h-20"></div>
        </div>
      </div>
    </div>
  );
};

const TranslatedElement = styled.div`
  transform: translateY(-50%);
`;
