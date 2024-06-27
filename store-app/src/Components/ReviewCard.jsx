import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="shadow-inner shadow-white flex justify-center items-center flex-col">
      <img
        src={imgURL}
        className="rounded-full object-cover"
        width={120}
        height={120}
      />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img src={star} width={24} height={24} className="object-contain m-0" />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
        <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{customerName}</h3>
      </div>
    </div>
  );
};

export default ReviewCard;
