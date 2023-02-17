// import libraries from material-ui
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
// import react-router-dom
import { Link } from 'react-router-dom';
import '../../assets/css/basic.css';

const GrainsBakery = () => {
        return (
                <>
                        <div>
                                <h1>קבוצת  עמילן/דגנים ומוצרי מאפה</h1>
                        </div>

                        <div>
                                <h2>כל מנה מכילה 70 קלוריות, 15 גר' פחמימות, 2.5  גר' חלבון ועקבות שומן.</h2>
                        </div>
                        <br />
                        <Grid container item xs={8}>

                                <Card sx={{ width: 300, /* maxWidth: 345  */ }}>
                                        <CardMedia
                                                sx={{ height: 140/* , width: 400 */ }}
                                                image={require('../../assets/images/breads.jpg')}
                                                title="לחמים"
                                                alt="לחמים"
                                                component='img'
                                        />
                                        <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                        לחמים
                                                </Typography>
                                        </CardContent>
                                        <CardActions>
                                                <Link className='link' to={'/Breads'}>
                                                        <Button variant="contained" color="primary"
                                                                sx={{ color: "white", display: "block" }}
                                                        >
                                                                מעבר לחישוב
                                                        </Button>
                                                </Link>
                                        </CardActions>
                                </Card>
                                &nbsp; &nbsp;
                                &nbsp; &nbsp;
                                <Card sx={{ width: 300,/*  maxWidth: 345 */ }}>
                                        <CardMedia
                                                sx={{ height: 140 }}
                                                image={require('../../assets/images/CookedFoodsGB.jpg')}
                                                title="מזונות מבושלים"
                                                alt="מזונות מבושלים"
                                                component='img'
                                        />
                                        <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                        מזונות מבושלים (ללא שמן)
                                                </Typography>
                                        </CardContent>
                                        <CardActions>
                                                <Link className='link' to={'/CookedFoodsGB'}>
                                                        <Button variant="contained" color="primary"
                                                                sx={{ color: "white", display: "block" }}
                                                        >
                                                                מעבר לחישוב
                                                        </Button>
                                                </Link>
                                        </CardActions>
                                </Card>
                        </Grid>
                </>

        );
}
export default GrainsBakery;