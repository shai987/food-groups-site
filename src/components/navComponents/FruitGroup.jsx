// import libraries from material-ui
import { Grid } from '@mui/material';
// import my components
import Cards from '../Cards';
// import css
import '../../assets/css/basic.css';

const FruitGroup = () => {
        return (
                <>
                        <div>
                                <h1>קבוצת הפירות</h1>
                        </div>

                        <div>
                                <h2>כל מנה מכילה 60 קלוריות ו-15 גרם פחמימות.</h2>
                        </div>
                        <div >
                                <Grid container item xs={10}>
                                        <Cards
                                                imageSrc={require('../../assets/images/Fruit.jpg')}
                                                title="פירות"
                                                alt="פירות"
                                                link='/Fruit'
                                                name="פירות"
                                        />
                                </Grid>
                        </div>
                </>
        )
}
export default FruitGroup;