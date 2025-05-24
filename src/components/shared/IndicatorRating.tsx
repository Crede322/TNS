import Image from "next/image";

export default function IndicatorRating() {
  const arrayOfFakeRating = [0, 1, 2, 3, 4];

  return (
    <div className="flex gap-1 items-center">
      {arrayOfFakeRating.map((item, index) => (
        <Image
          key={index}
          src="/icons/star.svg"
          width={14}
          height={14}
          alt="rating"
        />
      ))}
      <p className="font-bold ml-[8px]">10</p>
    </div>
  );
}
