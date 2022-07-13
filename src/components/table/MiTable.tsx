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

export default function MiTable({ rows }: any) {
  const headTable = Object.keys(rows[0]);

  const handleEditRow = (id:any) => {
    console.log("Quiero editar:", id);
  }

  const handleDeleteRow = (id:any) => {
    console.log("Quiero borrar:", id);
  }

  console.log(rows)
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
              <TableCell sx={{minWidth: 120, textAling:"center"}} key={'buttons'}>Acciones</TableCell>
              {headTable.map((item, index) => (
                <TableCell key={index}>
                  {item[0].toUpperCase() + item.substring(1)}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: any, index: number) => (
              <TableRow key={index}>
                <TableCell key={'buttons'}>
                  <Box justifyContent="center">
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="label"
                      onClick={()=>{handleEditRow(row.id)}}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="label"
                      onClick={()=>{handleDeleteRow(row.id)}}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </TableCell>
                {headTable.map((prop, index) => (
                  <TableCell key={index}>{row[prop]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
