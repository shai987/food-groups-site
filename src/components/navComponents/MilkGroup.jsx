
// import my components
import Cards from '../Cards';
// import css
import '../../assets/css/basic.css';

const MilkGroup = () => {
        return (
                <>
                        <div>
                                <h1>קבוצת החלב</h1>
                        </div>

                        <div>
                                <h2>כל מנה מכילה 120 קלוריות, 10 גר' פחמימות, 6 גר' חלבון, 6 גר' שומן.</h2>
                        </div>
                        <div className='div-container'>
                                <Cards
                                        imageSrc={require('../../assets/images/milkGroup.jpg')}
                                        title="מוצרי חלב"
                                        alt="מוצרי חלב"
                                        link='/Milk'
                                        name="מוצרי חלב"
                                />
                        </div>
                </>
        )
}
export default MilkGroup;