import { authFeature } from "./firebaseApp";
import { onAuthStateChanged } from "firebase/auth";

export function checkUserStatus(callback) {
  return onAuthStateChanged(authFeature, (user) => {
    callback(user);
  });
}