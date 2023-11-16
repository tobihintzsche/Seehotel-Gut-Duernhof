import styled from "styled-components";

export const ImpressionSection = () => {
  return (
    <div className="bg-slate-400 mt-20">
      <div className="mx-auto text-center text-4xl">
        <TranslatedElement>Impressions</TranslatedElement>
      </div>
      <div className="mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-orange-700 w-40 h-20"></div>
          <div className="bg-orange-700 w-40 h-20"></div>
          <div className="bg-orange-700 w-40 h-20"></div>
          <div className="bg-orange-700 w-40 h-20"></div>
          <div className="bg-orange-700 w-40 h-20"></div>
          <div className="bg-orange-700 w-40 h-20"></div>
          <div className="bg-orange-700 w-40 h-20"></div>
          <div className="bg-orange-700 w-40 h-20"></div>
        </div>
      </div>
    </div>
  );
};

const TranslatedElement = styled.div`
  transform: translateY(-50%);
`;
