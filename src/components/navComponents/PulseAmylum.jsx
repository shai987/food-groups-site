// import libraries from material-ui
import { Grid } from '@mui/material';
// import my components
import Cards from '../Cards';
// import css
import '../../assets/css/basic.css';

const PulseAmylum = () => {
        return (
                <>
                        <div>
                                <h1> קבוצת עמילן/ קטניות</h1>
                        </div>

                        <div>
                                <h2>כל מנה מכילה 90 קלוריות, 15 גר' פחמימות, 7.5 גר' חלבון ועקבות שומן.</h2>
                        </div>
                        <div >
                                <Grid container item xs={9}>
                                        <Cards
                                                imageSrc={require('../../assets/images/sugar.jpg')}
                                                title='מזונות מבושלים (ללא שמן)'
                                                alt='מזונות מבושלים (ללא שמן)"'
                                                link='/CookedFoodsPA'
                                                name='מזונות מבושלים (ללא שמן)'
                                        />
                                </Grid>
                        </div>
                </>
        )
}
export default PulseAmylum;