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
    return data.data;
  } else {
    console.log(
      "ERROR: Resident Document not found. Error occurred while fetching Resident."
    );
    console.log("Couldn't find resident with UID ", uid);
  }
}

//Temporary, only using 3 params
export function generateResident(data) {
  console.log(data);
  let resident = new Resident(
    data.displayName,
    data.emailAddress,
    data.fullName
  );
  console.log(resident);
  return resident;
}

export async function createFirebaseResident(uid, data) {
  console.log("FLAG 45");
  console.log(uid);
  console.log(data);
  await setDoc(doc(db, "Residents", uid), {
    data,
  });
}
