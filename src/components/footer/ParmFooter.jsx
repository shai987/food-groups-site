// import icons from react-icons
import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import css
import '../../assets/css/ParmFooter.css';

const ParmFooter = () => {
        return (
                <>
                        <div className="footer">
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
                                        <p className="text-center" id='copyright__data'>© קרדיט לתוכן האתר, קורס דיאטטיקה האוניברסיטה העברית</p>
                                </div>

                        </div>
                </>
        );
}

export default ParmFooter;