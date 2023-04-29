// import libraries from material-ui
import { Grid } from '@mui/material';
// import my components
import Cards from '../Cards';
// import css
import '../../assets/css/basic.css';

const GrainsBakery = () => {
        return (
                <>
                        <div>
                                <h1>קבוצת  עמילן/דגנים ומוצרי מאפה</h1>
                        </div>

                        <div>
                                <h2>כל מנה מכילה 70 קלוריות, 15 גרם פחמימות, 2.5  גרם חלבון ועקבות שומן.</h2>
                        </div>

                        <br />
                        <div >
                                <Grid container item xs={10}>
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
                        </div>
                </>
        );
}
export default GrainsBakery;