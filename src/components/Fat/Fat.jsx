import { useState, useEffect } from 'react';
import fats from '../../services/Fats/fats';
import '../../assets/css/basic.css';
// Library that parse decimals into fractions  
import { toFraction } from 'fraction-parser';

const Fat = () => {
        //  array of type calculation
        const types = ['כמות', 'גרם'];

        // My states 
        const [products] = useState(fats);
        const [productName, setProductName] = useState(fats[0]['details']['productName']);
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
        }, [productType, product]);

        // My handlers

        const calculateValue = (productName, amount, productType, productValues) => {

                const numberFormat = { minimumFractionDigits: 2, maximumFractionDigits: 2 };
                const fractionFormat = { useUnicodeVulgar: true };

                const count = (amount / product?.details?.value1).toLocaleString(numberFormat);
                const countValue2 = (amount / product?.details?.value2).toLocaleString(numberFormat);
                const gram = (amount / product?.details?.gram).toLocaleString(numberFormat);
                const message = product?.details?.message;
                const sugar = (amount / product?.sugar?.sugarCalculation).toLocaleString(numberFormat);
                const sugarGram = (amount / product?.sugar?.sugarCalculationGram).toLocaleString(numberFormat);
                const sugarString0 = `${product?.sugar?.sugarString.split(" יש להוסיף ")[0]} יש להוסיף`;
                const sugarString1 = product?.sugar?.sugarString.split(" יש להוסיף ")[1];

                const NEGLIGIBLE_NUMBER = 0.25;

                // Use to comparison count with NEGLIGIBLE_NUMBER
                const calculationCountFraction = ` ${count}`;
                // Calculate count reasult using toFraction 
                const calculationCount = ` ${toFraction(Number(count) || 0, fractionFormat)}`;
                // Calculate count message reasult using toFraction 
                const calculationCountMessage = ` ${toFraction(Number(count) || 0, fractionFormat)}\n ${message}`;
                // Calculate count sugar reasult using toFraction  
                const calculationCountSugar = ` ${toFraction(Number(count) || 0, fractionFormat)}\n ${sugarString0} ${toFraction(Number(sugar) || 0, fractionFormat)} ${sugarString1}`;
                // Use to comparison count value with NEGLIGIBLE_NUMBER
                const calculationCountValueFraction = ` ${countValue2}`;
                // Calculate count value2 reasult using toFraction 
                const calculationCountValue2 = ` ${toFraction(Number(countValue2) || 0, fractionFormat)}`;

                // Use to comparison gram with NEGLIGIBLE_NUMBER
                const calculationGramFraction = ` ${gram}`;
                // Calculate gram reasult using toFraction 
                const calculationGram = ` ${toFraction(Number(gram) || 0, fractionFormat)}`;
                // Calculate gram sugar reasult using toFraction 
                const calculationGramSugar = ` ${toFraction(Number(gram) || 0, fractionFormat)}\n ${sugarString0} ${toFraction(Number(sugarGram) || 0, fractionFormat)} ${sugarString1}`;
                // Calculate gram  message reasult using toFraction 
                const calculationGramMessage = ` ${toFraction(Number(gram) || 0, fractionFormat)}\n ${message}`;

                if (product && type && value) {
                        if (product?.check?.gram && product?.check?.sugar) {
                                return productType === types[0] && calculationCountFraction >= NEGLIGIBLE_NUMBER ? calculationCountSugar
                                        : productType === types[1] && calculationGramFraction >= NEGLIGIBLE_NUMBER ? calculationGramSugar
                                                : ' זניח';
                        }
                        else if (product?.check?.gram && product?.check?.message) {
                                return productType === types[0] && calculationCountFraction >= NEGLIGIBLE_NUMBER ? calculationCountMessage
                                        : productType === types[1] && calculationGramFraction >= NEGLIGIBLE_NUMBER ? calculationGramMessage
                                                : ' זניח';
                        }
                        else if (product?.check?.gram && product?.check?.value) {
                                if (productType === types[0]) {
                                        return productValues === values[0] && calculationCountFraction >= NEGLIGIBLE_NUMBER ? calculationCount
                                                : productValues === values[1] && calculationCountValueFraction >= NEGLIGIBLE_NUMBER ? calculationCountValue2
                                                        : ' זניח';
                                }
                                else {
                                        return calculationGramFraction >= NEGLIGIBLE_NUMBER ? calculationGram : ' זניח';
                                }
                        }
                        else if (product?.check?.gram) {
                                return productType === types[0] && calculationCountFraction >= NEGLIGIBLE_NUMBER ? calculationCount
                                        : productType === types[1] && calculationGramFraction >= NEGLIGIBLE_NUMBER ? calculationGram
                                                : 'זניח';
                        }
                        else {
                                return productType === types[1] ? ` לא ניתן לבצע חישוב לפי גרמים לערך ${productName} `
                                        : calculationCountFraction >= NEGLIGIBLE_NUMBER ? calculationCount
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
                        setResult(calculateValue(productName, productAmount, productType, productValues));
                }
                catch (err) {
                        console.log(err.message);
                        setResult('קיימת בעיה, במקרה והיא חוזרת אנא פנה לבונה האתר');
                }
        };

        return (
                <form onSubmit={handleSubmit}>
                        <h1>שומן</h1>
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
                                                                {productType === types[0] ? product?.unit?.measureString : product?.unit?.gramString}
                                                        </option>
                                                ))
                                        }
                                </datalist>
                        </label>
                        <br /><br />
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
                        <div className='div1' >
                                מספר מנות:
                                <p className='result'>{result}</p>

                        </div>
                        <button type="submit">חשב</button>
                </form >
        );
};

export default Fat;