import { Button } from "@/components/ui/button";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons"
import {
  Table,
  TableBody,
  //   TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import TableRow2 from "@/components/TableRow2";

const Courses = () => {
  return (
    <div className="my-10 w-11/12 m-auto">
      <div className="font-bold text-3xl mb-5 text-left">
        <h1 className="text-slate-500">Courses</h1>
      </div>
      <div className="flex justify-between p-1 text-slate-500 font-bold py-5">
        <p>COURSE LIST</p>
        <p className="font-medium text-rose-500 transition duration-700 cursor-pointer hover:font-bold">
          Search
        </p>
      </div>
      <div className="bg-white p-5 rounded">
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead className="">Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Instuctor</TableHead>
              <TableHead>Instrument</TableHead>
              <TableHead>Day of Week</TableHead>
              <TableHead># of Students</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }, (_, index) => index + 1).map(
              (ele, idx) => {
                return (
                  <TableRow2
                    key={idx}
                    name={"classical Guitar"}
                    description={"Guitar classes for me"}
                    instructor={"Ms.Jane Doe"}
                    instrument={"Guitar"}
                    daysofweek={"Wednesday"}
                    students={26}
                    price={"$60"}
                    status={"Active"}
                  />
                );
              }
            )}
          </TableBody>
        </Table>
      </div>
      <div className="text-right mt-20 mr-5">
        <Button className="p-7 bg-pink-300 text-black text-lg hover:bg-pink-600 hover:text-white rounded-md">
            <p className="text-2xl pr-5">+</p>  Add Course
        </Button>
      </div>
    </div>
  );
};

export default Courses;
