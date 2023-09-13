import { TableCell, TableRow } from './ui/table';

const TableRow0 = ({no, sname, cname, fees, date }) => {
    return (
            <TableRow className="text-left">
              <TableCell className="">{no}</TableCell>
              <TableCell>{sname}</TableCell>
              <TableCell>{cname}</TableCell>
              <TableCell>{fees}</TableCell>
              <TableCell className="">{date}</TableCell>
            </TableRow>
    );
};

export default TableRow0;