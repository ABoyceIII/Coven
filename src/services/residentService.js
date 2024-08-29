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
    return data;
  } else {
    console.log(
      "ERROR: Resident Document not found. Error occurred while fetching Resident."
    );
    console.log("Couldn't find resident with UID ", uid);
  }
}

//Temporary, only using 4 params
export function generateBaseResident(data) {
  console.log(data);
  let resident = new Resident(
    data.displayName,
    data.emailAddress,
    data.fullName,
    data.uid
  );
  console.log(resident);
  return resident;
}

export async function createFirebaseResident(uid, data) {
  //console.log(data);
  await setDoc(doc(db, "Residents", uid), {
    //TODO: Change so that it adds the fields and not just the data variable
    fullName: data.fullName,
    displayName: data.displayName,
    emailAddress: data.emailAddress,
    uid: data.uid,
  });
}

export async function updateFirebaseResident(uid, data) {
  console.log(uid, data);
  try {
    const residentRef = doc(db, "Residents", uid);
    await updateDoc(residentRef, data);
    console.log("Resident document successfully updated");
  } catch (error) {
    console.error("Error updating resident document: ", error);
  }
}
