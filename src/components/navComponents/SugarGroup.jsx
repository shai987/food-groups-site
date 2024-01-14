// import my components
import Cards from '../Cards';
// import css
import '../../assets/css/basic.css';

const SugarGroup = () => {
        return (
                <>
                        <div>
                                <h1>קבוצת הסוכרים</h1>
                        </div>

                        <div>
                                <h2>כל מנה מכילה 20 קלוריות , 5 גר' פחמימות.</h2>
                        </div>
                        <div className='div-container'>
                                <Cards
                                        imageSrc={require('../../assets/images/sugar.jpg')}
                                        title="סוכר"
                                        alt="סוכר"
                                        link='/Sugar'
                                        name="סוכר"
                                />
                        </div>
                </>
        )
}
export default SugarGroup;