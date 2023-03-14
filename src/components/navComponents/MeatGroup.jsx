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
                        </div>
                        <div >
                                <Grid container item xs={9}>
                                        &nbsp; &nbsp; &nbsp; &nbsp;
                                        <Cards
                                                imageSrc={require('../../assets/images/Meat.jpg')}
                                                title="תמונת בשר"
                                                alt="תמונת בשר"
                                                link='/Meat'
                                                name="בשרים"
                                        />
                                        &nbsp; &nbsp; &nbsp; &nbsp;
                                        <Cards
                                                imageSrc={require('../../assets/images/SoyLite.jpg')}
                                                title="תמונת תחליפי בשר"
                                                alt="תמונת תחליפי בשר"
                                                link='/Soybean'
                                                name="תחליפי בשר - סויה "
                                        />
                                        &nbsp; &nbsp; &nbsp; &nbsp;
                                        <Cards
                                                imageSrc={require('../../assets/images/SoyLite.jpg')}
                                                title="תמונת תחליפי בשר"
                                                alt="תמונת תחליפי בשר"
                                                link='/Lite'
                                                name="תחליפי בשר - לייט"
                                        />
                                        &nbsp; &nbsp; &nbsp; &nbsp;
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