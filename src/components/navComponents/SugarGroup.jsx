// import libraries from material-ui
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import react-router-dom
import { Link } from 'react-router-dom';
import '../../assets/css/MyRouter.css'
const SugarGroup = () => {
        return (
                <>
                        <div>
                                <h1>קבוצת הסוכרים</h1>
                        </div>

                        <div>
                                <h2>כל מנה מכילה 20 קלוריות , 5 גר' פחמימות.</h2>
                        </div>
                        <div >
                                <Card sx={{ maxWidth: 345, alignItems: 'center' }}>
                                        <CardMedia
                                                sx={{ height: 140 }}
                                                image={require('../../assets/images/sugar.jpg')}
                                                title="סוכר"
                                                alt="סוכר"
                                                component='img'
                                        />
                                        <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                        סוכרים
                                                </Typography>
                                        </CardContent>
                                        <CardActions>
                                                <Link className='link' to={'/Sugar'}>
                                                        <Button variant="contained" color="primary"
                                                                sx={{ color: "white", display: "block" }}
                                                        >
                                                                מעבר לחישוב
                                                        </Button>
                                                </Link>
                                        </CardActions>
                                </Card>
                        </div>
                </>
        )
}
export default SugarGroup;