const quebecCities = [
  "St. Fidele", "St. Gabriel de Rimouski", "St. Gedeon de Beauce", "St. Gregoire de Nicolet", "St. Henri de Levis",
  "St. Honore", "St. Leon De Chic.", "St. Martin de Beauce", "St. Moise", "St. Raphael de Bellechasse",
  "St. Sebastien", "St. Stanislas de Champlain", "St. Theodore de Chertsey", "St. Victor de Beauce", "St. Vincent de Paul",
  "Stanstead", "Ste-Adele", "Ste-Agathe", "Ste-Agathe-Sud", "Ste-Agathe-des-Monts",
  "Ste-Anne-de-Beaupre", "Ste-Anne-de-Bellevue", "Ste-Anne-de-Portneuf", "Ste-Anne-de-la-Perade", "Ste-Anne-des-Monts",
  "Ste-Anne-des-Plaines", "Ste-Anne-du-Lac", "Ste-Blandine", "Ste-Brigitte-de-Laval", "Ste-Catherine",
  "Ste-Clotilde-de-Horton", "Ste-Eulalie", "Ste-Felicite", "Ste-Foy", "Ste-Genevieve",
  "Ste-Helene-de-Bagot", "Ste-Henedine", "Ste-Jeanne-d`Arc", "Ste-Julie", "Ste-Julie-de-Vercheres",
  "Ste-Julienne", "Ste-Justine", "Ste-Lucie-de-Beauregard", "Ste-Madeleine", "Ste-Marguerite",
  "Ste-Marie-de-Beauce", "Ste-Marie-de-Blandford", "Ste-Marthe", "Ste-Marthe-sur-le-Lac", "Ste-Perpetue",
  "Ste-Petronille", "Ste-Rosalie", "Ste-Rose", "Ste-Rose-de-Watford", "Ste-Rose-du-Nord",
  "Ste-Sophie-de-Levrard", "Ste-Thecle", "Ste-Therese", "Ste-Veronique", "Ste-Victoire",
  "Ste. Agathe de Lotbiniere", "Ste. Angele de Laval", "Ste. Cecile Masham", "Ste. Claire de Dorchester", "Ste. Croix de Lotbiniere",
  "Ste. Gertrude", "Ste. Justine de Newton", "Ste. Martine", "Ste. Methode de Frontenac", "Ste. Monique de Nicolet",
  "Stoke", "Stoneham", "Stratford", "Stukely-Sud", "Sutton",
  "Tadoussac", "Taschereau", "Tasiujaq", "Temiscaming", "Terrasse Vaudreuil",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < quebecCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(quebecCities[i]);
}

module.exports = { batches };
