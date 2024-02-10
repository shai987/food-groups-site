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
                                        title="בשרים"
                                        alt="בשרים"
                                        link='/Meat'
                                        name="בשרים"
                                />
                                <Cards
                                        imageSrc={require('../../assets/images/SoyLite.jpg')}
                                        title="תחליפי בשר - סויה"
                                        alt="תחליפי בשר - סויה"
                                        link='/Soybean'
                                        name="תחליפי בשר - סויה "
                                />
                                <Cards
                                        imageSrc={require('../../assets/images/SoyLite.jpg')}
                                        title="תחליפי בשר - לייט"
                                        alt="תחליפי בשר - לייט"
                                        link='/Lite'
                                        name="תחליפי בשר - לייט"
                                />
                                <Cards
                                        imageSrc={require('../../assets/images/eggs.jpg')}
                                        title="ביצים"
                                        alt="ביצים"
                                        link='/Egg'
                                        name="ביצים"
                                />
                        </div >
                </>
        )
}
export default MeatGroup;