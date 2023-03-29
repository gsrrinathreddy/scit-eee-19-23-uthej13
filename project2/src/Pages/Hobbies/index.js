

import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function Hobbies() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://www.thestatesman.com/wp-content/uploads/2020/01/Virat-K-1.jpg',
    title: 'VIRAT KHOLI',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://s3.scoopwhoop.com/anj/d/634155577.jpg',
    title: 'MS dhoni',
    
  },
  {
    img: 'https://tse2.mm.bing.net/th?id=OIP.Je_hh8eppTWEs0iIMvyXRQHaE8&pid=Api&P=0',
    title: 'like cooking',
    
  },
  {
    img: 'https://tse3.mm.bing.net/th?id=OIP.GSQGWjuH6pzBkB3R9RgtAAHaFK&pid=Api&P=0',
    title: 'playing cricket',
    
    cols: 2,
  },
  {
    img: 'https://tse4.mm.bing.net/th?id=OIP.k8GwnwOZs7niJf0sRuOmbgHaHa&pid=Api&P=0',
    title: 'music',
    
    cols: 2,
  },
  {
    img: 'https://tse1.mm.bing.net/th?id=OIP.f3KDuSwGFLRJ6PXXIsFBEAHaFs&pid=Api&P=0',
    title: 'social media',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  
];