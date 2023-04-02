// import react state
import { useState } from 'react';
// import service 
import flours from '../../services/Grains&Bakery/flours';
// import variables 
import { variables } from '../variables';
// import container 
import FormFrame from '../FormFrame';
// import css
import '../../assets/css/basic.css';

const Flour = () => {
        //  array of type calculation
        const types = ['כמות', 'גרם'];

        // My states  
        const [products] = useState(flours);
        const [productName, setProductName] = useState(flours[0]['details']['productName']);
        const [productType, setProductType] = useState(types[0]);
        const [productAmount, setProductAmount] = useState(1);
        const [result, setResult] = useState('');

        // Get the product object 
        const product = products.find(product => product?.details?.productName === productName);
        // Get array of type
        const type = types.find(type => type === productType);

        // My handlers
        const calculateValue = (amount, productType) => {
                // Calculate count 
                const count = (amount / product?.details?.value).toLocaleString(variables?.numberFormat);
                // Calculate gram 
                const gram = (amount / product?.details?.gram).toLocaleString(variables?.numberFormat);

                // Match count with NEGLIGIBLE_NUMBER
                const calculationCountFraction = ` ${count}`;
                // Calculate count reasult using toFraction 
                const calculationCount = ` ${variables?.fractionCalculation(count)}`;

                // Match gram with NEGLIGIBLE_NUMBER
                const calculationGramFraction = ` ${gram}`;
                // Calculate gram reasult using toFraction 
                const calculationGram = ` ${variables?.fractionCalculation(gram)}`;

                if (product && type) {
                        return productType === types[0] && calculationCountFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationCount
                                : productType === types[1] && calculationGramFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationGram
                                        : 'זניח';
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

        const handleProductType = (event) => {
                setProductType(event.target.value);
        };

        // Clean input field when click it 
        const handleClear = (event) => {
                event.target.value = "";
        };

        const handleSubmit = (e) => {
                // Prevent reload the page
                e.preventDefault();
                try {
                        setResult(calculateValue(productAmount, productType));
                }
                catch (err) {
                        console.log(err.message);
                        setResult('קיימת בעיה, במקרה והיא חוזרת אנא פנה לבונה האתר');
                }
        };

        return (
                <>
                        <FormFrame>
                                <form onSubmit={handleSubmit}>
                                        <h1>קמחים (לא מבושל)</h1>
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
                                        <br /><br />
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
                                        <br /><br />
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
                                                                        <option key={product?.details?.productName} name="productName" value={product?.details?.productName}>
                                                                                {productType === 'כמות' ? product?.unit?.measureString : product?.unit?.gramString}
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
                        </FormFrame>
                </>
        );
};

export default Flour;