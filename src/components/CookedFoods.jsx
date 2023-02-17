import { useState } from 'react';
import cookedFoods from '../services/Grains&Bakery/cookedFoods';
import '../assets/css/basic.css';

const CookedFoods = () => {
        const [products] = useState(cookedFoods);
        const [productName, setProductName] = useState(cookedFoods[0]['details']['productName']);
        const [productAmount, setProductAmount] = useState(1);
        const [result, setResult] = useState('');

        const calculateValue = (productName, amount) => {
                // Get the product object 
                const product = products.find(product => product.details?.productName === productName);
                // For basic reasult multiplication operation
                const productMultiplication = ` ${(amount * product.details?.calculationValue).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
                // For fat reasult multiplication operation 
                const productFatM = ` ${(amount * product.details?.calculationValue).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}\n ${product.fat?.fatString.split(" יש להוסיף ")[0]} יש להוסיף ${(amount * product.fat?.fatCalculation).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${product.fat?.fatString.split(" יש להוסיף ")[1]}`;

                switch (productName) {
                        case 'אורז/אטריות/פסטה/בורגול קוסקוס/גריסי פנינה/כוסמת פתיתים/קינואה':
                        case 'תירס משומר מתוק (גרעינים)':
                        case 'תפוח אדמה – מחית':
                        case 'תירס קלח':
                        case 'בטטה':
                        case 'תפוח אדמה':
                        case 'תירס משומר לייט':
                                return productMultiplication;
                        case `תפ"א מטוגנים (צ'יפס)`:
                                return productFatM;
                        default:
                                return 0;
                }
        };

        const handleProduct = (event) => {
                setProductName(event.target.value);
        };

        const handleAmount = (event) => {
                setProductAmount(event.target.value);
        };

        // Clean input field when click it 
        const handleClear = (event) => {
                event.target.value = "";
        };

        const handleSubmit = (e) => {
                // Prevent reload the page
                e.preventDefault();
                setResult(calculateValue(productName, productAmount));
        };

        return (
                <form onSubmit={handleSubmit}>
                        <h1>מזונות מבושלים (ללא שמן)</h1>
                        <label htmlFor="productAmount">
                                כמות נאכלת:
                                <input
                                        name='productAmount'
                                        type="number"
                                        id="productAmount"
                                        min="0"
                                        max="1000"
                                        step="0.5"
                                        value={productAmount}
                                        onChange={handleAmount}
                                />
                        </label>
                        <br />
                        <label>
                                סוג המזון המבושל:
                                <input list="productName"
                                        defaultValue={productName}
                                        onChange={handleProduct}
                                        onClick={handleClear}
                                        onFocus={handleClear}
                                />
                                <datalist id="productName">
                                        {
                                                products.map((product) => (
                                                        <option key={product.details?.productName} name="productName" value={product.details?.productName}>
                                                                {product.details?.measure}
                                                        </option>
                                                ))
                                        }
                                </datalist>
                        </label>
                        <br /><br />
                        <div className='div1'>
                                מספר מנות:
                                {result}
                        </div>
                        <button type="submit">חשב</button>
                </form >
        );
};

export default CookedFoods;