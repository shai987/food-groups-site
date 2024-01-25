// import react state
import { useState, useEffect } from 'react';
// import service 
import lite from '../../services/Meat&Substitutes/lite';
// import variables 
import { variables, userAgent } from '../variables';
// import container 
import FormFrame from '../FormFrame';
// import css
import '../../assets/css/basic.css';


const Lite = () => {
        // Use userAgent to manipulate in order to use different elements in different browsers
        const isFirefox = userAgent.isFirefox;
        const isSafari = userAgent.isSafari;

        // My states 
        const [products] = useState(lite);
        const [productName, setProductName] = useState(lite[0]['details']['productName']);
        const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
        const [productAmount, setProductAmount] = useState(1);
        const [result, setResult] = useState('');

        // Get the product object 
        const product = products.find(product => product?.details?.productName === productName);

        useEffect(() => {
                // Add event listener on mount
                window.addEventListener('resize', handleResize);

                // Clean up the event listener on unmount
                return () => {
                        window.removeEventListener('resize', handleResize);
                };
        }, []);

        // My handlers
        const calculateValue = (amount) => {
                // Calculate count 
                const count = (amount / product?.details?.value).toLocaleString(variables?.numberFormat);
                // Calculate fatString0 
                const fatString0 = `${product?.fat?.fatString.split(" יש להוריד ")[0]} יש להוריד`;
                // Calculate fatString1 
                const fatString1 = product?.fat?.fatString.split(" יש להוריד ")[1];

                // Match count with NEGLIGIBLE_NUMBER
                const calculationCountFraction = ` ${count}`;
                // Calculate count bread reasult using toFraction 
                const calculationCountBread = ` ${variables?.fractionCalculation(count)}\n ${fatString0} ${variables?.fractionCalculation(count)} ${fatString1}`;

                if (product) {
                        return calculationCountFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationCountBread : ' זניח';
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
                        setResult(calculateValue(productAmount));
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
                                        <h1>תחליפי בשר - לייט</h1>
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
                                                {viewportWidth <= 600 || isSafari ? (
                                                        <select
                                                                value={productName}
                                                                onChange={handleProduct}
                                                        >
                                                                {products.map((product) => (
                                                                        <option key={product?.details?.productName} value={product?.details?.productName}>
                                                                                {`${product?.details?.productName} ${product?.unit?.measureString}`}
                                                                        </option>
                                                                ))}
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
                                                                                        <option key={product?.details?.productName} name="productName" value={product?.details?.productName}>
                                                                                                {product?.unit?.measureString}
                                                                                        </option>
                                                                                ))
                                                                        }
                                                                        {
                                                                                isFirefox && products.map((product) => (
                                                                                        <option key={product?.details?.productName} name="productName" value={product?.details?.productName}>
                                                                                                {`${product?.details?.productName} ${product?.unit?.measureString}`}
                                                                                        </option>
                                                                                ))
                                                                        }
                                                                </datalist>
                                                        </>
                                                )}
                                        </label>
                                        <br /><br />
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

export default Lite;