// import my components
import Cards from '../Cards';
// import css
import '../../assets/css/basic.css';

const LowFatMilkGroup = () => {
        return (
                <>
                        <div>
                                <h1>קבוצת חלב דל שומן</h1>
                        </div>

                        <div>
                                <h2>כל מנה מכילה 80 קלוריות, 10 גרם פחמימות, 6 גרם חלבון ו-0-2 גרם שומן.</h2>
                        </div>
                        <div className='div-container'>
                                <Cards
                                        imageSrc={require('../../assets/images/milkGroup.jpg')}
                                        title="חלב דל שומן"
                                        alt="חלב דל שומן"
                                        link='/LowFatMilk'
                                        name="חלב דל שומן"
                                />
                        </div>
                </>
        )
}
export default LowFatMilkGroup;