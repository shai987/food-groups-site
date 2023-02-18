import Cards from "./Cards";
import { Grid } from "@mui/material";

const MyContainer = () => {
        return (
                <>
                        <Grid container item xs={8}>

                                <Cards
                                        imageSrc={require('../assets/images/sugar.jpg')}
                                        title="לחמים"
                                        alt="לחמים"
                                        link='/Breads'
                                        name="לחמים"
                                />
                                &nbsp; &nbsp;
                                &nbsp; &nbsp;
                                <Cards
                                        imageSrc={require('../assets/images/sugar.jpg')}
                                        title="לחמים"
                                        alt="לחמים"
                                        link='/Breads'
                                        name="לחמים"
                                />
                        </Grid>
                </>
        );
}
export default MyContainer;