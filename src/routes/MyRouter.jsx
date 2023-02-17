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
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// import our components
import HomepageContainer from '../components/homePage/HomepageContainer';
import Breads from "../components/Breads";
import CookedFoods from "../components/CookedFoods";
import Flour from "../components/Flour";
import Variance from "../components/Variance";

// import css
import '../assets/css/MyRouter.css';

const MyRouter = () => {
        const pages = [
                { key: 'Breads', value: 'לחמים' },
                { key: 'CookedFoods', value: 'מזונות מבושלים (ללא שמן)' },
                { key: 'Flour', value: 'קמחים (לא מבושל)' },
                { key: 'Variance', value: 'שונות' },
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
                                        <Route path='/Breads' element={<Breads />}></Route>
                                        <Route path='/CookedFoods' element={<CookedFoods />}></Route>
                                        <Route path='/Flour' element={<Flour />}></Route>
                                        <Route path='/Variance' element={<Variance />}></Route>

                                        {/* If the user go to not exsist path it would take him back to "/" */}
                                        <Route path="*" element={<Navigate to="/" />}></Route>
                                </Routes>
                        </Router >
                </>
        );
}

export default MyRouter;
