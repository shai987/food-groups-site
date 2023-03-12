import { useState } from 'react';
import milk from '../../services/Milk/milk';
import '../../assets/css/basic.css';

const Milk = () => {
        //  array of type calculation
        const types = ['כמות', 'גרם'];
        // My states 
        const [products] = useState(milk);
        const [productName, setProductName] = useState(milk[0]['details']['productName']);
        const [productType, setProductType] = useState(types[0]);
        // Get the product object 
        const product = products.find(product => product?.details?.productName === productName);
        //  array of value calculation
        const values = [product?.unit?.measureString1, product?.unit?.measureString2];
        const [productValues, setProductValues] = useState(values[0]);
        const [productAmount, setProductAmount] = useState(1);
        const [result, setResult] = useState('');

        // My handlers
        const calculateValue = (productName, amount, productType, productValues) => {
                // Get the product object 
                const product = products.find(product => product?.details?.productName === productName);
                // Basic calculate count reasult 
                const productCalculationCount = ` ${(amount / product?.details?.value).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
                // Calculate count reasult + message
                const productCalculationCountMessage = ` ${(amount / product?.details?.value).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}\n ${product?.details?.message}`;
                // Calculate count-sugar reasult  
                const productCalculationCountSugar = ` ${(amount / product?.details?.value).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}\n ${product?.sugar?.sugarString.split(" יש להוסיף ")[0]} יש להוסיף ${(amount / product?.sugar?.sugarCalculation).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${product?.sugar?.sugarString.split(" יש להוסיף ")[1]}`;
                // Calculate count value1 reasult  
                const productCalculationCountValue1 = ` ${(amount / product?.details?.value?.value1).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
                // Calculate count value2 reasult  
                const productCalculationCountValue2 = ` ${(amount / product?.details?.value?.value2).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
                // Basic calculate gram reasult
                const productCalculationGram = ` ${(amount / product?.details?.gram).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
                // Calculate gram-sugar reasult
                const productCalculationGramSugar = ` ${(amount / product?.details?.gram).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}\n ${product?.sugar?.sugarString.split(" יש להוסיף ")[0]} יש להוסיף ${(amount / product?.sugar?.sugarCalculationGram).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${product?.sugar?.sugarString.split(" יש להוסיף ")[1]}`;
                // Calculate gram message reasult
                const productCalculationGramMessage = ` ${(amount / product?.details?.gram).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}\n ${product?.details?.message} `;

                if (product) {
                        if (product?.check?.sugar) {
                                return productType === types[0] ? productCalculationCountSugar : productCalculationGramSugar;
                        }
                        else if (product?.check?.count && product?.check?.message && !product?.check?.value) {
                                return productType === types[0] ? productCalculationCountMessage : productCalculationGramMessage;
                        }
                        else if (!product?.check?.count && product?.check?.message) {
                                return productType === types[0] ? ` לא ניתן לבצע חישוב לפי כמות לערך ${productName}` : productCalculationGramMessage;
                        }
                        else if (product?.check?.value && product?.check?.message) {
                                if (productType === types[0])
                                        return productValues === values[0] ? productCalculationCountValue1 : productCalculationCountValue2;
                                else
                                        return productCalculationGram;
                        }
                        else if (product?.check?.value) {
                                if (productType === types[0])
                                        return productValues === values[0] ? productCalculationCountValue1 : productCalculationCountValue2;
                                else
                                        return productCalculationGram;
                        }
                        else if (product?.check?.count) {
                                return productType === types[0] ? productCalculationCount : productCalculationGram;
                        }
                        else {
                                return productType === types[0] ? ` לא ניתן לבצע חישוב לפי כמות לערך ${productName}` : productCalculationGram;
                        }
                }
                else {
                        return alert('המוצר לא קיים');
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
                setResult(calculateValue(productName, productAmount, productType, productValues));
        };

        return (
                <form onSubmit={handleSubmit}>
                        <h1>חלב</h1>
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
                                                defaultValue={productValues}
                                                onChange={handleProductValues}
                                                onClick={handleClear}
                                                onFocus={handleClear}
                                        />
                                        <datalist id="productValues">
                                                {
                                                        values.map((type) => (
                                                                <option key={type} name="productValues" value={type}>
                                                                        {type}
                                                                </option>
                                                        ))
                                                }
                                        </datalist>
                                </label>
                        </div>}
                        <br />
                        <div className='div1'>
                                מספר מנות:
                                {result}
                        </div>
                        <button type="submit">חשב</button>
                </form >
        );
};

export default Milk;