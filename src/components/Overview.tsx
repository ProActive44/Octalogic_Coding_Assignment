import OverDiv from "./OverDiv";

const Overview = () => {
  return (
    <div className="mx-5">
      <div className="font-bold text-3xl p-5 text-left">
        <h1 className="text-slate-500">Overview</h1>
      </div>
      <div className="flex flex-wrap mx-3 gap-4">
        <OverDiv number={164} text="total number of students" />
        <OverDiv number={12} text="total number of students" />
        <OverDiv number={'$2000'} text="total number of students" />
        <OverDiv number={'Guitar'} text="total number of students" />
        <OverDiv number={'Flute'} text="total number of students" />
      </div>
    </div>
  );
};

export default Overview;
