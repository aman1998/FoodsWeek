import React, { FC, memo } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { TableContainer } from "@mui/material";

import DragDrop from "../../../../components/DragDrop";

import { ISingleDay } from "../../store/types";
import { singleDayRowsPerPage } from "../../constants";

import { IDayTableProps } from "./types";

const DayTable: FC<IDayTableProps> = ({ stockReports, handleNextClick, handlePrevClick, page, handleNewList }) => {
  if (!stockReports?.length) return <></>;

  const isPrevDisabled = page === 0;
  const isNextDisabled = page === Math.floor(stockReports.length / singleDayRowsPerPage);

  return (
    <TableContainer>
      <Button onClick={handlePrevClick} disabled={isPrevDisabled}>
        Prev
      </Button>
      <Button onClick={handleNextClick} disabled={isNextDisabled}>
        Next
      </Button>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <div>
            <TableRow>
              <TableCell style={{ width: 70 }}>Num</TableCell>
              <TableCell style={{ width: 120 }}>Date</TableCell>
              <TableCell style={{ width: 100 }}>Closed</TableCell>
              <TableCell style={{ width: 100 }}>Opened</TableCell>
              <TableCell style={{ width: 100 }}>Lowest</TableCell>
              <TableCell style={{ width: 100 }}>Highest</TableCell>
            </TableRow>{" "}
          </div>
        </TableHead>
        <TableBody>
          <DragDrop<ISingleDay>
            data={stockReports}
            handleNewList={handleNewList}
            renderItem={item => (
              <TableRow key={item.priceDate} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell style={{ width: 70 }}>{item.number}</TableCell>
                <TableCell style={{ width: 120 }}>{item.priceDate}</TableCell>
                <TableCell style={{ width: 100 }}>{item.uClose}</TableCell>
                <TableCell style={{ width: 100 }}>{item.uOpen}</TableCell>
                <TableCell style={{ width: 100 }}>{item.uLow}</TableCell>
                <TableCell style={{ width: 100 }}>{item.uHigh}</TableCell>
              </TableRow>
            )}
          />
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default memo(DayTable);
