import { useState } from 'react';
import variance from '../../services/Grains&Bakery/variance';
import '../../assets/css/basic.css';

const Variance = () => {
        //  array of type calculation
        const types = ['כמות', 'גרם'];

        // My states 
        const [products] = useState(variance);
        const [productName, setProductName] = useState(variance[0]['details']['productName']);
        const [productType, setProductType] = useState(types[0]);
        const [productAmount, setProductAmount] = useState(1);
        const [result, setResult] = useState('');

        // My handlers
        const calculateValue = (productName, amount, productType) => {
                // Get the product object 
                const product = products.find(product => product.details?.productName === productName);
                // Basic calculate count reasult 
                const productCalculationCount = ` ${(amount / product.details?.value).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
                // Calculate count fat reasult 
                const productCalculationCountFat = ` ${(amount / product.details?.value).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}\n ${product.fat?.fatString.split(" יש להוסיף ")[0]} יש להוסיף ${(amount / product.details?.value).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${product.fat?.fatString.split(" יש להוסיף ")[1]}`;
                // Calculate count fat and sugar reasult  
                const productCalculationCountFatSugar = ` ${(amount / product.details?.value).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}\n ${product.fat?.fatString?.split(" יש להוסיף ")[0]} יש להוסיף ${(amount / product.details?.value).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${product.fat?.fatString?.split(" יש להוסיף ")[1]}\n ${product.sugar?.sugarString.split(" יש להוסיף ")[0]} יש להוסיף ${(amount / product?.sugar?.sugarCalculation).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${product.sugar?.sugarString.split(" יש להוסיף ")[1]}`;
                // Basic calculate gram reasult
                const productCalculationGram = ` ${(amount / product.details?.gram).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
                // Calculate gram fat reasult
                const productCalculationGramFat = ` ${(amount / product.details?.gram).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}\n ${product.fat?.fatString.split(" יש להוסיף ")[0]} יש להוסיף ${(amount / product.details?.gram).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${product.fat?.fatString.split(" יש להוסיף ")[1]}`;
                // Calculate gram fat and sugar reasult
                const productCalculationGramFatSugar = ` ${(amount / product.details?.gram).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}\n ${product.fat?.fatString?.split(" יש להוסיף ")[0]} יש להוסיף ${(amount / product.details?.gram).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${product.fat?.fatString?.split(" יש להוסיף ")[1]}\n ${product.sugar?.sugarString.split(" יש להוסיף ")[0]} יש להוסיף ${(amount / product?.sugar?.sugarCalculationGram).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${product.sugar?.sugarString.split(" יש להוסיף ")[1]}`;

                if (product.check.gram && product.check.fat && product.check.count && product.check.sugar) {
                        return productType === 'כמות' ? productCalculationCountFatSugar : productCalculationGramFatSugar;
                }
                else if (product.check.gram && product.check.fat) {
                        return productType === 'כמות' ? productCalculationCountFat : productCalculationGramFat;
                }
                else if (product.check.gram) {
                        return productType === 'כמות' ? productCalculationCount : productCalculationGram;
                }
                else {
                        return productType === 'כמות' ? productCalculationCount : ` לא ניתן לבצע חישוב לפי גרמים לערך ${productName}`;
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
                setResult(calculateValue(productName, productAmount, productType));
        };

        return (
                <form onSubmit={handleSubmit}>
                        <h1>שונות</h1>
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
                                סוג הדגנים/מוצרי המאפה:
                                <input list="productName"
                                        defaultValue={productName}
                                        onChange={handleProduct}
                                        onClick={handleClear}
                                        onFocus={handleClear}
                                />
                                <datalist id="productName">
                                        {
                                                products.map((product) => (
                                                        <option key={product.details?.productName} name="productName" value={product.details?.productName}>
                                                                {productType === 'כמות' ? product.unit?.measureString : product.unit?.gramString}
                                                        </option>
                                                ))
                                        }
                                </datalist>
                        </label>
                        <br /><br />
                        <div className='div1'>
                                מספר מנות:
                                {result}
                        </div>
                        <button type="submit">חשב</button>
                </form >
        );
};

export default Variance;