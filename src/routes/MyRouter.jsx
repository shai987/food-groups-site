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

import GrainsBakery from '../components/navComponents/GrainsBakery';
import Breads from '../components/Grains&Bakery/Breads';
import CookedFoodsGB from "../components/Grains&Bakery/CookedFoodsGB";
import Flour from "../components/Grains&Bakery/Flour";
import Variance from "../components/Grains&Bakery/Variance";

import PulseAmylum from '../components/navComponents/PulseAmylum';
import CookedFoodsPA from '../components/Pulse&Amylum/CookedFoodsPA';

import SugarGroup from '../components/navComponents/SugarGroup';
import Sugar from '../components/Sugars/Sugar';
// import css
import '../assets/css/MyRouter.css';

const MyRouter = () => {
        // const pages = [
        //         { key: 'Breads', value: 'לחמים' },
        //         { key: 'CookedFoodsGB', value: 'מזונות מבושלים (ללא שמן)' },
        //         { key: 'Flour', value: 'קמחים (לא מבושל)' },
        //         { key: 'Variance', value: 'שונות' },
        // ];

        // const pages1 = [
        //         { key: 'GrainsBakery', value: 'קבוצת עמילן/דגנים ומוצרי מאפה' },
        //         { key: 'PulseAmylum', value: 'קבוצת עמילן/קטניות' },
        //         { key: 'Variance', value: 'קבוצת הפירות' },
        //         { key: 'Variance', value: 'קבוצת הבשר ותחליפיו' },
        //         { key: 'Variance', value: 'קבוצת השומן' },
        //         { key: 'Variance', value: 'קבוצת החלב' },
        //         { key: 'Variance', value: 'קבוצת חלב דל שומן' },
        //         { key: 'Variance', value: 'קבוצת הירקות' },
        //         { key: 'Variance', value: 'קבוצת הסוכרים' },
        //         { key: 'Variance', value: 'סיכום קבוצות תחליף' },
        //         { key: 'Variance', value: 'בניית תפריט מאוזן' },
        // ];
        const pages12 = [
                { key: 'GrainsBakery', value: 'קבוצת עמילן/דגנים ומוצרי מאפה' },
                { key: 'PulseAmylum', value: 'קבוצת עמילן/קטניות' },
                { key: 'SugarGroup', value: 'קבוצת הסוכרים' },
        ];

        const [nav, setNav] = useState(null);

        const handleCloseNavMenu = () => {
                setNav(null);
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

                                                        {pages12.map((page) => (
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
                                        <Route path='/PulseAmylum' element={<PulseAmylum />}></Route>
                                        <Route path='/CookedFoodsPA' element={<CookedFoodsPA />}></Route>
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
