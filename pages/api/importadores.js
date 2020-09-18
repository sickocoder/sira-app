export default (req, res) => {
  res.statusCode = 200;
  res.json([
    {
      ID: 1,
      Nome_Importador: 'José Augusto',
      Tipo_Documento: 'BI',
      Num_Documento: '334534JKH3453',
      Data_Registro: '15/09/2020',
      Residencia: 'Rua 7, Bo Benfica, Zona Verde',
      Email: 'dsdmsu@gmail.com',
      Contacto: '+244 923 794 825',
    },
  ]);
};
