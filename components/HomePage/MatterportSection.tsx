import Image from "next/image";
import image from "../../images/HotelFrontView.png";

export const MatterportSection = () => {
  return (
    <div className="flex my-10">
      <div className="flex-2">
        <Image
          src={image}
          alt="test"
          sizes="(min-width: 1440px) 1440px, 100vw"
          loading="eager"
          quality={80}
          className="object-cover  object-center w-full h-full"
        />
      </div>
      <div
        style={{
          backgroundColor: "#065B49",
        }}
        className="flex-2"
      >
        <div className="text-white flex flex-col gap-2">
          <h3>Vorab den Dürnhof erleben </h3>

          <h2>360-Grad Blick auf unser Hotel</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu
          </p>
          <div className="flex gap-3">
            <div className="bg-gray-400 w-20 h-20"></div>
            <div className="bg-gray-400 w-20 h-20"></div>
            <div className="bg-gray-400 w-20 h-20"></div>
          </div>
          <button className="bg-white p-2 rounded-sm text-black w-min">
            text1
          </button>
        </div>
      </div>
    </div>
  );
};
