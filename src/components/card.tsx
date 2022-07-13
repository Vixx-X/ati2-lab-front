import * as React from 'react';

import Link from 'next/link';

import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { experimentalStyled as styled } from '@mui/material/styles';
import { Box } from '@mui/system';

const styles = {
  height: 200,
  '& .MuiSvgIcon-root': {
    width: '100%',
    height: '100%',
  },
};

export default function MediaCard({
  name,
  icon,
  color,
  description,
  link,
}: any) {
  return (
    <Link href={link}>
      <Card sx={{ bgcolor: color, cursor: 'pointer' }}>
        <Box display="flex" justifyContent="center" sx={styles}>
          {icon}
        </Box>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textTransform: 'capitalize' }}
          >
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
