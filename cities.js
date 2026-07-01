const quebecCities = [
  "Macamic", "Magog", "Malartic", "Manic-Cinq", "Maniwaki",
  "Manouane", "Manseau", "Mansonville", "Maple Grove", "Maria",
  "Marieville", "Marsoui", "Mascouche", "Maskinonge", "Masson-Angers",
  "Massueville", "Mastigouche", "Matagami", "Matane", "Matapedia",
  "Mcmasterville", "Melbourne", "Mellin", "Melocheville", "Mercier",
  "Metabetchouan", "Metis-sur-Mer", "Mirabel", "Mistassini", "Moisie",
  "Mont Bechervaise", "Mont St Grégoire", "Mont-Joli", "Mont-Laurier", "Mont-Louis",
  "Mont-Rolland", "Mont-Royal", "Mont-St-Hilaire", "Mont-St-Pierre", "Mont-Tremblant",
  "Montebello", "Montmagny", "Montreal", "Montreal - Est", "Montréal - Nord",
  "Montréal - Ouest", "Morin-Heights", "Murdochville", "Mutton Bay", "Nantes",
  "Napierville", "Natashquan", "Nedelec", "Neuville", "New Carlisle",
  "New Glasgow", "New Richmond", "Newport", "Nicolet", "Norbertville",
  "Normandin", "Normetal", "North Hatley", "Notre Dame De L`Ile Perrot", "Notre Dame Des Prairies",
  "Notre Dame Du Portage", "Notre Dame de Bonsecours", "Notre Dame de Lourdes", "Notre Dame des Laurentides", "Notre-Dame-de-Stanbridge",
  "Notre-Dame-de-la-Paix", "Notre-Dame-de-la-Salette", "Notre-Dame-du-Bon-Conseil", "Notre-Dame-du-Lac", "Notre-Dame-du-Laus",
  "Notre-Dame-du-Nord", "Nouvelle", "Oka", "Omerville", "Orford",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < quebecCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(quebecCities[i]);
}

module.exports = { batches };
