// import libraries from material-ui
import { Grid } from '@mui/material';
// import my components
import Cards from '../Cards';
// import css
import '../../assets/css/basic.css';

const MilkGroup = () => {
        return (
                <>
                        <div>
                                <h1>קבוצת החלב</h1>
                        </div>

                        <div>
                                <h2>כל מנה מכילה 120 קלוריות, 10 גר' פחמימות, 6 גר' חלבון, 6 גר' שומן.</h2>
                        </div>
                        <div >
                                <Grid container item xs={10}>
                                        <Cards
                                                imageSrc={require('../../assets/images/sugar.jpg')}
                                                title="חלב"
                                                alt="חלב"
                                                link='/Milk'
                                                name="מוצרי חלב"
                                        />
                                </Grid>
                        </div>
                </>
        )
}
export default MilkGroup;