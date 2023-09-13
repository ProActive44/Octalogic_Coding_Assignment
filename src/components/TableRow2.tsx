import { TableCell, TableRow } from "./ui/table";

const TableRow2 = ({ name, description, instructor, instrument, daysofweek, students, price, status }) => {
  return (
    <TableRow className="text-left">
      <TableCell className="">{name}</TableCell>
      <TableCell>{description}</TableCell>
      <TableCell>{instructor}</TableCell>
      <TableCell>{instrument}</TableCell>
      <TableCell>{daysofweek}</TableCell>
      <TableCell>{students}</TableCell>
      <TableCell>{price}</TableCell>
      <TableCell>{status}</TableCell>
      <TableCell className="text-center">:</TableCell>
    </TableRow>
  );
};

export default TableRow2;
