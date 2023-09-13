import { TableCell, TableRow } from "./ui/table";

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
              ? "bg-green-200"
              : status === "Closed"
              ? "bg-red-200"
              : "bg-gray-200"
          } rounded-md p-1 text-center px-2 text-gray-400`}
        >
          {status}
        </div>
      </TableCell>
      <TableCell className="text-center cursor-pointer hover:font-bold">⋮</TableCell>
    </TableRow>
  );
};

export default TableRow2;
