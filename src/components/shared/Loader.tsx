import loader from "@/assets/_global_img/loader.svg";

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <img src={loader} alt="loader" className="w-6 h-6" />
    </div>
  );
};

export default Loader;
