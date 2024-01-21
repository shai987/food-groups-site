// import icons from react-icons
import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import react-router-dom
import { useLocation } from 'react-router-dom';
// import css
import '../../assets/css/ParmFooter.css';

const ParmFooter = () => {
        const location = useLocation();
        const isHomePage = location.pathname === '/';
        const isGrainsBakeryGroup = location.pathname === '/GrainsBakery';
        const isMeatGroupGroup = location.pathname === '/MeatGroup';
        return (
                <>
                        <div className={isHomePage ? 'footer-for-home' : isGrainsBakeryGroup ? 'special-group' : isMeatGroupGroup ? 'special-group' : 'footer'}>
                                <div className="footer__text__icon">
                                        <p className='search_me'> חפשו אותי: </p>
                                        <a href="https://www.linkedin.com/in/shai-geffen-24373721a/" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedin className="footer__icon" />
                                        </a>
                                        <a href="https://github.com/shai987" target="_blank" rel="noopener noreferrer">
                                                <FaGithub className="footer__icon" />
                                        </a>
                                </div>
                                <div className='copyright'>
                                        <p className="text-center" id='copyright__shai'>© כל הזכויות שמורות לשי גפן {' ' + new Date().getFullYear()}</p>
                                        <p className="text-center" id='copyright__data'>הנתונים מבוססים על טבלאות של קבוצות תחליף</p>
                                </div>

                        </div >
                </>
        );
}

export default ParmFooter;