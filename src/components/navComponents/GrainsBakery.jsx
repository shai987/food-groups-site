// import libraries from material-ui
import { Grid } from '@mui/material';
// import my components
import Cards from '../Cards';
// import css
import '../../assets/css/basic.css';
import LazyLoad from 'react-lazyload';
// import libraries from material-ui
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import react-router-dom
import { Link } from 'react-router-dom';
import bread from '../../assets/images/breads.jpg'
import CookedFoodsGB from '../../assets/images/CookedFoodsGB.jpg'
import flour from '../../assets/images/flour.jpg'
import variance from '../../assets/images/variance.jpg'

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
                        <div>
                                {/*   <Grid container item xs={10}>
                                        <Card sx={{ width: 300 }}>
                                                <CardMedia
                                                        // sx={{ height: 140 }}
                                                        image={bread}
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
                                                        <Link className='link' to="/Breads">
                                                                <Button variant="contained" color="primary"
                                                                        sx={{ color: "white", display: "block", }}
                                                                >
                                                                        מעבר לחישוב
                                                                </Button>
                                                        </Link>
                                                </CardActions>
                                        </Card>
                                        &nbsp; &nbsp; &nbsp; &nbsp;

                                        <Card sx={{ width: 300 }}>
                                                <CardMedia
                                                        // sx={{ height: 140 }}
                                                        image={CookedFoodsGB}
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
                                                        <Link className='link' to="/Breads">
                                                                <Button variant="contained" color="primary"
                                                                        sx={{ color: "white", display: "block", }}
                                                                >
                                                                        מעבר לחישוב
                                                                </Button>
                                                        </Link>
                                                </CardActions>
                                        </Card>
                                        &nbsp; &nbsp; &nbsp; &nbsp;

                                        <Card sx={{ width: 300 }}>
                                                <CardMedia
                                                        // sx={{ height: 140 }}
                                                        image={flour}
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
                                                        <Link className='link' to="/Breads">
                                                                <Button variant="contained" color="primary"
                                                                        sx={{ color: "white", display: "block", }}
                                                                >
                                                                        מעבר לחישוב
                                                                </Button>
                                                        </Link>
                                                </CardActions>
                                        </Card>
                                        &nbsp; &nbsp; &nbsp; &nbsp;

                                        <Card sx={{ width: 300 }}>
                                                <CardMedia
                                                        // sx={{ height: 140 }}
                                                        image={variance}
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
                                                        <Link className='link' to="/Breads">
                                                                <Button variant="contained" color="primary"
                                                                        sx={{ color: "white", display: "block", }}
                                                                >
                                                                        מעבר לחישוב
                                                                </Button>
                                                        </Link>
                                                </CardActions>
                                        </Card>
                                </Grid> */}

                        </div>
                        <Grid container item xs={9}>
                                &nbsp; &nbsp; &nbsp; &nbsp;
                                <Cards
                                        imageSrc={require('../../assets/images/breads.jpg')}
                                        title="לחמים"
                                        alt="לחמים"
                                        link='/Breads'
                                        name="לחמים"
                                />
                                &nbsp; &nbsp; &nbsp; &nbsp;
                                <Cards
                                        imageSrc={require('../../assets/images/CookedFoodsGB.jpg')}
                                        title='מזונות מבושלים (ללא שמן)'
                                        alt='מזונות מבושלים (ללא שמן)"'
                                        link='/CookedFoodsGB'
                                        name='מזונות מבושלים (ללא שמן)'
                                />
                                &nbsp; &nbsp; &nbsp; &nbsp;
                                <Cards
                                        imageSrc={require('../../assets/images/flour.jpg')}
                                        title="קמחים"
                                        alt="קמחים"
                                        link='/Flour'
                                        name="קמחים"
                                />
                                &nbsp; &nbsp; &nbsp; &nbsp;
                                <Cards
                                        imageSrc={require('../../assets/images/variance.jpg')}
                                        title="שונות"
                                        alt="שונות"
                                        link='/Variance'
                                        name="שונות"
                                />
                        </Grid>
                </>
        );
}
export default GrainsBakery;