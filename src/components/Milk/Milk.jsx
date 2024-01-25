// import react states
import { useState, useEffect } from 'react';
// import service 
import milk from '../../services/Milk/milk';
// import variables 
import { variables, userAgent } from '../variables';
// import container 
import FormFrame from '../FormFrame';
// import css
import '../../assets/css/basic.css';

const Milk = () => {
        // Use userAgent to manipulate in order to use different elements in different browsers
        const isFirefox = userAgent.isFirefox;
        const isSafari = userAgent.isSafari;

        // array of type calculation
        const types = ['כמות', 'גרם'];

        // My states 
        const [products] = useState(milk);
        const [productName, setProductName] = useState(milk[0]['details']['productName']);
        const [productType, setProductType] = useState(types[0]);
        const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
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

        useEffect(() => {
                // Add event listener on mount
                window.addEventListener('resize', handleResize);

                // Clean up the event listener on unmount
                return () => {
                        window.removeEventListener('resize', handleResize);
                };
        }, []);

        // My handlers
        const calculateValue = (productName, amount, productType, productValues) => {
                // Calculate count 
                const count = (amount / product?.details?.value1).toLocaleString(variables?.numberFormat);
                // Calculate countValue2 
                const countValue2 = (amount / product?.details?.value2).toLocaleString(variables?.numberFormat);
                // Calculate gram 
                const gram = (amount / product?.details?.gram).toLocaleString(variables?.numberFormat);
                // Calculate message 
                const message = product?.details?.message;
                // Calculate sugar 
                const sugar = (amount / product?.sugar?.sugarCalculation).toLocaleString(variables?.numberFormat);
                // Calculate sugarGram 
                const sugarGram = (amount / product?.sugar?.sugarCalculationGram).toLocaleString(variables?.numberFormat);
                // Calculate sugarString0 
                const sugarString0 = `${product?.sugar?.sugarString.split(" יש להוסיף ")[0]} יש להוסיף`;
                // Calculate sugarString1 
                const sugarString1 = product?.sugar?.sugarString.split(" יש להוסיף ")[1];

                // Match count with NEGLIGIBLE_NUMBER
                const calculationCountFraction = ` ${count}`;
                // Calculate count reasult using toFraction 
                const calculationCount = ` ${variables?.fractionCalculation(count)}`;
                // Calculate count message reasult using toFraction 
                const calculationCountMessage = ` ${variables?.fractionCalculation(count)}\n ${message}`;
                // Calculate count Value2 message reasult using toFraction 
                const calculationCountValue2Message = ` ${variables?.fractionCalculation(countValue2)}\n ${message}`;
                // Calculate count sugar reasult using toFraction  
                const calculationCountSugar = ` ${variables?.fractionCalculation(count)}\n ${sugarString0} ${variables?.fractionCalculation(sugar)} ${sugarString1}`;
                // Use to comparison count value with NEGLIGIBLE_NUMBER
                const calculationCountValueFraction = ` ${countValue2}`;
                // Calculate count value2 reasult using toFraction 
                const calculationCountValue2 = ` ${variables?.fractionCalculation(countValue2)}`;

                // Match gram with NEGLIGIBLE_NUMBER
                const calculationGramFraction = ` ${gram}`;
                // Calculate gram reasult using toFraction 
                const calculationGram = ` ${variables?.fractionCalculation(gram)}`;
                // Calculate gram sugar reasult using toFraction 
                const calculationGramSugar = ` ${variables?.fractionCalculation(gram)}\n ${sugarString0} ${variables?.fractionCalculation(sugarGram)} ${sugarString1}`;
                // Calculate gram message reasult using toFraction 
                const calculationGramMessage = ` ${variables?.fractionCalculation(gram)}\n ${message}`;

                if (product && type && value) {
                        if (product?.check?.sugar) {
                                return productType === types[0] && calculationCountFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationCountSugar
                                        : productType === types[1] && calculationGramFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationGramSugar
                                                : ' זניח';
                        }
                        else if (product?.check?.count && product?.check?.message && !product?.check?.value) {
                                return productType === types[0] && calculationCountFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationCountMessage
                                        : productType === types[1] && calculationGramFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationGramMessage
                                                : ' זניח';
                        }
                        else if (!product?.check?.count && product?.check?.message) {
                                return productType === types[0] ? ` לא ניתן לבצע חישוב לפי כמות לערך ${productName} `
                                        : calculationGramFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationGramMessage
                                                : 'זניח';
                        }
                        else if (product?.check?.value && product?.check?.message) {
                                if (productType === types[0]) {
                                        return productValues === values[0] && calculationCountFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationCountMessage
                                                : productValues === values[1] && calculationCountValueFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationCountValue2Message
                                                        : ' זניח';
                                }
                                else {
                                        return calculationGramFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationGramMessage : ' זניח';
                                }
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
                        else if (product?.check?.count) {
                                return productType === types[0] && calculationCountFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationCount
                                        : productType === types[1] && calculationGramFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationGram
                                                : 'זניח';
                        }
                        else {
                                return productType === types[0] ? ` לא ניתן לבצע חישוב לפי כמות לערך ${productName} `
                                        : calculationGramFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationGram
                                                : 'זניח';
                        }
                }
                else {
                        return alert(variables.stringAlert);
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

        const handleResize = () => {
                setViewportWidth(window.innerWidth);
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
                        setResult(variables.stringResult);
                }
        };

        return (
                <>
                        <FormFrame>
                                <form onSubmit={handleSubmit}>
                                        <h1>חלב</h1>
                                        <label>
                                                חישוב לפי כמות או גרמים:
                                                {viewportWidth <= 600 || isSafari ? (
                                                        <select
                                                                name='productType'
                                                                value={productType}
                                                                onChange={handleProductType}
                                                        >
                                                                {
                                                                        types.map((type) => (
                                                                                <option key={type} name="productType" value={type}>
                                                                                        {type}
                                                                                </option>
                                                                        ))
                                                                }
                                                        </select>
                                                ) : (
                                                        <>
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
                                                        </>
                                                )}
                                        </label>
                                        <br />
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
                                        <br />
                                        <label>
                                                סוג מוצר החלב:
                                                {viewportWidth <= 600 || isSafari ? (
                                                        <select
                                                                value={productName}
                                                                onChange={handleProduct}
                                                        >
                                                                {products.map((product) => {
                                                                        const shouldShowOption = (product?.check?.gram && productType === types[1])
                                                                                || productType === types[0];
                                                                        return shouldShowOption ? (
                                                                                <option
                                                                                        key={product?.details?.productName}
                                                                                        value={product?.details?.productName}
                                                                                >
                                                                                        {
                                                                                                productType === types[0]
                                                                                                        ? `${product?.details?.productName} ${product?.unit?.measureString}`
                                                                                                        : `${product?.details?.productName} ${product?.unit?.gramString}`
                                                                                        }
                                                                                </option>
                                                                        ) : null;
                                                                })}
                                                        </select>
                                                ) : (
                                                        <>
                                                                <input list="productName"
                                                                        defaultValue={productName}
                                                                        onChange={handleProduct}
                                                                        onClick={handleClear}
                                                                        onFocus={handleClear}
                                                                />
                                                                <datalist id="productName">
                                                                        {
                                                                                !isFirefox && products.map((product) => (
                                                                                        <option
                                                                                                key={product?.details?.productName}
                                                                                                name="productName"
                                                                                                value={product?.check?.count && productType === types[0] ? product?.details?.productName
                                                                                                        : productType === types[1] ? product?.details?.productName
                                                                                                                : ''}>
                                                                                                {productType === types[0] ? product?.unit?.measureString : product?.unit?.gramString}
                                                                                        </option>
                                                                                ))
                                                                        }
                                                                        {
                                                                                isFirefox && products.map((product) => {
                                                                                        const shouldShowOption = (product?.check?.gram && productType === types[1])
                                                                                                || productType === types[0];
                                                                                        return shouldShowOption ? (
                                                                                                <option
                                                                                                        key={product?.details?.productName}
                                                                                                        value={product?.details?.productName}
                                                                                                >
                                                                                                        {
                                                                                                                productType === types[0]
                                                                                                                        ? `${product?.details?.productName} ${product?.unit?.measureString}`
                                                                                                                        : `${product?.details?.productName} ${product?.unit?.gramString}`
                                                                                                        }
                                                                                                </option>
                                                                                        ) : null;
                                                                                })
                                                                        }
                                                                </datalist>
                                                        </>
                                                )}
                                        </label>
                                        <br />
                                        {product?.check?.value === true && productType === types[0] && <div>
                                                <label>
                                                        בחירת סוג חישוב כמות
                                                        {viewportWidth <= 600 || isSafari ? (
                                                                <select
                                                                        value={productValues || ''}
                                                                        onChange={handleProductValues}
                                                                >
                                                                        {
                                                                                values.map((value) => (
                                                                                        <option key={value} name="productValues" value={value || ''}>
                                                                                                {value}
                                                                                        </option>
                                                                                ))
                                                                        }
                                                                </select>
                                                        ) : (
                                                                <>
                                                                        <input list="productValues"
                                                                                value={productValues || ''}
                                                                                onChange={handleProductValues}
                                                                                onClick={handleClear}
                                                                                onFocus={handleClear}
                                                                        />
                                                                        <datalist id="productValues">
                                                                                {
                                                                                        values.map((value) => (
                                                                                                <option key={value} id="productValues" name="productValues" value={value || ''}>
                                                                                                        {value}
                                                                                                </option>
                                                                                        ))
                                                                                }
                                                                        </datalist>
                                                                </>
                                                        )}
                                                </label>
                                        </div>}
                                        <br />
                                        <div className='div1'>
                                                מספר מנות:
                                                <p className='result'>{result}</p>
                                        </div>
                                        <button type="submit">חשב</button>
                                </form >
                        </FormFrame >
                </>
        );
};

export default Milk;