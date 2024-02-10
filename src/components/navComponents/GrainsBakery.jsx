// import my components
import Cards from '../Cards';
// import css
import '../../assets/css/basic.css';

const GrainsBakery = () => {
        return (
                <>
                        <div>
                                <h1>קבוצת  עמילן/דגנים ומוצרי מאפה</h1>
                        </div>

                        <div>
                                <h2>כל מנה מכילה 70 קלוריות, 15 גרם פחמימות, 2.5  גרם חלבון ועקבות שומן.</h2>
                        </div>

                        <br />
                        <div className='div-container'>
                                <Cards
                                        imageSrc={require('../../assets/images/breads.jpg')}
                                        title="לחמים"
                                        alt="לחמים"
                                        link='/Breads'
                                        name="לחמים"
                                />
                                <Cards
                                        imageSrc={require('../../assets/images/CookedFoodsGB.jpg')}
                                        title='מזונות מבושלים (ללא שמן)'
                                        alt='מזונות מבושלים (ללא שמן)"'
                                        link='/CookedFoodsGB'
                                        name='מזונות מבושלים (ללא שמן)'
                                />
                                <Cards
                                        imageSrc={require('../../assets/images/flour.jpg')}
                                        title="קמח"
                                        alt="קמח"
                                        link='/Flour'
                                        name="קמח"
                                />
                                <Cards
                                        imageSrc={require('../../assets/images/variance.jpg')}
                                        title="שונות"
                                        alt="שונות"
                                        link='/Variance'
                                        name="שונות"
                                />
                        </div>
                </>
        );
}
export default GrainsBakery;