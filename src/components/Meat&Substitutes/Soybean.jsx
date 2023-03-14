import { useState } from 'react';
import soybean from '../../services/Meat&Substitutes/soybean';
import '../../assets/css/basic.css';
// Library that parse decimals into fractions  
import { toFraction } from 'fraction-parser';

const Soybean = () => {
        // My states 
        const [products] = useState(soybean);
        const [productName, setProductName] = useState(soybean[0]['details']['productName']);
        const [productAmount, setProductAmount] = useState(1);
        const [result, setResult] = useState('');

        // Get the product object 
        const product = products.find(product => product?.details?.productName === productName);

        // My handlers
        const calculateValue = (amount) => {
                const numberFormat = { minimumFractionDigits: 2, maximumFractionDigits: 2 };
                const negligibleNumber = 0.25;
                // Basic calculate count reasult 
                const productCalculationCount = ` ${(amount / product?.details?.value).toLocaleString(numberFormat)}`;
                // Calculate count bread reasult  
                const productCalculationCountBread = ` ${(amount / product?.details?.value).toLocaleString(numberFormat)}\n ${product?.bread?.breadString.split(" יש להוסיף ")[0]} יש להוסיף ${(amount / product?.bread?.breadCalculation).toLocaleString(numberFormat)} ${product?.bread?.breadString.split(" יש להוסיף ")[1]}`;

                if (product) {
                        if (product?.check?.bread) {
                                return productCalculationCountBread >= negligibleNumber ? productCalculationCountBread : ' זניח';
                        }
                        else {
                                return productCalculationCount >= negligibleNumber ? productCalculationCount : ' זניח';
                        }
                }
                else {
                        return alert('הערך שהוזן אינו קיים');
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
                try {
                        setResult(toFraction(calculateValue(productAmount), { useUnicodeVulgar: true }));
                }
                catch {
                        setResult('זניח');
                }
        };

        return (
                <form onSubmit={handleSubmit}>
                        <h1>תחליפי בשר - מוצרי סויה מוכנים</h1>
                        <label htmlFor="productAmount">
                                כמות נאכלת:
                                <input
                                        name='productAmount'
                                        type="number"
                                        id="productAmount"
                                        min="0"
                                        max="1000"
                                        step="any"
                                        value={productAmount}
                                        onChange={handleAmount}
                                />
                        </label>
                        <br /><br />
                        <label>
                                סוג המוצר:
                                <input list="productName"
                                        defaultValue={productName}
                                        onChange={handleProduct}
                                        onClick={handleClear}
                                        onFocus={handleClear}
                                />
                                <datalist id="productName">
                                        {
                                                products.map((product) => (
                                                        <option key={product?.details?.productName} name="productName" value={product?.details?.productName}>
                                                                {product?.unit?.measureString}
                                                        </option>
                                                ))
                                        }
                                </datalist>
                        </label>
                        <br /><br />
                        <div className='div1'>
                                מספר מנות:
                                <p className='result'>{result}</p>
                        </div>
                        <button type="submit">חשב</button>
                </form >
        );
};

export default Soybean;