import { useState } from 'react';
import flours from '../services/Grains&Bakery/flours';
import '../assets/css/basic.css';

const Flour = () => {
        const [products] = useState(flours);
        const [productName, setProductName] = useState(flours[0]['details']['productName']);
        const [productAmount, setProductAmount] = useState(1);
        const [result, setResult] = useState('');

        const calculateValue = (productName, amount) => {
                // Get the product object 
                const product = products.find(product => product.details?.productName === productName);
                // For basic reasult division operation
                const productDivision = ` ${(amount / product.details?.calculationValue).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
                switch (productName) {
                        case 'קמח חיטה לבן/מלא קמח תירס/קמח אורז':
                        case 'עמילן תירס/עמילן תפוחי אדמה':
                        case 'פרורי לחם/קמח מצה':
                        case 'סולת':
                        case 'שיבולת שועל':
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
                        <h1>קמחים (לא מבושל)</h1>
                        <label htmlFor="productAmount">
                                כמות נצרכת:
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
                                סוג הקמח:
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

export default Flour;