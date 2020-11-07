const dateConvert = () => {
  const date = new Date();
  const option = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  };
  const toDate = date.toLocaleDateString('pt-BR', option);
  return toDate;
};

export default dateConvert;
