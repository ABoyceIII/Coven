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
  const docRef = doc(db, "Residents", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    let data = docSnap.data();
  } else {
    console.log(
      "ERROR: Resident Document not found. Error occurred while fetching Resident."
    );
  }
}

//Temporary, only using 3 params
export function generateResident(data) {
  let resident = new Resident(
    data.displayName,
    data.emailAddress,
    data.fullName
  );
  return resident;
}

export async function createFirebaseResident(uid, data) {
  await setDoc(doc(db, "Residents", uid), {
    data,
  });
}
