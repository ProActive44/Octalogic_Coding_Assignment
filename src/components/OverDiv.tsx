import people from "../assets/people.png";

const OverDiv = ({ number, text }) => {
  return (
    <div className="w-auto m-auto rounded-md py-4 px-2 pr-4 shadow-lg shadow-gray-500/40 bg-slate-50 cursor-pointer transition  duration-400 hover:scale-105">
      <div className="flex text-left ">
        <div>
          <img src={people} />
        </div>
        <div className="ml-2 font-bold">
          <h2>{number}</h2>
          <p className="font-normal text-sm">{text}</p>
        </div>
      </div>
      <div className="text-rose-500 transition duration-700 cursor-pointer -mr-1">
        <p className="font-medium text-right hover:font-bold">view</p>
      </div>
    </div>
  );
};

export default OverDiv;
