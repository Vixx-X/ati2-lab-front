import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function MiTable({
  rows,
  headTable,
  handleEditRow,
  handleDeleteRow,
}: any) {
  return (
    <Paper
      elevation={1}
      sx={{
        padding: '.75em',
      }}
      className="mb-40"
    >
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              {headTable.map(({ value, styles }: any, index: number) => (
                <TableCell key={index} sx={styles}>
                  {value[0].toUpperCase() + value.substring(1)}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: any, index: number) => (
              <TableRow key={index}>
                <TableCell key={'buttons'}>
                  <Box display="flex" justifyContent="center">
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="label"
                      onClick={() => {
                        handleEditRow(row.id);
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="label"
                      onClick={() => {
                        handleDeleteRow(row.id);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </TableCell>
                {headTable.map(({ key }: any, index: number) => (
                  <TableCell key={index}>{row[key]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
