import { useSelector } from "react-redux";
import TableRow1 from "./TableRow1";
import {
  Table,
  TableBody,
  // TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const Students = () => {
  const data = useSelector((store: any) => store.stud);

  return (
    <div className="my-10 w-11/12 m-auto">
      <div className="flex justify-between p-1 text-slate-500 font-bold py-5">
        <p>BEST STUDENTS</p>
        <p className="font-medium text-rose-500 transition duration-700 cursor-pointer hover:font-bold">
          View All Students
        </p>
      </div>
      <div className="bg-white p-5 rounded">
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead className="">Reg.No</TableHead>
              <TableHead>F.Name</TableHead>
              <TableHead>L.Name</TableHead>
              <TableHead>Course #</TableHead>
              <TableHead>Total Fees</TableHead>
              <TableHead className="">Reg. Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((ele, idx) => {
              return (
                <TableRow1
                  key={idx}
                  no={ele.Regno}
                  fname={ele.fname}
                  lname={ele.lname}
                  course={ele.course}
                  fees={ele.Totalfees}
                  date={ele.Regdata}
                />
              );
            })}
            {/* <TableRow1 no={1563124} fname={'John Doe'} lname={'Percussion'} course={3} fees={'$120'} date={'12-08-223'}/>
              <TableRow1 no={1563124} fname={'John Doe'} lname={'Percussion'} course={3} fees={'$120'} date={'12-08-223'}/>
              <TableRow1 no={1563124} fname={'John Doe'} lname={'Percussion'} course={3} fees={'$120'} date={'12-08-223'}/>
              <TableRow1 no={1563124} fname={'John Doe'} lname={'Percussion'} course={3} fees={'$120'} date={'12-08-223'}/> */}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Students;
