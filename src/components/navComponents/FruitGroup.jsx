// import my components
import Cards from '../Cards';
// import css
import '../../assets/css/basic.css';

const FruitGroup = () => {
        return (
                <>
                        <div>
                                <h1>קבוצת הפירות</h1>
                        </div>

                        <div>
                                <h2>כל מנה מכילה 60 קלוריות ו-15 גרם פחמימות.</h2>
                        </div>
                        <div className='div-container'>
                                <Cards
                                        imageSrc={require('../../assets/images/Fruit.jpg')}
                                        title="פירות"
                                        alt="פירות"
                                        link='/Fruit'
                                        name="פירות"
                                />
                        </div>
                </>
        )
}
export default FruitGroup;