export const formatCurrency = (valor) => {
  return Number(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

export const formatCurrencyInput = (inputValue) => {
  const option = { style: 'currency', currency: 'BRL' };
  let numericValue = inputValue.replace(/\D/g, '');
  return (numericValue / 100).toLocaleString('pt-BR', option);
};

export const formatCurrencyToNumber = (value) => {
  return Number(value.replace(/\D/g, '')) / 100;
};
