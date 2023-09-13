import { TableCell, TableRow } from "./ui/table";

const TableRow1 = ({ no, fname, lname, course, fees, date }) => {
  return (
    <TableRow className="text-left">
      <TableCell className="">{no}</TableCell>
      <TableCell>{fname}</TableCell>
      <TableCell>{lname}</TableCell>
      <TableCell>{course}</TableCell>
      <TableCell>{fees}</TableCell>
      <TableCell className="">{date}</TableCell>
    </TableRow>
  );
};

export default TableRow1;
