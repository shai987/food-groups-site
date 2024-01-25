// import react state
import { useState, useEffect } from 'react';
// import service 
import vegetables from '../../services/Vegetables/vegetables';
// import variables 
import { variables, userAgent } from '../variables';
// import container 
import FormFrame from '../FormFrame';
// import css
import '../../assets/css/basic.css';

const Vegetable = () => {
        // Use userAgent to manipulate in order to use different elements in different browsers
        const isFirefox = userAgent.isFirefox;
        const isSafari = userAgent.isSafari;

        // My states 
        const [typesName] = useState(vegetables);
        const [typeName, setTypeName] = useState(vegetables[0]['details']['typeName']);
        const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
        const [productAmount, setProductAmount] = useState(1);
        const [result, setResult] = useState('');

        // Get typeName object 
        const type = typesName.find(type => type?.details?.typeName === typeName);

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
                const count = (amount / type?.details?.value).toLocaleString(variables?.numberFormat);

                // Match count with NEGLIGIBLE_NUMBER
                const calculationCountFraction = ` ${count}`;
                // Calculate count reasult using toFraction 
                const calculationCount = ` ${variables?.fractionCalculation(count)}`;

                if (type) {
                        return calculationCountFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationCount : ' זניח';
                }
                else {
                        return alert(variables.stringAlert);
                }
        };

        const handleAmount = (event) => {
                setProductAmount(event.target.value);
        };

        const handleProductType = (event) => {
                setTypeName(event.target.value);
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
                                        <h1>ירקות</h1>
                                        <label>
                                                חישוב לפי כמות:
                                                {viewportWidth <= 600 || isSafari ? (
                                                        <select
                                                                value={typeName}
                                                                onChange={handleProductType}
                                                        >
                                                                {typesName.map((type) => (
                                                                        <option key={type?.details?.typeName} name="typeName" value={type?.details?.typeName}>
                                                                                {type?.details?.typeName}
                                                                        </option>
                                                                ))}
                                                        </select>

                                                ) : (
                                                        <>
                                                                <input list="typeName"
                                                                        defaultValue={typeName}
                                                                        onChange={handleProductType}
                                                                        onClick={handleClear}
                                                                        onFocus={handleClear}
                                                                />
                                                                <datalist id="typeName">
                                                                        {
                                                                                typesName.map((type) => (
                                                                                        <option key={type?.details?.typeName} name="typeName" value={type?.details?.typeName}>
                                                                                                {type?.details?.typeName}
                                                                                        </option>
                                                                                ))
                                                                        }
                                                                </datalist>
                                                        </>
                                                )}
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

export default Vegetable;