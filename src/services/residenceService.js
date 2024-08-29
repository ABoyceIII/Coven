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

// /**
//  *
//  * Creates a new user and retrieves the reference to the new document
//  *
//  * @param {*} param0 Data used to create new user
//  *
//  * @returns Reference to newly created user document
//  */
// export async function createResident({
//   uid,
//   displayName,
//   emailAddress,
//   fullName,
// }) {
//   const data = {
//     displayName: displayName,
//     emailAddress: emailAddress,
//     fullName: fullName,
//     photoURL:
//       "https://firebasestorage.googleapis.com/v0/b/coven-alpha.appspot.com/o/generic.png?alt=media&token=bdb496be-d4a4-460a-8288-d83fe995ae3b",
//     statusColor: "d3d3d3",
//     statusDescription: "",
//   };

//   try {
//     const docRef = await addDoc(collection(db, "Residents"), data);
//     console.log(docRef);
//     return docRef;
//   } catch (error) {
//     console.log(error);
//   }
// }
