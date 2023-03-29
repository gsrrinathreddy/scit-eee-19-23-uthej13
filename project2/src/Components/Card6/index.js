import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Card6() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image="https://tse3.mm.bing.net/th?id=OIP.WAgDca4IHlkgjbhDEAptFAHaEK&pid=Api&P=0"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          HTML
          </Typography>
          <Typography variant="body2" color="text.secondary">
          
          HTML is the language in which most websites are written. HTML is used to create pages and make them functional.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );

}