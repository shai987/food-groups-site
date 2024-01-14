// import react-router-dom
import {
        HashRouter as Router,
        Routes,
        Navigate,
        Route,
        Link,
} from 'react-router-dom';
// import libraries from material-ui
import { useState, lazy, Suspense } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
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
// import css
import '../assets/css/MyRouter.css';
// import my components
import Footer from '../components/footer/Footer';
import ScrollToTopPage from '../components/ScrollToTopPage';
import HomepageContainer from '../components/homePage/HomepageContainer';


// const HomepageContainer = lazy(() => import('../components/homePage/HomepageContainer'));
// GrainsBakery
const GrainsBakery = lazy(() => import('../components/navComponents/GrainsBakery'));
const Breads = lazy(() => import('../components/Grains&Bakery/Breads'));
const CookedFoodsGB = lazy(() => import('../components/Grains&Bakery/CookedFoodsGB'));
const Flour = lazy(() => import('../components/Grains&Bakery/Flour'));
const Variance = lazy(() => import('../components/Grains&Bakery/Variance'));
// LegumesAmylum
const LegumesAmylum = lazy(() => import('../components/navComponents/LegumesAmylum'));
const CookedFoodsPA = lazy(() => import('../components/Legumes&Amylum/CookedFoodsPA'));
// FruitGroup
const FruitGroup = lazy(() => import('../components/navComponents/FruitGroup'));
const Fruit = lazy(() => import('../components/Fruits/Fruit'));
// FatGroup
const FatGroup = lazy(() => import('../components/navComponents/FatGroup'));
const Fat = lazy(() => import('../components/Fat/Fat'));
// MeatGroup
const MeatGroup = lazy(() => import('../components/navComponents/MeatGroup'));
const Meat = lazy(() => import('../components/Meat&Substitutes/Meat'));
const Soybean = lazy(() => import('../components/Meat&Substitutes/Soybean'));
const Lite = lazy(() => import('../components/Meat&Substitutes/Lite'));
const Egg = lazy(() => import('../components/Meat&Substitutes/Egg'));
// MilkGroup
const MilkGroup = lazy(() => import('../components/navComponents/MilkGroup'));
const Milk = lazy(() => import('../components/Milk/Milk'));
// LowFatMilkGroup
const LowFatMilkGroup = lazy(() => import('../components/navComponents/LowFatMilkGroup'));
const LowFatMilk = lazy(() => import('../components/LowFatMilk/LowFatMilk'));
// Vegetables
const Vegetables = lazy(() => import('../components/navComponents/Vegetables'));
const Vegetable = lazy(() => import('../components/Vegetables/Vegetable'));
// SugarGroup
const SugarGroup = lazy(() => import('../components/navComponents/SugarGroup'));
const Sugar = lazy(() => import('../components/Sugars/Sugar'));

const theme = createTheme({
        breakpoints: {
                values: {
                        xs: 0,
                        sm: 600,
                        md: 1485,
                        lg: 1920,
                        xl: 2400,
                },
        },
});

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
        // const [isPending, startTransition] = useTransition();

        const handleCloseNavMenu = () => {
                setNav(null);
        };

        const handleOpenNavMenu = (event) => {
                setNav(event.currentTarget);
        };

        return (
                <>
                        <ThemeProvider theme={theme}>
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
                                                                        </Link>
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
                                                                                                <Link className='link-nav' to={`/${page.key}`}>
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
                                        <Suspense fallback={<h1>טוען...</h1>}>
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
                                        </Suspense>
                                        <Footer />
                                        <ScrollToTopPage />
                                </Router >
                        </ThemeProvider >
                </>
        );
}

export default MyRouter;
