// import libraries from material-ui
import { Grid } from '@mui/material';
// import my components
import Cards from '../Cards';
// import css
import '../../assets/css/basic.css';

const MeatGroup = () => {
        return (
                <>
                        <div>
                                <h1>קבוצת  הבשר ותחליפיו</h1>
                        </div>

                        <div>
                                <h2>כל מנה מכילה 210 קלוריות, 19 גר' חלבון ו-15 גר' שומן.</h2>
                                <h3>*כ-100 גרם בשר מבושל הם שווה ערך ל-130 גרם בשר טרי. הערכים הינם לאחר בישול.</h3>
                        </div>
                        <div >
                                <Grid container item xs={9}>
                                        <Cards
                                                imageSrc={require('../../assets/images/Meat.jpg')}
                                                title="תמונת בשר"
                                                alt="תמונת בשר"
                                                link='/Meat'
                                                name="בשרים"
                                        />
                                        <Cards
                                                imageSrc={require('../../assets/images/sugar.jpg')}
                                                title="תמונת תחליפי בשר"
                                                alt="תמונת תחליפי בשר"
                                                link='/Soybean'
                                                name="מוצרי סויה מוכנים"
                                        />
                                        <Cards
                                                imageSrc={require('../../assets/images/sugar.jpg')}
                                                title="תמונת תחליפי בשר"
                                                alt="תמונת תחליפי בשר"
                                                link='/Lite'
                                                name="לייט"
                                        />
                                        <Cards
                                                imageSrc={require('../../assets/images/eggs.jpg')}
                                                title="תמונת ביצים"
                                                alt="תמונת ביצים"
                                                link='/Egg'
                                                name="ביצים"
                                        />
                                </Grid>
                        </div>
                </>
        )
}
export default MeatGroup;