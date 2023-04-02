// import react state
import { useState } from 'react';
// import service 
import variance from '../../services/Grains&Bakery/variance';
// import variables 
import { variables } from '../variables';
// import container 
import FormFrame from '../FormFrame';
// import css
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

        // Get the product object 
        const product = products.find(product => product?.details?.productName === productName);
        // Get array of type
        const type = types.find(type => type === productType);

        // My handlers
        const calculateValue = (productName, amount, productType) => {
                // Calculate count 
                const count = (amount / product?.details?.value).toLocaleString(variables?.numberFormat);
                // Calculate gram 
                const gram = (amount / product?.details?.gram).toLocaleString(variables?.numberFormat);
                // Calculate sugar 
                const sugar = (amount / product?.sugar?.sugarCalculation).toLocaleString(variables?.numberFormat);
                // Calculate sugarGram 
                const sugarGram = (amount / product?.sugar?.sugarCalculationGram).toLocaleString(variables?.numberFormat);
                // Calculate fatString0 
                const fatSugarString0 = `${product?.fat?.fatString.split(" יש להוסיף ")[0]} יש להוסיף`;
                // Calculate fatString1 
                const fatSugarString1 = product?.fat?.fatString.split(" יש להוסיף ")[1];

                // Match count with NEGLIGIBLE_NUMBER
                const calculationCountFraction = ` ${count}`;
                // Calculate count reasult using toFraction 
                const calculationCount = ` ${variables?.fractionCalculation(count)}`;
                // Calculate count fat reasult using toFraction 
                const calculationCountFat = ` ${variables?.fractionCalculation(count)}\n ${fatSugarString0} ${variables?.fractionCalculation(count)} ${fatSugarString1}`;
                // Calculate count fat sugar reasult using toFraction  
                const calculationCountFatSugar = ` ${variables?.fractionCalculation(count)}\n ${fatSugarString0} ${variables?.fractionCalculation(count)} ${fatSugarString1}\n ${fatSugarString0} ${variables?.fractionCalculation(sugar)} ${fatSugarString1}`;
                // Match gram with NEGLIGIBLE_NUMBER
                const calculationGramFraction = ` ${gram}`;
                // Calculate gram reasult using toFraction 
                const calculationGram = ` ${variables?.fractionCalculation(gram)}`;
                // Calculate gram fat reasult using toFraction 
                const calculationGramFat = ` ${variables?.fractionCalculation(gram)}\n ${fatSugarString0} ${variables?.fractionCalculation(gram)} ${fatSugarString1}`;
                // Calculate gram fat sugar reasult using toFraction 
                const calculationGramFatSugar = ` ${variables?.fractionCalculation(gram)}\n ${fatSugarString0} ${variables?.fractionCalculation(count)} ${fatSugarString1}\n ${fatSugarString0} ${variables?.fractionCalculation(sugarGram)} ${fatSugarString1}`;

                if (product && type) {
                        if (product?.check?.gram && product?.check?.fat && product?.check?.count && product?.check?.sugar) {
                                return productType === types[0] && calculationCountFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationCountFatSugar
                                        : productType === types[1] && calculationGramFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationGramFatSugar
                                                : ' זניח';
                        }
                        else if (product?.check?.gram && product?.check?.fat) {
                                return productType === types[0] && calculationCountFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationCountFat
                                        : productType === types[1] && calculationGramFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationGramFat
                                                : ' זניח';
                        }
                        else if (product?.check?.gram) {
                                return productType === types[0] && calculationCountFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationCount
                                        : productType === types[1] && calculationGramFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationGram
                                                : 'זניח';
                        }
                        else {
                                return productType === types[1] ? ` לא ניתן לבצע חישוב לפי גרמים לערך ${productName} `
                                        : calculationCountFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationCount
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

        // Clean input field when click it 
        const handleClear = (event) => {
                event.target.value = "";
        };

        const handleSubmit = (e) => {
                // Prevent reload the page
                e.preventDefault();
                try {
                        setResult(calculateValue(productName, productAmount, productType));
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
                                                                        <option
                                                                                key={product?.details?.productName}
                                                                                name="productName"
                                                                                value={product?.check?.gram && productType === types[1] ? product?.details?.productName
                                                                                        : productType === types[0] ? product?.details?.productName
                                                                                                : ''}>
                                                                                {productType === types[0] ? product?.unit?.measureString : product?.unit?.gramString}
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

export default Variance;