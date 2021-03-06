import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(1),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '45%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        
      </AppBar>
      <main>
        {/* Hero unit */}
        
        <Container className={classes.cardGrid} maxWidth="xl">
          {/* End hero unit */}
          <Grid container spacing={2}>
            {cards.map((card) => (
              <Grid item key={card} xs={2} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://i.imgur.com/ZSka1Q5.jpg"
                    title="Image title"
                  />
                  
                  
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="">
                      Favorite Activity 
                    </Typography>
                    <Typography>
                      Spending time with my Daughter. 
                    </Typography>
                  </CardContent>
                 
                </Card>

                
                
              </Grid>
              
            ))}
          </Grid>

          <Grid container spacing={2}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://i.imgur.com/nyljaMX.png"
                    title="Image title"
                  />
                  
                  
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="">
                      Favorite Tech Activity
                    </Typography>
                    <Typography>
                      Breaking code and improving it. 
                    </Typography>
                  {/* <blockquote class="imgur-embed-pub" lang="en" data-id="pWx10ZX"  ><a href="//imgur.com/pWx10ZX">Beautiful Park</a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script> */}
                  </CardContent>
                 
                </Card>

                
                
              </Grid>
              
            ))}
          </Grid>
        </Container>
        
      </main>
      <Button >Test Button</Button>

      

      
    </React.Fragment>
  );
}
