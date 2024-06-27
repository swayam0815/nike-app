const Servicecard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex flex-col group flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-gray-200 shadow-inner px-10 py-16 hover:scale-105 transition-all">
      <div className="w-11 h-11 flex justify-center items-center group-hover:bg-blue-500 transition-all bg-coral-red rounded-full">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="font-bold mt-5 font-palanquin text-3xl leading-normal">
        {label}
      </h3>
      <p className="text-slate-gray font-montserrat mt-3 break-words text-lg leading-normal">
        {subtext}
      </p>
    </div>
  );
};

export default Servicecard;
