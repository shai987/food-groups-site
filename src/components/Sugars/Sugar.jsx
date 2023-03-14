import { useState } from 'react';
import sugars from '../../services/Sugars/sugars';
import '../../assets/css/basic.css';
// Library that parse decimals into fractions  
import { toFraction } from 'fraction-parser';

const Sugar = () => {
        const types = ['כמות', 'גרם'];
        const [products] = useState(sugars);
        const [productName, setProductName] = useState(sugars[0]['details']['productName']);
        const [productType, setProductType] = useState(types[0]);
        const [productAmount, setProductAmount] = useState(1);
        const [result, setResult] = useState('');

        // Get the product object 
        const product = products.find(product => product?.details?.productName === productName);
        // Get array of type
        const type = types.find(type => type === productType);

        const calculateValue = (amount, productType) => {
                const numberFormat = { minimumFractionDigits: 2, maximumFractionDigits: 2 };
                const negligibleNumber = 0.25;
                // Calculate count reasult
                const productCalculationCount = ` ${(amount / product?.details?.value).toLocaleString(numberFormat)}`;
                // Calculate gram reasult
                const productCalculationGram = ` ${(amount / product?.details?.gram).toLocaleString(numberFormat)}`;

                if (product && type) {
                        const answer = productType === types[0] ? productCalculationCount : productCalculationGram;
                        return answer >= negligibleNumber ? answer : ' זניח';
                }
                else {
                        return alert('הערך שהוזן אינו קיים');
                }
        };

        const handleProduct = (event) => {
                setProductName(event.target.value);
        };

        const handleProductType = (event) => {
                setProductType(event.target.value);
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
                        setResult(toFraction(calculateValue(productAmount, productType), { useUnicodeVulgar: true }));
                }
                catch {
                        setResult('זניח');
                }
        };

        return (
                <form onSubmit={handleSubmit}>
                        <h1>סוכרים</h1>
                        <label>
                                חישוב לפי כמות או גרמים:
                                <input list="productType"
                                        defaultValue={productType}
                                        onChange={handleProductType}
                                        onClick={handleClear}
                                        onFocus={handleClear}
                                />
                                <datalist id="productType">
                                        {
                                                types.map((type) => (
                                                        <option key={type} name="productType" value={type}>
                                                                {type}
                                                        </option>
                                                ))
                                        }
                                </datalist>
                        </label>
                        <br />
                        <label htmlFor="productAmount">
                                כמות נצרכת:
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
                        <br />
                        <label>
                                סוג הסוכר:
                                <input list="productName14"
                                        defaultValue={productName}
                                        onChange={handleProduct}
                                        onClick={handleClear}
                                        onFocus={handleClear}
                                />
                                <datalist id="productName14">
                                        {
                                                products.map((product) => (
                                                        <option key={product?.details?.productName} name="productName" value={product?.details?.productName}>
                                                                {productType === types[0] ? product?.unit?.measureString : product?.unit?.gramString}
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

export default Sugar;