// Library that parse decimals into fractions
import { toFraction } from 'fraction-parser';

export const variables = {
  // use for toLocaleString
  numberFormat: { minimumFractionDigits: 2, maximumFractionDigits: 2 },
  // use for toFraction
  fractionFormat: { useUnicodeVulgar: true },
  fractionCalculation: (variable) =>
    toFraction(Number(variable) || 0, variables.fractionFormat),
  NEGLIGIBLE_NUMBER: 0.25,
  stringResult: 'קיימת בעיה, במקרה והיא חוזרת אנא פנה לבונה האתר',
  stringAlert: 'הערך שהוזן אינו קיים',
};
