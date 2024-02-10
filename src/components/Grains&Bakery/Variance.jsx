// import react state
import { useState, useEffect } from 'react';
// import from react-select
import Select from 'react-select';
// import service 
import variance from '../../services/Grains&Bakery/variance';
// import variables 
import { variables, getMaxHeight } from '../variables';
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
        const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
        const [productAmount, setProductAmount] = useState(1);
        const [result, setResult] = useState('');
        const [flag, setFlag] = useState(false);
        // Get the product object 
        const product = products.find(product => product?.details?.productName === productName);
        // Get array of type
        const type = types.find(type => type === productType);

        useEffect(() => {
                // Add event listener on mount
                window.addEventListener('resize', handleResize);

                // Clean up the event listener on unmount
                return () => {
                        window.removeEventListener('resize', handleResize);
                };
        }, []);

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
                // Calculate sugarString0 
                const sugarString0 = `${product?.sugar?.sugarString.split(" יש להוסיף ")[0]} יש להוסיף`;
                // Calculate sugarString1 
                const sugarString1 = product?.sugar?.sugarString.split(" יש להוסיף ")[1];

                // Match count with NEGLIGIBLE_NUMBER
                const calculationCountFraction = ` ${count}`;
                // Calculate count reasult using toFraction 
                const calculationCount = ` ${variables?.fractionCalculation(count)}`;
                // Calculate count fat reasult using toFraction 
                // const calculationCountFat = ` ${variables?.fractionCalculation(count)}`;
                const calculationCountFat = ` ${variables?.fractionCalculation(count)}\n ${fatSugarString0} ${variables?.fractionCalculation(count)} ${fatSugarString1}`;
                // Calculate count fat sugar reasult using toFraction  
                // const calculationCountFatSugar = ` ${variables?.fractionCalculation(count)}\n ${variables?.fractionCalculation(sugar)}\n ${variables?.fractionCalculation(sugar)}`;
                const calculationCountFatSugar = ` ${variables?.fractionCalculation(count)}\n ${fatSugarString0} ${variables?.fractionCalculation(count)} ${fatSugarString1}\n ${sugarString0} ${variables?.fractionCalculation(sugar)} ${sugarString1}`;

                // Match gram with NEGLIGIBLE_NUMBER
                const calculationGramFraction = ` ${gram}`;
                // Calculate gram reasult using toFraction 
                const calculationGram = ` ${variables?.fractionCalculation(gram)}`;
                // Calculate gram fat reasult using toFraction 
                // const calculationGramFat = ` ${variables?.fractionCalculation(gram)}`;
                const calculationGramFat = ` ${variables?.fractionCalculation(gram)}\n ${fatSugarString0} ${variables?.fractionCalculation(gram)} ${fatSugarString1}`;
                // Calculate gram fat sugar reasult using toFraction 
                // const calculationGramFatSugar = ` ${variables?.fractionCalculation(gram)}\n ${variables?.fractionCalculation(sugarGram)}`;
                const calculationGramFatSugar = ` ${variables?.fractionCalculation(gram)}\n ${fatSugarString0} ${variables?.fractionCalculation(gram)} ${fatSugarString1}\n ${sugarString0} ${variables?.fractionCalculation(sugarGram)} ${sugarString1}`;

                if (isNaN(productAmount)) {
                        return alert(variables.stringProductAmount);
                }
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
                        else if (product?.check?.fat && product?.check?.gram) {
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
                                        : calculationCountFraction >= variables?.NEGLIGIBLE_NUMBER ? calculationCountFat
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

        const handleProductPC = (selectedOption) => {
                setProductName(selectedOption ? selectedOption.value : null);
        };

        const handleAmount = (event) => {
                setProductAmount(event.target.value);
        };

        const handleProductType = (event) => {
                setProductType(event.target.value);
        };

        const handleProductTypePC = (selectedOption) => {
                setProductType(selectedOption ? selectedOption.value : null);
        };

        const handleResize = () => {
                setViewportWidth(window.innerWidth);
        };

        const handleSubmit = (e) => {
                // Prevent reload the page
                e.preventDefault();
                try {
                        setResult(calculateValue(productName, productAmount, productType));
                        setFlag(true);
                }
                catch (err) {
                        console.log(err.message);
                        setResult(variables.stringResult);
                }
        };

        const productsOptions = products.map((product) => {
                const shouldShowOption = (product?.check?.gram && productType === types[1])
                        || productType === types[0];

                return shouldShowOption ? (
                        {
                                value: product?.details?.productName,
                                label: productType === types[0]
                                        ? `${product?.details?.productName} ${product?.unit?.measureString}`
                                        : `${product?.details?.productName} ${product?.unit?.gramString}`
                        }
                ) : null;
        });

        const filteredProductsOptions = productsOptions.filter(option => option !== null);

        const typesOptions = types.map((type) => ({
                value: type,
                label: type
        }));

        // console.log([...result].reverse().join(' '))
        // console.log([...result])

        return (
                <>
                        <FormFrame>
                                <form onSubmit={handleSubmit}>
                                        <h1>שונות</h1>
                                        <label>
                                                חישוב לפי כמות או גרמים:
                                                {viewportWidth <= 600 ? (
                                                        <select
                                                                id='productType'
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
                                                        <Select
                                                                id='productType'
                                                                name='productType'
                                                                options={typesOptions}
                                                                isSearchable
                                                                isClearable
                                                                noOptionsMessage={() => variables.stringSelectProductTypeNoOptionsMessage}
                                                                placeholder={variables.stringSelect}
                                                                value={typesOptions.find((option) => option.value === productType)}
                                                                onChange={handleProductTypePC}
                                                        />
                                                )}
                                        </label>
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
                                                סוג הדגנים/מוצרי המאפה:
                                                {viewportWidth <= 600 ? (
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
                                                        <Select
                                                                styles={{
                                                                        menu: (provided) => ({
                                                                                ...provided,
                                                                                maxHeight: getMaxHeight(viewportWidth),
                                                                                overflowY: 'auto',
                                                                        }),
                                                                }}
                                                                options={filteredProductsOptions}
                                                                isSearchable
                                                                isClearable
                                                                noOptionsMessage={() => variables.stringSelectProductNameNoOptionsMessage}
                                                                placeholder={variables.stringSelect}
                                                                value={filteredProductsOptions.find((option) => option.value === productName)}
                                                                onChange={handleProductPC}
                                                        />
                                                )}
                                        </label>
                                        <div className='div-result div-result-pc'>
                                                {flag === true && 'מספר מנות:'}
                                                <div className='result'>{result}</div>
                                        </div>
                                        {/* ---------------------------------------------------- */}
                                        {/* try */}
                                        {/* <div className='div-result div-result-pc'>
                                                <div className='result' style={{ direction: 'ltr' }}>
                                                        {result} :מספר מנות
                                                </div>
                                                {product?.check?.fat && <div div className='amount-result' style={{ direction: 'ltr' }}>
                                                        יש להוסיף {[...result].reverse().join(' ')} מנות שומן *
                                                </div>}
                                                {product?.check?.sugar && <div className='amount-result' style={{ direction: 'ltr' }}>
                                                        יש להוסיף {result.split(' ')} מנות סוכר *
                                                </div>}
                                        </div> */}

                                        {/* ---------------------------------------------------- */}
                                        {/* <div className='div-result div-result-pc'>
                                                <div className='amount-result'>מספר מנות:</div>
                                                <div className='result' style={{ direction: 'ltr' }}>
                                                        {result}
                                                </div>
                                        </div>
                                        <div className='div-result div-result-pc'>
                                                <div className='amount-result'>
                                                        מספר מנות: <span className='result' style={{ direction: 'ltr' }}>{result}</span>
                                                </div>
                                        </div>
                                        <div className='div-result div-result-pc'>
                                                <div className='amount-result'>
                                                        <span>מספר מנות: </span>
                                                        <span className='result' style={{ direction: 'ltr' }}>{result}</span>
                                                </div>
                                        </div>

                                        <div className='div-result div-result-pc'>
                                                <div className='result' style={{ direction: 'rtl' }}>
                                                        {`מספר מנות:${result}`}
                                                </div>
                                        </div>

                                        <div className='div-result div-result-pc'>
                                                {(!product?.check?.fat && !product?.check?.sugar) && <div className='result' style={{ direction: 'ltr' }}>
                                                        {result} :מספר מנות
                                                </div>}
                                        </div> */}
                                        {/* 
                                        <div className='div-result div-result-pc' style={{ direction: 'ltr' }}>
                                                <p className='result' style={{ direction: 'ltr' }}>{`מספר מנות:${result}`} </p>
                                        </div> */}
                                        <button type="submit">חשב</button>
                                </form >
                        </FormFrame >
                </>
        );
};

export default Variance;