// import my components
import Cards from '../Cards';
// import css
import '../../assets/css/basic.css';

const MeatGroup = () => {
        return (
                <>
                        <div>
                                <h1>קבוצת  הבשר ותחליפיו</h1>
                        </div>

                        <div>
                                <h2>כל מנה מכילה 210 קלוריות, 19 גר' חלבון ו-15 גר' שומן.</h2>
                        </div>
                        <div className='div-container'>
                                <Cards
                                        imageSrc={require('../../assets/images/Meat.jpg')}
                                        title="תמונת בשר"
                                        alt="תמונת בשר"
                                        link='/Meat'
                                        name="בשרים"
                                />
                                <Cards
                                        imageSrc={require('../../assets/images/SoyLite.jpg')}
                                        title="תמונת תחליפי בשר"
                                        alt="תמונת תחליפי בשר"
                                        link='/Soybean'
                                        name="תחליפי בשר - סויה "
                                />
                                <Cards
                                        imageSrc={require('../../assets/images/SoyLite.jpg')}
                                        title="תמונת תחליפי בשר"
                                        alt="תמונת תחליפי בשר"
                                        link='/Lite'
                                        name="תחליפי בשר - לייט"
                                />
                                <Cards
                                        imageSrc={require('../../assets/images/eggs.jpg')}
                                        title="תמונת ביצים"
                                        alt="תמונת ביצים"
                                        link='/Egg'
                                        name="ביצים"
                                />
                        </div >
                </>
        )
}
export default MeatGroup;