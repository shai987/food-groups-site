// import my components
import Cards from '../Cards';
// import css
import '../../assets/css/basic.css';

const LegumesAmylum = () => {
        return (
                <>
                        <div>
                                <h1> קבוצת עמילן/ קטניות</h1>
                        </div>

                        <div>
                                <h2>כל מנה מכילה 90 קלוריות, 15 גרם פחמימות, 7.5 גרם חלבון ועקבות שומן.</h2>
                        </div>
                        <div className='div-container'>
                                <Cards
                                        imageSrc={require('../../assets/images/CookedFoodsPA.jpg')}
                                        title='מזונות מבושלים (ללא שמן)'
                                        alt='מזונות מבושלים (ללא שמן)"'
                                        link='/CookedFoodsPA'
                                        name='מזונות מבושלים (ללא שמן)'
                                />
                        </div>
                </>
        )
}
export default LegumesAmylum;