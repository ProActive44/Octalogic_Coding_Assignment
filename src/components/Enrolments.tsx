import { useSelector } from "react-redux";
import TableRow0 from "./TableRow0";
import {
  Table,
  TableBody,
  //   TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const Enrolments = () => {
  const data = useSelector((store: any) => store.enrol);

  return (
    <div className="my-10 w-11/12 m-auto">
      <div className="flex justify-between p-1 text-slate-500 font-bold py-5">
        <p>LATEST ENROLMENTS</p>
        <p className="font-medium text-rose-500 transition duration-700 cursor-pointer hover:font-bold">
          View All Courses
        </p>
      </div>
      <div className="bg-white p-5 rounded">
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead className="">Enr.No</TableHead>
              <TableHead>S.Name</TableHead>
              <TableHead>C.Name</TableHead>
              <TableHead>Fees</TableHead>
              <TableHead className="">Enr.Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((ele, idx) => {
              return (
                <TableRow0
                  key={idx}
                  no={ele.EnrolNo}
                  sname={ele.sname}
                  cname={ele.cname}
                  fees={ele.fees}
                  date={ele.date}
                />
              );
            })}
            {/* <TableRow0 no={1563124} sname={'John Doe'} cname={'Percussion'} fees={'$120'} date={'12-08-223'}/>
            <TableRow0 no={1563124} sname={'John Doe'} cname={'Percussion'} fees={'$120'} date={'12-08-223'}/>
            <TableRow0 no={1563124} sname={'John Doe'} cname={'Percussion'} fees={'$120'} date={'12-08-223'}/>
            <TableRow0 no={1563124} sname={'John Doe'} cname={'Percussion'} fees={'$120'} date={'12-08-223'}/> */}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Enrolments;
