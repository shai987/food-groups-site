// import libraries from material-ui
import { Grid } from '@mui/material';
// import my components
import Cards from '../Cards';
// import css
import '../../assets/css/basic.css';

const Vegetables = () => {
        return (
                <>
                        <div>
                                <h1>קבוצת הירקות</h1>
                        </div>

                        <div>
                                <h2>כל מנה מכילה 24 קלוריות בממוצע, 5 גרם פחמימות ו-1 גרם חלבון.</h2>
                                <h3>מנת ירק היא: כוס ירק טרי / 2 כוסות ירקות עליים / חצי כוס ירק מבושל / 1/2 כוס מיץ ירק (כ-100 גרם) </h3>
                        </div>
                        <div >
                                <Grid container item xs={10}>
                                        <Cards
                                                imageSrc={require('../../assets/images/Vegetables.jpg')}
                                                title="תמונת ירקות"
                                                alt="תמונת ירקות"
                                                link='/Vegetable'
                                                name="ירקות"
                                        />
                                </Grid>
                        </div>
                </>
        )
}
export default Vegetables;