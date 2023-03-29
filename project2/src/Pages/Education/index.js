import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Qualifications() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 3}}>
      <h1 className='mode'>Education</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="RGR Siddhanthi" src ="https://th.bing.com/th/id/OIP.1UVS-mvQHxo_VNC5a1Eb9QAAAA?w=118&h=128&c=7&r=0&o=5&dpr=1.5&pid=1.7"/>
        </ListItemAvatar>
        <ListItemText
          primary="SCITS"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                7.19 CGPA
              </Typography>
              {" — Bachelor of Technology, ELECTRICAL AND ELECTRONICS ENGINEERING"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sri Aadarsh" src="https://tse3.mm.bing.net/th?id=OIP.8j79AMMTQ2ufJxmSbv769gHaHa&pid=Api&P=0" />
        </ListItemAvatar>
        <ListItemText
          primary="KrishnaveniVikas Junior College"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                97% CGPA
              </Typography>
              {" — Intermediate studies with MATHEMATICS,PHYSICS & CHEMISTRY"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sai SI" src="https://tse4.mm.bing.net/th?id=OIP.gRmRsaJHuMyXeg3FmQLQKwHaGZ&pid=Api&P=0" />
        </ListItemAvatar>
        <ListItemText
          primary="Vidya Bharathi High School"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                9.7 CGPA
              </Typography>
              {' — Higher Secondory Education '}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}