// import react states
import { useState, useEffect } from 'react';
// import from react-select
import Select from 'react-select';
// import service 
import fruits from '../../services/Fruits/fruits';
// import variables 
import { variables, getMaxHeight } from '../variables';
// import container 
import FormFrame from '../FormFrame';
// import css
import '../../assets/css/basic.css';

const Fruit = () => {
        //  array of type calculation
        const types = ['כמות', 'גרם'];

        // My states 
        const [products] = useState(fruits);
        const [productName, setProductName] = useState(fruits[0]['details']['productName']);
        const [productType, setProductType] = useState(types[0]);
        const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
        // Get the product object 
        const product = products.find(product => product?.details?.productName === productName);
        //  array of value calculation
        const values = [product?.unit?.measures[0], product?.unit?.measures[1]];
        const [productValues, setProductValues] = useState(values[0]);
        const [productAmount, setProductAmount] = useState(1);
        const [result, setResult] = useState('');
        const [flag, setFlag] = useState(false);

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
        const calculateValue = (amount, productType, productValues) => {
                // Calculate count
                const count = (amount / product?.details?.value1).toLocaleString(variables?.numberFormat);
                // Calculate countValue2
                const countValue2 = (amount / product?.details?.value2).toLocaleString(variables?.numberFormat);
                // Calculate gram
                const gram = (amount / product?.details?.gram).toLocaleString(variables?.numberFormat);

                // Match count with NEGLIGIBLE_NUMBER
                const calculationCountFraction = ` ${count}`;
                // Calculate count reasult using toFraction 
                const calculationCount = ` ${variables?.fractionCalculation(count)}`;
                // Use to comparison count value with NEGLIGIBLE_NUMBER
                const calculationCountValueFraction = ` ${countValue2}`;
                // Calculate count value2 reasult using toFraction 
                const calculationCountValue2 = ` ${variables?.fractionCalculation(countValue2)}`;

                // Match gram with NEGLIGIBLE_NUMBER
                const calculationGramFraction = ` ${gram}`;
                // Calculate gram reasult using toFraction 
                const calculationGram = ` ${variables?.fractionCalculation(gram)}`;

                if (isNaN(productAmount)) {
                        return alert(variables.stringProductAmount);
                }
                if (product && type && value) {
                        if (product?.check?.value) {
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
                                return productType === types[0] ? ` לא ניתן לבצע חישוב לפי גרמים לערך ${productName} `
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

        const handleProductValues = (event) => {
                setProductValues(event.target.value);
        };

        const handleProductValuesPC = (selectedOption) => {
                setProductValues(selectedOption ? selectedOption.value : null);
        };

        const handleResize = () => {
                setViewportWidth(window.innerWidth);
        };

        const handleSubmit = (e) => {
                // Prevent reload the page
                e.preventDefault();

                try {
                        setResult(calculateValue(productAmount, productType, productValues));
                        setFlag(true);
                }
                catch (err) {
                        console.log(err.message);
                        setResult(variables.stringResult);
                }
        };

        const productsOptions = products.map((product) => {
                const shouldShowOption = (product?.check?.count && productType === types[0])
                        || productType === types[1];

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

        const valuesOptions = values.map((value) => ({
                value: value || '',
                label: value
        }));

        return (
                <>
                        <FormFrame>
                                <form onSubmit={handleSubmit}>
                                        <h1>פירות</h1>
                                        <label id='productType'>
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
                                                                name='productType'
                                                                id='productType'
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
                                                סוג הפרי:
                                                {viewportWidth <= 600 ? (
                                                        <select
                                                                value={productName}
                                                                onChange={handleProduct}
                                                        >
                                                                {products.map((product) => (
                                                                        <option key={product?.details?.productName} value={product?.details?.productName}>
                                                                                {productType === types[0] ? `${product?.details?.productName} ${product?.unit?.measureString}` : `${product?.details?.productName} ${product?.unit?.gramString}`}
                                                                        </option>
                                                                ))}
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
                                        {product?.check?.value === true && productType === types[0] && <div>
                                                <label>
                                                        בחירת סוג חישוב כמות
                                                        {viewportWidth <= 600 ? (
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
                                                                <Select
                                                                        options={valuesOptions}
                                                                        isSearchable
                                                                        isClearable
                                                                        noOptionsMessage={() => variables.stringSelectProductNameNoOptionsMessage}
                                                                        placeholder={variables.stringSelect}
                                                                        value={valuesOptions.find((option) => option.value === productValues || '')}
                                                                        onChange={handleProductValuesPC}
                                                                />
                                                        )}
                                                </label>
                                        </div>}
                                        <div className='div-result div-result-pc'>
                                                {flag === true && 'מספר מנות:'}
                                                <div className='result'>{result}</div>
                                        </div>
                                        <button type="submit">חשב</button>
                                </form >
                        </FormFrame>
                </>
        );
};

export default Fruit;