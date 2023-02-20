// import libraries from material-ui
import { Grid } from '@mui/material';
// import my components
import Cards from '../Cards';
// import css
import '../../assets/css/basic.css';

const FatGroup = () => {
        return (
                <>
                        <div>
                                <h1>קבוצת השומן</h1>
                        </div>

                        <div>
                                <h2>כל מנה מכילה 45 קלוריות ו-5 גרם שומן.</h2>
                        </div>
                        <div >
                                <Grid container item xs={10}>
                                        <Cards
                                                imageSrc={require('../../assets/images/Fat.jpg')}
                                                title="שומן"
                                                alt="שומן"
                                                link='/Fat'
                                                name="שומן"
                                        />
                                </Grid>
                        </div>
                </>
        )
}
export default FatGroup;