import Image from '../Image';
import '../../assets/css/Welcome.css';

const Welcome = () => {
        const image = {
                src: require('../../assets/images/HomepageImage.jpg'),
                alt: "תמונה דף בית",
                title: "תמונה דף בית",
                style: {}
        }
        return (
                <div className="welcome" >
                        <h1>ברוך הבא לאתר קבוצות תחליף</h1>
                        <p>האתר מסייע בחישוב כמות מנות לפי קטגוריות</p>
                        <Image img={image} />
                </div >
        );
}

export default Welcome;