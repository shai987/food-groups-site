// import react states
import { useState, useEffect } from 'react';
// import service 
import lowFatMilk from '../../services/LowFatMilk/lowFatMilk';
// import variables 
import { variables } from '../variables';
// import container 
import FormFrame from '../FormFrame';
// import css
import '../../assets/css/basic.css';
const LowFatMilk = () => {
        //  array of type calculation
        const types = ['כמות', 'גרם'];

        // My states  
        const [products] = useState(lowFatMilk);
        const [productName, setProductName] = useState(lowFatMilk[0]['details']['productName']);
        const [productType, setProductType] = useState(types[0]);
        // Get the product object 
        const product = products.find(product => product?.details?.productName === productName);
        //  array of value calculation
        const values = [product?.unit?.measures[0], product?.unit?.measures[1]];
        const [productValues, setProductValues] = useState(values[0]);
        const [productAmount, setProductAmount] = useState(1);
        const [result, setResult] = useState('');

        // Get array of type
        const type = types.find(type => type === productType);
        // Get array of value
        const value = values.find(value => value === productValues);

        useEffect(() => {
                if (values[0]) {
                        setProductValues(values[0]);
                }
                else {
                        setProductValues(values[1]);
                }
        }, [product]);

        // My handlers
        const calculateValue = (amount, productType, productValues) => {
                // Calculate count 
                const count = (amount / product?.details?.value1).toLocaleString(variables?.numberFormat);
                // Calculate countValue2 
                const countValue2 = (amount / product?.details?.value2).toLocaleString(variables?.numberFormat);
                // Calculate gram 
                const gram = (amount / product?.details?.gram).toLocaleString(variables?.numberFormat);
                // Calculate message 
                const message = product?.details?.message;

                // Match count with NEGLIGIBLE_NUMBER
                const calculationCountFraction = ` ${count}`;
                // Calculate count reasult using toFraction 
                const calculationCount = ` ${variables?.fractionCalculation(count)}`;
                // Calculate count message reasult using toFraction 
                const calculationCountMessage = ` ${variables?.fractionCalculation(count)}\n ${message}`;
                // Use to comparison count value with NEGLIGIBLE_NUMBER
                const calculationCountValueFraction = ` ${countValue2}`;
                // Calculate count value2 reasult using toFraction 
                const calculationCountValue2 = ` ${variables?.fractionCalculation(countValue2)}`;

                // Match gram with NEGLIGIBLE_NUMBER
                const calculationGramFraction = ` ${gram}`;
                // Calculate gram reasult using toFraction 
                const calculationGram = ` ${variables?.fractionCalculation(gram)}`;
                // Calculate gram message reasult using toFraction 
                const calculationGramMessage = ` ${variables?.fractionCalculation(gram)}\n ${message}`;

                if (product && type && value) {
                        if (product?.check?.message) {
                                return productType === types[0] && calculationCountFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationCountMessage
                                        : productType === types[1] && calculationGramFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationGramMessage
                                                : ' זניח';
                        }
                        else if (product?.check?.value) {
                                if (productType === types[0]) {
                                        return productValues === values[0] && calculationCountFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationCount
                                                : productValues === values[1] && calculationCountValueFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationCountValue2
                                                        : ' זניח';
                                }
                                else {
                                        return calculationGramFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationGram : ' זניח';
                                }
                        }
                        else {
                                return productType === types[0] && calculationCountFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationCount
                                        : productType === types[1] && calculationGramFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationGram
                                                : 'זניח';
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

        const handleProductType = (event) => {
                setProductType(event.target.value);
        };

        const handleProductValues = (event) => {
                setProductValues(event.target.value);
        };

        // Clean input field when click it 
        const handleClear = (event) => {
                event.target.value = "";
        };

        const handleSubmit = (e) => {
                // Prevent reload the page
                e.preventDefault();
                try {
                        setResult(calculateValue(productAmount, productType, productValues));
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
                                        <h1>חלב דל שומן</h1>
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
                                                                                {productType === types[0] ? product?.unit?.measureString : product?.unit?.gramString}
                                                                        </option>
                                                                ))
                                                        }
                                                </datalist>
                                        </label>
                                        <br />
                                        {product?.check?.value === true && productType === types[0] && <div>
                                                <label>
                                                        בחירת סוג חישוב כמות
                                                        <input list="productValues"
                                                                value={productValues || ''}
                                                                onChange={handleProductValues}
                                                                onClick={handleClear}
                                                                onFocus={handleClear}
                                                        />
                                                        <datalist id="productValues">
                                                                {
                                                                        values.map((value) => (
                                                                                <option key={value} name="productValues" value={value || ''}>
                                                                                        {value}
                                                                                </option>
                                                                        ))
                                                                }
                                                        </datalist>
                                                </label>
                                        </div>}
                                        <br />
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

export default LowFatMilk;