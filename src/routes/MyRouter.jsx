// import react-router-dom
import {
        // BrowserRouter as Router,
        HashRouter as Router,
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
import MenuItem from "@mui/material/MenuItem";
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
// import icon from react-icons
import { AiFillHome } from 'react-icons/ai';
// import my components
import HomepageContainer from '../components/homePage/HomepageContainer';
import Footer from '../components/footer/Footer';
import ScrollToTopPage from '../components/ScrollToTopPage';
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
                setNav(null);
        };

        const handleOpenNavMenu = (event) => {
                setNav(event.currentTarget);
        };

        return (
                <>
                        {/* <Router> */}
                        <Router basename="/">
                                {/* sticky position allows the menu to be displayed even when scrolling */}
                                <AppBar position="sticky" sx={{ backgroundColor: '#333333' }}>
                                        <Container maxWidth="xl" sx={{ mr: '2px', ml: '2px', display: 'grid' }}>
                                                <Toolbar disableGutters>

                                                        {/* Default menu */}
                                                        <MenuItem>
                                                                <Link className='linkDefault' to='/'>
                                                                        <Typography
                                                                                sx={{
                                                                                        display: { xs: 'none', md: 'flex' },
                                                                                }}
                                                                        >
                                                                                <AiFillHome className="menu__icon" />
                                                                        </Typography>
                                                                </Link> &nbsp;
                                                        </MenuItem>

                                                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                                                {pages.map((page) => (
                                                                        <MenuItem key={page.key} onClick={handleCloseNavMenu}>
                                                                                <Link className='linkDefault' to={`/${page.key}`}>
                                                                                        {page.value}
                                                                                </Link>
                                                                        </MenuItem>
                                                                ))}
                                                        </Box>

                                                        {/* Zoom menu */}

                                                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                                                <IconButton
                                                                        size="large"
                                                                        aria-label="current page"
                                                                        aria-controls="menu-appbar"
                                                                        aria-haspopup="true"
                                                                        onClick={handleOpenNavMenu}
                                                                        color="inherit"
                                                                >
                                                                        <MenuIcon />
                                                                </IconButton>
                                                                <Menu
                                                                        id="menu-appbar"
                                                                        anchorEl={nav}
                                                                        anchorOrigin={{
                                                                                vertical: 'bottom',
                                                                                horizontal: 'left',
                                                                        }}
                                                                        keepMounted
                                                                        transformOrigin={{
                                                                                vertical: 'top',
                                                                                horizontal: 'left',
                                                                        }}
                                                                        open={Boolean(nav)}
                                                                        onClose={handleCloseNavMenu}
                                                                        sx={{
                                                                                display: { xs: 'block', md: 'none' },
                                                                        }}
                                                                >
                                                                        {pages.map((page) => (
                                                                                <MenuItem key={page.key} onClick={handleCloseNavMenu}>
                                                                                        <Link className='link' to={`/${page.key}`}>
                                                                                                {page.value}
                                                                                        </Link>
                                                                                </MenuItem>
                                                                        ))}
                                                                </Menu>
                                                        </Box>

                                                        <MenuItem>
                                                                <Link className='linkDefault' to='/'>
                                                                        <Typography
                                                                                sx={{
                                                                                        display: { xs: 'flex', md: 'none' },
                                                                                }}
                                                                        >
                                                                                <AiFillHome className="menu__icon" />
                                                                        </Typography>
                                                                </Link>
                                                        </MenuItem>
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

                                        {/* If the user go to not exsist path it would take him back to "/" */}
                                        <Route path="*" element={<Navigate to="/" />}></Route>
                                </Routes>
                                <Footer />
                                <ScrollToTopPage />
                        </Router >
                </>
        );
}

export default MyRouter;
