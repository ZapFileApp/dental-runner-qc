const quebecCities = [
  "Saint Antoine Des Laurentides", "Saint Antoine Sur Richelieu", "Saint Antonin", "Saint Athanase", "Saint Calixte",
  "Saint Charles Borromee", "Saint Charles Sur Richelieu", "Saint Christophe D`Arthabaska", "Saint Colomban", "Saint Denis De Brompton",
  "Saint Denis Sur Richelieu", "Saint Esprit", "Saint Etienne de Beauharnois", "Saint Etienne de Lauzon", "Saint Gerard Majella",
  "Saint Isidore de la Prairie", "Saint Jean Baptiste", "Saint Jean D`Orleans", "Saint Joachim", "Saint Joseph De La Pointe De L",
  "Saint Laurent D`Orleans", "Saint Lazare De Vaudreuil", "Saint Lin Laurentides", "Saint Marc Sur Richelieu", "Saint Mathias Sur Richelieu",
  "Saint Mathieu de Beloeil", "Saint Mathieu de la Prairie", "Saint Maurice", "Saint Norbert D`Arthabaska", "Saint Paul D`Industrie",
  "Saint Philippe", "Saint Pierre D`Orleans", "Saint Robert", "Saint Roch De L`Achigan", "Saint Roch De Richelieu",
  "Saint Sulpice", "Saint Thomas", "Saint Urbain Premier", "Saint Valere", "Saint Victoire de Sorel",
  "Saint-Alexis-de-Montcalm", "Saint-Côme", "Saint-Donat", "Saint-Ferdinand", "Saint-Ferréol-les-neiges",
  "Saint-Hubert", "Saint-Hyacinthe", "Saint-Michel-des-Saints", "Saint-Élie", "Saint-Élie-d`Orford",
  "Sainte Angele De Monnoir", "Sainte Ann De Sorel", "Sainte Brigide D`Iberville", "Sainte Cecile De Milton", "Sainte Dorotheé",
  "Sainte Famille", "Sainte Marie Salome", "Sainte Marthe Du Cap", "Sainte Sophie", "Sainte Therese De Blainville",
  "Salaberry-de-Valleyfield", "Salluit", "Sanmaur", "Sault-au-Mouton", "Sawyerville",
  "Sayabec", "Schefferville", "Scotstown", "Senneterre", "Senneville",
  "Sept-Iles", "Shawbridge", "Shawinigan", "Shawinigan-Sud", "Shawville",
  "Shefford", "Sherbrooke", "Shigawake", "Shipshaw", "Sillery",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < quebecCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(quebecCities[i]);
}

module.exports = { batches };
