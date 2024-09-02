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
import Resident from "../classes/resident";

export async function fetchResident(uid) {
  //TODO: change to fetchResidentData and propogate changes
  const docRef = doc(db, "Residents", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    let data = docSnap.data();
    return data;
  } else {
    console.error(
      "ERROR: Resident Document not found. Error occurred while fetching Resident."
    );
    console.error("Couldn't find resident with UID ", uid);
  }
}

/**
 *
 * @param {*} data
 */
export async function generateResident(uid) {
  let data = await fetchResident(uid);

  let resident = new Resident(
    data.displayName,
    data.emailAddress,
    data.fullName,
    data.uid,
    data.photoURL
  );
  resident.reference = data.reference;
  resident.residenceReference = data.residenceReference;

  return resident;
}

//Temporary, only using 4 params
export function generateBaseResident(data) {
  //console.log(data);
  let resident = new Resident(
    data.displayName,
    data.emailAddress,
    data.fullName,
    data.uid,
    data.photoURL
  );
  //console.log(resident);
  return resident;
}

/**
 * Creates a new resident document in the Firebase Firestore database.
 * The resident document contains the full name, display name, email address, profile picture URL, and document reference of the resident.
 *
 * @param {string} uid - The unique identifier for the resident.
 * @param {Object} data - The data for the new resident.
 * @param {string} data.fullName - The full name of the resident.
 * @param {string} data.displayName - The display name of the resident.
 * @param {string} data.emailAddress - The email address of the resident.
 * @param {string} data.photoURL - The photo URL of the resident.
 * @returns {Promise<Object>} A promise that resolves to the reference of the created resident document.
 * @throws {Error} If there is an issue creating the resident document in the database.
 */
export async function createFirebaseResident(uid, data) {
  //console.log(data);
  await setDoc(doc(db, "Residents", uid), {
    //TODO: Change so that it adds the fields and not just the data variable
    fullName: data.fullName,
    displayName: data.displayName,
    emailAddress: data.emailAddress,
    uid: data.uid,
    photoURL: data.photoURL,
  });

  //Fetch reference to new resident document
  const docRef = doc(db, "Residents", uid);
  //Update doc to include reference to itself
  await updateDoc(docRef, { reference: docRef });

  return docRef;
}

export async function updateFirebaseResident(uid, data) {
  //(uid, data);
  try {
    const residentRef = doc(db, "Residents", uid);
    await updateDoc(residentRef, data);
    //console.log("Resident document successfully updated");
  } catch (error) {
    console.error("Error updating resident document: ", error);
  }
}
