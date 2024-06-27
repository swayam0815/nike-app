const Shoecard = ({ imgURL, change, bigShoeImage }) => {
  const handleClick = () => {
    if (bigShoeImage !== imgURL.bigShoe) {
      change(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImage === imgURL.bigShoe ? "border-coral-red scale-105" : "border-transparent"
      } cursor-pointer max-sm:flex-1 transition-all hover:scale-105 active:scale-95`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="shoe icon"
          width={127}
          height={103.34}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Shoecard;
