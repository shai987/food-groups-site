// import my components
import Cards from '../Cards';
// import css
import '../../assets/css/basic.css';

const FatGroup = () => {
        return (
                <>
                        <div>
                                <h1>קבוצת השומן</h1>
                        </div>

                        <div>
                                <h2>כל מנה מכילה 45 קלוריות ו-5 גרם שומן.</h2>
                        </div>
                        <div className='div-container'>
                                <Cards
                                        imageSrc={require('../../assets/images/Fat.jpg')}
                                        title="שומן"
                                        alt="שומן"
                                        link='/Fat'
                                        name="שומן"
                                />
                        </div>
                </>
        )
}
export default FatGroup;