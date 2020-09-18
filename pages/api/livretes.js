export default (req, res) => {
  res.statusCode = 200;
  res.json([
    {
      ID: 1,
      Nome_Importador: 'José Augusto',
      Matricula: '2019-03-02',
      Cor: 'Preta',
      Combustivel: 'Gasolina',
      Lotacao: '7',
      DataEmiss: '2014-02-21',
    },
  ]);
};
