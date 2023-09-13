import { TableCell, TableRow } from "./ui/table";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const TableRow2 = ({
  name,
  description,
  instructor,
  instrument,
  daysofweek,
  students,
  price,
  status,
}) => {
  return (
    <TableRow className="text-left">
      <TableCell className="">{name}</TableCell>
      <TableCell className="">{description}</TableCell>
      <TableCell>{instructor}</TableCell>
      <TableCell>{instrument}</TableCell>
      <TableCell>{daysofweek}</TableCell>
      <TableCell>{students}</TableCell>
      <TableCell>{price}</TableCell>
      <TableCell>
        <div
          className={`${
            status === "Active"
              ? "bg-green-200 hover:bg-green-400"
              : status === "Closed"
              ? "bg-red-200 hover:bg-red-400"
              : "bg-gray-200 hover:bg-gray-400"
          } rounded-md p-1 text-center px-2 text-gray-400 hover:text-gray-800 cursor-pointer`}
        >
          {status}
        </div>
      </TableCell>
      <TableCell className="text-center font-bold">
        <Popover>
          <PopoverTrigger className="">
            <div className="cursor-pointer hover:text-base">
              ⋮
            </div>
          </PopoverTrigger>
          {status === "Active" ? (
            <PopoverContent className="w-full">
              <div className="hover:font-semibold cursor-pointer">
                Edit Course
              </div>
              <br />
              <div className="hover:font-semibold cursor-pointer">
                Close Course
              </div>
              <br />
              <div className="hover:font-semibold cursor-pointer">
                Archive Course
              </div>
            </PopoverContent>
          ) : status === "Closed" ? <></> : (
            <PopoverContent className="w-full ">
              <div className="hover:font-semibold cursor-pointer">
                Unarchive Course
              </div>
            </PopoverContent>
          )}
        </Popover>
      </TableCell>
    </TableRow>
  );
};

export default TableRow2;
