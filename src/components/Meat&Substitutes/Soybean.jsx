// import react state
import { useState } from 'react';
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
        const [productAmount, setProductAmount] = useState(1);
        const [result, setResult] = useState('');

        // Get the product object 
        const product = products.find(product => product?.details?.productName === productName);

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

                if (product) {
                        if (product?.check?.bread) {
                                return calculationCountFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationCountBread : ' זניח';
                        }
                        else {
                                return calculationCountFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationCount : ' זניח';
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
                        setResult(calculateValue(productAmount));
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
                        </FormFrame >
                </>
        );
};

export default Soybean;