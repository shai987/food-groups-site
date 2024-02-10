// Library that parse decimals into fractions
import { toFraction } from 'fraction-parser';

export const variables = {
  // Use for toLocaleString
  numberFormat: { minimumFractionDigits: 2, maximumFractionDigits: 2 },
  // Use for toFraction
  fractionFormat: { useUnicodeVulgar: true },
  fractionCalculation: (variable) =>
    toFraction(Number(variable) || 0, variables.fractionFormat),
  NEGLIGIBLE_NUMBER: 0.25, // זניח
  stringResult: 'קיימת בעיה, במקרה והיא חוזרת אנא פנה לבונה האתר',
  stringAlert: 'נא לבחור פריט מן הרשימה',
  stringProductAmount: 'יש להזין מספר',
  stringSelect: 'יש ללחוץ על מנת לבחור...',
  stringSelectProductTypeNoOptionsMessage: 'ניתן לחשב רק באמצעות כמות או גרם',
  stringSelectProductNameNoOptionsMessage: 'הפריט לא נמצא ברשימה',
};

// Use for select-react dropdown list
export const getMaxHeight = (viewportWidth) => {
  const maxHeightOptions = {
    2560: 'none',
    2400: '295px',
    1745.45: '180px',
    1536: '150px',
  };

  const viewportKeys = Object.keys(maxHeightOptions)
    .map(parseFloat)
    .sort((a, b) => b - a);

  const selectedMaxHeight = viewportKeys.find(
    (width) => viewportWidth >= width
  );

  return selectedMaxHeight ? maxHeightOptions[selectedMaxHeight] : 'none';
};
