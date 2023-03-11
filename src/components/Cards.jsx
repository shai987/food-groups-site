// import libraries from material-ui
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import react-router-dom
import { Link } from 'react-router-dom';
// import react-lazyload
import LazyLoad from 'react-lazyload';
// import css
import '../assets/css/basic.css'

const Cards = (props) => {
        return (
                <>
                        <LazyLoad height={200} once>
                                <Card sx={{ width: 300 }}>
                                        <CardMedia
                                                image={props.imageSrc}
                                                title={props.title}
                                                alt={props.alt}
                                                component='img'
                                        />
                                        <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                        {props.name}
                                                </Typography>
                                        </CardContent>
                                        <CardActions>
                                                <Link className='link' to={props.link}>
                                                        <Button variant="contained" color="primary"
                                                                sx={{ color: "white", display: "block", }}
                                                        >
                                                                מעבר לחישוב
                                                        </Button>
                                                </Link>
                                        </CardActions>
                                </Card>
                        </LazyLoad>
                </>
        );
}

export default Cards; 