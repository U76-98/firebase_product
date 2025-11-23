// productLogic.js
import { database } from "./firebaseApp";
import {
  doc,
  setDoc,
  getDoc,
  deleteDoc,
  updateDoc,
  collection,
  onSnapshot,
} from "firebase/firestore";

//Add Product
export async function addProduct(product) {
  try {
    await setDoc(doc(database, "Products", product.id), product);
    alert("Product added successfully!");
  } catch (exception) {
    alert("Error adding product: " + exception.message);
  }
}

//subscribe to product
export function subscribeProducts(callback) {
  try {
    const colRef = collection(database, "Products");

    return onSnapshot(colRef, (snapshot) => {
      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      callback(list);
    });
  } catch (exception) {
    console.log("Error subscribing: ", exception);
  }
}

//delete product
export async function deleteProduct(id) {
  try {
    await deleteDoc(doc(database, "Products", id));
    alert("Product deleted!");
  } catch (exception) {
    alert("Error deleting: " + exception.message);
  }
}

//update prodyct
export async function updateProduct(id, data) {
  try {
    await updateDoc(doc(database, "Products", id), data);
    alert("Product updated!");
  } catch (exception) {
    alert("Error updating: " + exception.message);
  }
}

//get a single product
export async function getProduct(id) {
  try {
    const ref = doc(database, "Products", id);
    const snapshot = await getDoc(ref);

    if (snapshot.exists()) {
      return snapshot.data();
    } else {
      return null;
    }
  } catch (exception) {
    console.log("Error fetching product: " + exception.message);
    return null;
  }
}
