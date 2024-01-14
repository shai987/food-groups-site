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
// import prop-types
import PropTypes from 'prop-types';
// import css
import '../assets/css/basic.css';

const Cards = (props) => {
        return (
                <>
                        <div className='card-device'>
                                <Card sx={{ width: 170 }}>
                                        <LazyLoad height={200} once>
                                                <CardMedia
                                                        image={props.imageSrc}
                                                        title={props.title}
                                                        alt={props.alt}
                                                        component='img'
                                                />
                                        </LazyLoad>
                                        <CardContent>
                                                <Typography gutterBottom variant="h7" component="div">
                                                        {props.name}
                                                </Typography>
                                        </CardContent>
                                        <CardActions>
                                                <Link className='link' to={props.link}>
                                                        <Button variant="contained" color="primary">
                                                                מעבר לחישוב
                                                        </Button>
                                                </Link>
                                        </CardActions>
                                </Card>
                        </div>
                </>
        );
}

Cards.propTypes = {
        imageSrc: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
}

export default Cards; 