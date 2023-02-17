import { useState } from 'react';
import breads from '../services/Grains&Bakery/breads';
import '../assets/css/basic.css';

const Breads = () => {
        const [products] = useState(breads);
        const [productName, setProductName] = useState(breads[0]['details']['productName']);
        const [productAmount, setProductAmount] = useState(1);
        const [result, setResult] = useState('');

        const calculateValue = (productName, amount) => {
                // Get the product object 
                const product = products.find(product => product.details?.productName === productName);
                // For basic reasult multiplication operation
                const productMultiplication = ` ${(amount * product.details?.calculationValue).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
                // For basic reasult division operation
                const productDivision = ` ${(amount / product.details?.calculationValue).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

                switch (productName) {
                        case 'לחם לבן/שחור/חלה/חי':
                        case 'מצה קלה':
                        case 'פיתה ביס':
                        case 'לחמנייה קטנה':
                        case 'מצה רגילה':
                        case 'לחמנייה גדולה':
                        case 'פיתה גדולה':
                        case 'בייגלה עגול':
                        case 'פיתה רגילה':
                                return productMultiplication;
                        case 'לחם דל קלוריות':
                        case 'פת מצה':
                        case 'פתית/לחמית':
                        case 'פריכיות אורז':
                                return productDivision;
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
                        <h1>לחמים</h1>
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
                                סוג הלחם:
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

export default Breads;