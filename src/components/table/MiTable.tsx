import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function MiTable({rows} : any) {
  console.log(rows)
  const headTable = Object.keys(rows[0]); 
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
                  headTable.map((item,index)=>(
                    <TableCell key={index}>
                      {
                        item[0].toUpperCase() + item.substring(1)
                      }
                    </TableCell>
                  ))
                }
              </TableRow>
            </TableHead>
            <TableBody>
              {
                rows.map((row:any,index:number)=>(
                  <TableRow
                    key={index}
                  >
                    {
                      headTable.map((prop,index)=>(
                        <TableCell key={index} >
                          {row[prop]}
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