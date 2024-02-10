// import react state
import { useState, useEffect } from 'react';
// import from react-select
import Select from 'react-select';
// import service 
import soybean from '../../services/Meat&Substitutes/soybean';
// import variables 
import { variables } from '../variables';
// import container 
import FormFrame from '../FormFrame';
// import css
import '../../assets/css/basic.css';

const Soybean = () => {
        // My states 
        const [products] = useState(soybean);
        const [productName, setProductName] = useState(soybean[0]['details']['productName']);
        const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
        const [productAmount, setProductAmount] = useState(1);
        const [result, setResult] = useState('');
        const [flag, setFlag] = useState(false);
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
                // Calculate countBread 
                const countBread = (amount / product?.bread?.breadCalculation).toLocaleString(variables?.numberFormat);
                // Calculate breadString0 
                const breadString0 = `${product?.bread?.breadString.split(" יש להוסיף ")[0]} יש להוסיף`;
                // Calculate breadString1 
                const breadString1 = product?.bread?.breadString.split(" יש להוסיף ")[1];

                // Match count with NEGLIGIBLE_NUMBER
                const calculationCountFraction = ` ${count}`;
                // Calculate count reasult using toFraction 
                const calculationCount = ` ${variables?.fractionCalculation(count)}`;
                // Calculate count bread reasult  
                const calculationCountBread = ` ${variables?.fractionCalculation(count)}\n ${breadString0} ${variables?.fractionCalculation(countBread)} ${breadString1}`;

                if (isNaN(productAmount)) {
                        return alert(variables.stringProductAmount);
                }
                if (product) {
                        if (product?.check?.bread) {
                                return calculationCountFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationCountBread : ' זניח';
                        }
                        else {
                                return calculationCountFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationCount : ' זניח';
                        }
                }
                else {
                        return alert(variables.stringAlert);
                }
        };

        const handleProduct = (event) => {
                setProductName(event.target.value);
        };

        const handleProductPC = (selectedOption) => {
                setProductName(selectedOption ? selectedOption.value : null);
        };

        const handleAmount = (event) => {
                setProductAmount(event.target.value);
        };

        const handleResize = () => {
                setViewportWidth(window.innerWidth);
        };

        const handleSubmit = (e) => {
                // Prevent reload the page
                e.preventDefault();
                try {
                        setResult(calculateValue(productAmount));
                        setFlag(true);
                }
                catch (err) {
                        console.log(err.message);
                        setResult(variables.stringResult);
                }
        };

        const productsOptions = products.map((product) => ({
                value: product?.details?.productName,
                label: `${product?.details?.productName} ${product?.unit?.measureString}`
        }));

        return (
                <>
                        <FormFrame>
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
                                        <label>
                                                סוג המוצר:
                                                {viewportWidth <= 600 ? (
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
                                                        <Select
                                                                options={productsOptions}
                                                                isSearchable
                                                                isClearable
                                                                noOptionsMessage={() => variables.stringSelectProductNameNoOptionsMessage}
                                                                placeholder={variables.stringSelect}
                                                                value={productsOptions.find((option) => option.value === productName)}
                                                                onChange={handleProductPC}
                                                        />
                                                )}
                                        </label>
                                        <div className='div-result div-result-pc'>
                                                {flag === true && 'מספר מנות:'}
                                                <div className='result'>{result}</div>
                                        </div>
                                        <button type="submit">חשב</button>
                                </form >
                        </FormFrame >
                </>
        );
};

export default Soybean;