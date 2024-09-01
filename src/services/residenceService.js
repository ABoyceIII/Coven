import { db } from "../firebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  query,
  getDoc,
  orderBy,
  limit,
  Timestamp,
  deleteDoc,
  doc,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { fetchResident } from "./residentService";
/**
 * Creates a new residence document in the Firebase Firestore database.
 * The residence document contains the name of the residence, a join code, and a reference to the owner resident document.
 *
 * @param {Object} residenceData - The data for the new residence.
 * @param {string} residenceData.name - The name of the residence.
 * @param {string} residenceData.ownerUID - The UID of the resident who created the residence.
 * @returns {Promise<string>} A promise that resolves to the ID of the created residence document.
 * @throws {Error} If there is an issue creating the residence document in the database.
 */
export async function createFirebaseResidence(data) {
  //generate join code
  let joinCode = await generateJoinCode();
  //get reference to owner
  let residentRef = await fetchResident(data.ownerUID); //May have to change when rename fetchResident to fetchResidentData
  residentRef = residentRef.reference;

  //Create residence document containing name, joinCode and reference to owner resident document
  let residenceRef = await addDoc(collection(db, "Residences"), {
    name: data.name,
    joinCode: joinCode,
    residents: [residentRef],
  });

  //Give residence reference to itself
  await updateDoc(residenceRef, { reference: residenceRef });

  return residenceRef;
}

/**
 * Generates a random string of uppercase letters of a specified length.
 *
 * @param {number} length - The length of the generated string.
 * @returns {string} A string of random uppercase letters.
 */
function generateRandomCode(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
}

//AI Generated
//Untested
/**
 * Generates a unique join code for a residence.
 * The join code is a random string of 4 uppercase letters.
 * Ensures that the generated join code does not already exist in the "Residences" collection.
 *
 * @returns {Promise<string>} A promise that resolves to a unique join code.
 * @throws {Error} If there is an issue accessing the database.
 */
async function generateJoinCode() {
  let joinCode = generateRandomCode(4);
  let residenceQuery = query(
    collection(db, "Residences"),
    where("joinCode", "==", joinCode)
  );
  let residenceSnapshot = await getDocs(residenceQuery);

  while (!residenceSnapshot.empty) {
    joinCode = generateRandomCode(4);
    residenceQuery = query(
      collection(db, "Residences"),
      where("joinCode", "==", joinCode)
    );
    residenceSnapshot = await getDocs(residenceQuery);
  }

  return joinCode;
}
