import { useState } from 'react';
import variance from '../../services/Grains&Bakery/variance';
import '../../assets/css/basic.css';

const Variance = () => {
        const types = ['כמות', 'גרם'];
        const [products] = useState(variance);
        const [productName, setProductName] = useState(variance[0]['details']['productName']);
        const [productType, setProductType] = useState(types[0]);
        const [productAmount, setProductAmount] = useState(1);
        const [result, setResult] = useState('');

        const calculateValue = (productName, amount, productType) => {
                // Get the product object 
                const product = products.find(product => product.details?.productName === productName);
                // For basic reasult multiplication operation
                const productMultiplication = ` ${(amount * product.details?.calculationValue).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
                // For basic reasult division operation
                const productDivision = ` ${(amount / product.details?.calculationValue).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
                // For fat reasult division operation 
                const productFat = ` ${(amount / product.details?.calculationValue).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}\n ${product.fat?.fatString.split(" יש להוסיף ")[0]} יש להוסיף ${(amount / product.fat?.fatCalculation).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${product.fat?.fatString.split(" יש להוסיף ")[1]}`;
                // For fat and sugar reasult multiplication operation 
                const productFatSugarM = ` ${(amount * product.details?.calculationValue).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}\n ${product.fat?.fatString.split(" יש להוסיף ")[0]} יש להוסיף ${(amount * product.fat?.fatCalculation).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${product.fat?.fatString.split(" יש להוסיף ")[1]}\n ${product.sugar?.sugarString.split(" יש להוסיף ")[0]} יש להוסיף ${(amount / product.sugar?.sugarCalculation).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${product.sugar?.sugarString.split(" יש להוסיף ")[1]}`;
                // For fat and sugar reasult division operation 
                const productFatSugarD = ` ${(amount / product.details?.calculationValue).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}\n ${product.fat?.fatString?.split(" יש להוסיף ")[0]} יש להוסיף ${(amount / product.fat?.fatCalculation).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${product.fat?.fatString?.split(" יש להוסיף ")[1]}\n ${product.sugar?.sugarString.split(" יש להוסיף ")[0]} יש להוסיף ${(amount / product.sugar?.sugarCalculation).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${product.sugar?.sugarString.split(" יש להוסיף ")[1]}`;
                // For basic reasult division operation
                const productDivisionGram = ` ${(amount / product.details?.gram).toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

                switch (productType) {
                        case 'כמות':
                                {
                                        switch (productName) {
                                                case 'קורנפלקס':
                                                        return productMultiplication;
                                                case 'ברנפלקס':
                                                        return productMultiplication;
                                                case 'גרנולה':
                                                        return productFat;
                                                case 'פצפוצי אורז':
                                                        return productMultiplication;
                                                case 'בייגלה - מקלות':
                                                        return productDivision;
                                                case 'פופקורן מוכן ללא שמן':
                                                        return productDivision;
                                                case 'פופקורן מותפח בשמן':
                                                        return productFat;
                                                case 'ופלים/עוגיות':
                                                        return productFatSugarD;
                                                case 'עוגה יבשה':
                                                        return productFatSugarM;
                                                case 'קרקרים קטנים':
                                                        return productFat;
                                                case 'קרקרים גדולים':
                                                        return productFat;
                                                case 'שקדי מרק':
                                                        return productFat;
                                                default:
                                                        return 0;
                                        }
                                }
                        case 'גרם':
                                {
                                        switch (productName) {
                                                case 'קורנפלקס':
                                                case 'ברנפלקס':
                                                case 'גרנולה':
                                                case 'פצפוצי אורז':
                                                case 'בייגלה - מקלות':
                                                case 'פופקורן מוכן ללא שמן':
                                                case 'פופקורן מותפח בשמן':
                                                case 'ופלים/עוגיות':
                                                case 'עוגה יבשה':
                                                case 'קרקרים קטנים':
                                                case 'קרקרים גדולים':
                                                case 'שקדי מרק':
                                                        return product.details.gram === 0 ? 0 : productDivisionGram; // prevent infinity
                                                default:
                                                        return 0;
                                        }
                                }
                        default:
                                return 0;
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