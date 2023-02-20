// import libraries from material-ui
import { Grid } from '@mui/material';
// import my components
import Cards from '../Cards';
// import css
import '../../assets/css/basic.css';

const LowFatMilkGroup = () => {
        return (
                <>
                        <div>
                                <h1>קבובת חלב דל שומן</h1>
                        </div>

                        <div>
                                <h2>כל מנה מכילה 80 קלוריות, 10 גרם פחמימות, 6 גרם חלבון ו-0-2 גרם שומן.</h2>
                        </div>
                        <div >
                                <Grid container item xs={10}>
                                        <Cards
                                                imageSrc={require('../../assets/images/sugar.jpg')}
                                                title="חלב דל שומן"
                                                alt="חלב דל שומן"
                                                link='/LowFatMilk'
                                                name="חלב דל שומן"
                                        />
                                </Grid>
                        </div>
                </>
        )
}
export default LowFatMilkGroup;