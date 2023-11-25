import * as React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { useState } from "react";
import { Link } from "react-router-dom";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import AudioPlayer from "./Songplayer";
import axios from "axios";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Tablemusic(props) {
  const rows = props.rows;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [song, setSong] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleClickRow = (rowId) => {
    setSelectedRowId(rowId);
    // 构建访问歌曲 API 的 URL，这里假设歌曲 API 的路径为 /song/:id
    const songApiUrl = `http://localhost:3000/song/url/v1?id=${rowId}&level=exhigh`;
    axios.get(songApiUrl).then((re) => {
      console.log(re.data);
      const songurl = re.data.data.map((item) => item.url);
      if (songurl) {
        setSong(songurl);
      }
    });
  };
  console.log(song);

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{}} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>歌曲</StyledTableCell>
              <StyledTableCell align="right">专辑</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(startIndex, endIndex).map((row) => (
              <StyledTableRow
                key={row.name}
                onClick={() => handleClickRow(row.id)}
              >
                <StyledTableCell
                  component="th"
                  scope="row"
                  style={{
                    color: row.id === selectedRowId ? "#1fcea8" : "inherit",
                    display: "flex",
                  }}
                >
                  {row.id === selectedRowId && (
                    <PlayCircleOutlineIcon
                      style={{ marginTop: "-2px", marginRight: "5px" }}
                    />
                  )}
                  {row.name}
                </StyledTableCell>

                <StyledTableCell align="right"> {row.al.name}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={rows.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
      <AudioPlayer songUrl={song} />
    </>
  );
}
