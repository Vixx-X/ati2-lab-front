import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { Container } from '@mui/material';


export default function MediaCard({name, img, color, description} : any) {
  return (
    <Card>
      <Box display="flex" justifyContent="center" sx={{height: 200}}>
        <img src={img} alt={name} style={{height: "100%"}} />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{textTransform: "capitalize"}}>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}