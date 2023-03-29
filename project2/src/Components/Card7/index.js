import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Card7() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://tse1.mm.bing.net/th?id=OIP.F6kA2XMiv_oSQ3I2UcWc-QHaEP&pid=Api&P=0"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          CASCADING STYLE SHEETS
          </Typography>
          <Typography variant="body2" color="text.secondary">
          CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );

}