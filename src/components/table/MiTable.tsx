import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function MiTable({ rows, headTable }: any) {
  return (
    <Paper
      elevation={1}
      sx={{
        padding: '.75em',
      }}
    >
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {/* <TableCell>Dessert (100g serving)</TableCell> */}
              {
                headTable.map(({ value, styles }: any, index: number) => (
                  <TableCell key={index} sx={styles}>
                    {
                      value[0].toUpperCase() + value.substring(1)
                    }
                  </TableCell>
                ))
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {
              rows.map((row: any, index: number) => (
                <TableRow
                  key={index}
                >
                  {
                    headTable.map(({ key }: any, index: number) => (
                      <TableCell key={index} >
                        {row[key]}
                      </TableCell>
                    ))
                  }
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}