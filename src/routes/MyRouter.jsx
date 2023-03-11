// import react-router-dom
import {
        BrowserRouter as Router,
        Routes,
        Navigate,
        Route,
        Link
} from 'react-router-dom';
// import libraries from material-ui
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
// import my components
import HomepageContainer from '../components/homePage/HomepageContainer';
import Cards from '../components/Cards';
import MyContainer from '../components/MyContainer';
// GrainsBakery
import GrainsBakery from '../components/navComponents/GrainsBakery';
import Breads from '../components/Grains&Bakery/Breads';
import CookedFoodsGB from "../components/Grains&Bakery/CookedFoodsGB";
import Flour from "../components/Grains&Bakery/Flour";
import Variance from "../components/Grains&Bakery/Variance";
// LegumesAmylum
import LegumesAmylum from '../components/navComponents/LegumesAmylum';
import CookedFoodsPA from '../components/Legumes&Amylum/CookedFoodsPA';
// FruitGroup
import FruitGroup from '../components/navComponents/FruitGroup';
import Fruit from '../components/Fruits/Fruit';
// FatGroup
import FatGroup from '../components/navComponents/FatGroup';
import Fat from '../components/Fat/Fat';
// MeatGroup
import MeatGroup from '../components/navComponents/MeatGroup';
import Meat from '../components/Meat&Substitutes/Meat';
import Soybean from '../components/Meat&Substitutes/Soybean';
import Lite from '../components/Meat&Substitutes/Lite';
import Egg from '../components/Meat&Substitutes/Egg';
// MilkGroup
import MilkGroup from '../components/navComponents/MilkGroup';
import Milk from '../components/Milk/Milk';
// LowFatMilkGroup
import LowFatMilkGroup from '../components/navComponents/LowFatMilkGroup';
import LowFatMilk from '../components/LowFatMilk/LowFatMilk';
// Vegetables
import Vegetables from '../components/navComponents/Vegetables';
import Vegetable from '../components/Vegetables/Vegetable';
// SugarGroup
import SugarGroup from '../components/navComponents/SugarGroup';
import Sugar from '../components/Sugars/Sugar';
// import css
import '../assets/css/MyRouter.css';

const MyRouter = () => {
        const pages = [
                { key: 'GrainsBakery', value: 'קבוצת עמילן/דגנים ומוצרי מאפה' },
                { key: 'LegumesAmylum', value: 'קבוצת עמילן/קטניות' },
                { key: 'FruitGroup', value: 'קבוצת הפירות' },
                { key: 'FatGroup', value: 'קבוצת השומן' },
                { key: 'MeatGroup', value: 'קבוצת הבשר ותחליפיו' },
                { key: 'MilkGroup', value: 'קבוצת החלב' },
                { key: 'LowFatMilkGroup', value: 'קבוצת חלב דל שומן' },
                { key: 'Vegetables', value: 'קבוצת הירקות' },
                { key: 'SugarGroup', value: 'קבוצת הסוכרים' },
        ];

        const [nav, setNav] = useState(null);

        const handleCloseNavMenu = () => {
                setNav(nav);
        };

        return (
                <>
                        <Router>
                                {/* sticky position allows the menu to be displayed even when scrolling */}
                                <AppBar className="appBar" position="sticky" color="secondary">
                                        <Container maxWidth="xl" sx={{ mr: '2px', ml: '2px', display: 'grid' }}>
                                                <Toolbar disableGutters>
                                                        <Link className='link' to='/'>
                                                                <Button
                                                                        sx={{ my: 2, color: "white", display: "block" }}
                                                                >
                                                                        בית
                                                                </Button>
                                                        </Link> &nbsp; &nbsp;

                                                        {pages.map((page) => (
                                                                <MenuItem key={page.key} onClick={handleCloseNavMenu}>
                                                                        <Link className='link' to={`/${page.key}`}>
                                                                                <Button
                                                                                        sx={{ my: 2, color: "white", display: "block" }}
                                                                                >
                                                                                        {page.value}
                                                                                </Button>
                                                                        </Link>
                                                                </MenuItem>
                                                        ))}
                                                </Toolbar>
                                        </Container>
                                </AppBar>
                                <Routes>
                                        <Route path='/' element={<HomepageContainer />}></Route>
                                        <Route path='/GrainsBakery' element={<GrainsBakery />}></Route>
                                        <Route path='/Breads' element={<Breads />}></Route>
                                        <Route path='/CookedFoodsGB' element={<CookedFoodsGB />}></Route>
                                        <Route path='/Flour' element={<Flour />}></Route>
                                        <Route path='/Variance' element={<Variance />}></Route>
                                        <Route path='/LegumesAmylum' element={<LegumesAmylum />}></Route>
                                        <Route path='/CookedFoodsPA' element={<CookedFoodsPA />}></Route>
                                        <Route path='/FruitGroup' element={<FruitGroup />}></Route>
                                        <Route path='/Fruit' element={<Fruit />}></Route>
                                        <Route path='/FatGroup' element={<FatGroup />}></Route>
                                        <Route path='/Fat' element={<Fat />}></Route>
                                        <Route path='/MeatGroup' element={<MeatGroup />}></Route>
                                        <Route path='/Meat' element={<Meat />}></Route>
                                        <Route path='/Soybean' element={<Soybean />}></Route>
                                        <Route path='/Lite' element={<Lite />}></Route>
                                        <Route path='/Egg' element={<Egg />}></Route>
                                        <Route path='/MilkGroup' element={<MilkGroup />}></Route>
                                        <Route path='/Milk' element={<Milk />}></Route>
                                        <Route path='/LowFatMilkGroup' element={<LowFatMilkGroup />}></Route>
                                        <Route path='/LowFatMilk' element={<LowFatMilk />}></Route>
                                        <Route path='/Vegetables' element={<Vegetables />}></Route>
                                        <Route path='/Vegetable' element={<Vegetable />}></Route>
                                        <Route path='/SugarGroup' element={<SugarGroup />}></Route>
                                        <Route path='/Sugar' element={<Sugar />}></Route>
                                        <Route path='/Cards' element={<Cards />}></Route>
                                        <Route path='/MyContainer' element={<MyContainer />}></Route>

                                        {/* If the user go to not exsist path it would take him back to "/" */}
                                        <Route path="*" element={<Navigate to="/" />}></Route>
                                </Routes>
                        </Router >
                </>
        );
}

export default MyRouter;
