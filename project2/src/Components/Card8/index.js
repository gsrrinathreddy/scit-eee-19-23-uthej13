import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Card8() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://wallpaperaccess.com/full/1555163.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          JavaScript
          </Typography>
          <Typography variant="body2" color="text.secondary">
          JavaScript is the world's most popular programming language.JavaScript is the programming language of the Web.JavaScript is easy to learn.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );

}