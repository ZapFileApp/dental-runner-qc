const quebecCities = [
  "Ormstown", "Otterburn Park", "Outremont", "Palmarolle", "Papineauville",
  "Parent", "Perce", "Peribonka", "Perkins", "Petite-Riviere-St-Francois",
  "Philipsburg", "Pierrefonds", "Pierreville", "Pincourt", "Pintendre",
  "Plaisance", "Plessisville", "Pohenegamook", "Pointe Aux Trembles", "Pointe-Calumet",
  "Pointe-Claire", "Pointe-Fortune", "Pointe-Lebel", "Pointe-a-la-Croix", "Pointe-au-Pere",
  "Pointe-aux-Outardes", "Pointe-des-Cascades", "Pointe-des-Monts", "Pont-Rouge", "Pont-Viau",
  "Pontiac", "Port-Cartier", "Port-Daniel", "Port-Menier", "Portage-du-Fort",
  "Portneuf", "Poste-de-la-Baleine", "Prevost", "Price", "Princeville",
  "Puvirnituq", "Quebec", "Quyon", "Radisson", "Rawdon",
  "Remigny", "Repentigny", "Richelieu", "Richmond", "Rigaud",
  "Rimouski", "Rimouski-Est", "Ripon", "Riviere-Beaudette", "Riviere-Bleue",
  "Riviere-Heva", "Riviere-St-Jean", "Riviere-a-Pierre", "Riviere-au-Renard", "Riviere-au-Tonnerre",
  "Riviere-du-Loup", "Robertsonville", "Roberval", "Rochebaucourt", "Rock Forest",
  "Rollet", "Rosemere", "Rougemont", "Rouyn-Noranda", "Roxboro",
  "Roxton Falls", "Roxton Pond", "Réserve faunique de Rimouski", "Réserve faunique la Vérendrye", "Réserves fauniques de Matane e",
  "Sabrevois", "Sacre Coeur", "Saint Alexandre D`Iberville", "Saint Alphonse de Granby", "Saint Amable",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < quebecCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(quebecCities[i]);
}

module.exports = { batches };
