export default (req, res) => {
  res.statusCode = 200;
  res.json([
    {
      ID: 1,
      Importador: 'José Augusto',
      Marca: 'Toyota',
      Modelo: 'Hiace',
      Classe_Veiculo: 'Tractor',
      Num_Quadro: '9BGRD08X04G117974',
      TipoDocumento: 'BI',
      Num_BI: '000001341LA035',
      Num_DU: '103326542',
    },
    {
      ID: 2,
      Importador: 'Alberto Mateus',
      Marca: 'Tesla',
      Modelo: 'S',
      Classe_Veiculo: 'Tractor',
      Num_Quadro: '9BGRD08X04G117974',
      TipoDocumento: 'BI',
      Num_BI: '000001341LA035',
      Num_DU: '103326542',
    },
    {
      ID: 3,
      Importador: 'João Bento',
      Marca: 'Toyota',
      Modelo: 'Corolla',
      Classe_Veiculo: 'Tractor',
      Num_Quadro: '9BGRD08X04G117974',
      TipoDocumento: 'BI',
      Num_BI: '000001341LA035',
      Num_DU: '103326542',
    },
    {
      ID: 4,
      Importador: 'Abel Santos',
      Marca: 'Toyota',
      Modelo: 'Corolla',
      Classe_Veiculo: 'Tractor',
      Num_Quadro: '9BGRD08X04G117974',
      TipoDocumento: 'BI',
      Num_BI: '000001341LA035',
      Num_DU: '103326542',
    },
  ]);
};
