const quebecCities = [
  "L`Islet", "L`Île-Verte", "La Baie", "La Corne", "La Dore",
  "La Grande", "La Guadeloupe", "La Malbaie", "La Martre", "La Minerve",
  "La Patrie", "La Plaine", "La Pocatiere", "La Prairie", "La Reine",
  "La Romaine", "La Sarre", "La Tuque", "LaSalle", "Labelle",
  "Lac Kenogami", "Lac-Bouchette", "Lac-Brome", "Lac-Delage", "Lac-Drolet",
  "Lac-Edouard", "Lac-Etchemin", "Lac-Frontiere", "Lac-Poulin", "Lac-Saguay",
  "Lac-Sergent", "Lac-St-Joseph", "Lac-au-Saumon", "Lac-aux-Sables", "Lac-des-Ecorces",
  "Lac-du-Cerf", "Lachenaie", "Lachine", "Lachute", "Lacolle",
  "Lafontaine", "Lake Megantic", "Lambton", "Lanoraie", "Laterriere",
  "Latulipe", "Laurentides", "Laurier-Station", "Laurierville", "Laval",
  "Laval Ouest", "Laval des Rapides", "Lavaltrie", "Laverlochere", "Lawrenceville",
  "Le Bic", "Le Gardeur", "LeMoyne", "Lebel-sur-Quevillon", "Leclercville",
  "Lennoxville", "Lery", "Les Boules", "Les Cedres", "Les Coteaux",
  "Les Eboulements", "Les Escoumins", "Les Mechins", "Levis", "Longueuil",
  "Loretteville", "Lorraine", "Lorrainville", "Louiseville", "Lourdes de Blanc Sablon",
  "Louvicourt", "Low", "Luceville", "Luskville", "Lyster",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < quebecCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(quebecCities[i]);
}

module.exports = { batches };
