//main.ts

// Définition des interfaces avec Nominal Typing
interface MajorCredits {
  credits: number;
  brand: "MajorCredits"; // Identifiant unique
}

interface MinorCredits {
  credits: number;
  brand: "MinorCredits"; // Identifiant unique
}

// Fonction pour additionner les crédits majeurs
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits, brand: "MajorCredits" };
}

// Fonction pour additionner les crédits mineurs
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits, brand: "MinorCredits" };
}

// Création d'exemples de crédits majeurs et mineurs
const major1: MajorCredits = { credits: 3, brand: "MajorCredits" };
const major2: MajorCredits = { credits: 4, brand: "MajorCredits" };
const minor1: MinorCredits = { credits: 1, brand: "MinorCredits" };
const minor2: MinorCredits = { credits: 2, brand: "MinorCredits" };

// Calcul des crédits totaux
const totalMajor = sumMajorCredits(major1, major2);
const totalMinor = sumMinorCredits(minor1, minor2);

// Affichage des résultats
console.log(totalMajor); // { credits: 7, brand: "MajorCredits" }
console.log(totalMinor); // { credits: 3, brand: "MinorCredits" }
