import Cards from "./Cards";
import { Grid } from "@mui/material";

const MyContainer = () => {
        return (
                <Grid container items xs={12}>
                        <Cards
                                src={require('../assets/images/sugar.jpg')}
                                // src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.cnet.com%2Fa%2Fimg%2Fresize%2F69fb3b1dec1708e68093cd3ff2cbf7a850a4d5ac%2Fhub%2F2022%2F11%2F07%2F034458d7-c897-45d4-8e9e-4e3d62452521%2Fgettyimages-473200382.jpg%3Fauto%3Dwebp%26fit%3Dcrop%26height%3D900%26width%3D1200&imgrefurl=https%3A%2F%2Fwww.cnet.com%2Fhealth%2Fnutrition%2F11-foods-and-drinks-with-a-ton-of-hidden-sugar%2F&tbnid=MWEZyct0-gkY1M&vet=12ahUKEwjM2OCP5Jz9AhVyWaQEHUJUCXEQMygGegUIARDPAQ..i&docid=DFDSErF7O21VVM&w=1200&h=900&itg=1&q=sugar%20images&ved=2ahUKEwjM2OCP5Jz9AhVyWaQEHUJUCXEQMygGegUIARDPAQ"
                                title="לחמים"
                                link='/Breads'
                        />
                </Grid>
        );
}
export default MyContainer;