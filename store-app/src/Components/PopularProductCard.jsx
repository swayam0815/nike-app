import { star } from "../assets/icons";
const PopularProductCard = ({ imgURL, name, price, rating }) => {
  return (
    <div className="flex flex-col flex-1 w-full max-sm:w-full  hover:scale-105 transition-all">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px] " />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} className=""/>
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          ({rating})
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
