// import libraries from material-ui
import { Grid } from '@mui/material';
// import my components
import Cards from '../Cards';
// import css
import '../../assets/css/basic.css';

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
                                <Grid container item xs={9}>
                                        <Cards
                                                imageSrc={require('../../assets/images/sugar.jpg')}
                                                title="סוכר"
                                                alt="סוכר"
                                                link='/Sugar'
                                                name="סוכר"
                                        />
                                </Grid>
                        </div>
                </>
        )
}
export default SugarGroup;