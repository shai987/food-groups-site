// import react-router-dom
import { Link } from 'react-router-dom';

const PulseAmylum = () => {
        return (
                <>
                        <div>
                                <h1> קבוצת עמילן/ קטניות</h1>
                        </div>

                        <div>
                                <h2>כל מנה מכילה 90 קלוריות, 15 גר' פחמימות, 7.5 גר' חלבון ועקבות שומן.</h2>
                        </div>
                        <div>
                                <button>
                                        <Link className='link' to='/CookedFoodsPA'>מזונות מבושלים (ללא שמן)</Link>
                                </button>
                        </div>
                </>

        )
}
export default PulseAmylum;