import { authFeature } from "./firebaseApp";
import {signInWithEmailAndPassword,
    createUserWithEmailAndPassword} from 'firebase/auth';

export async function loginWithEmail(email, password, router) {
  try {
    const result = await signInWithEmailAndPassword(authFeature, email, password);

    console.log("Logged in as:", result.user.email);
    console.log("Password:", password);

    if (!result.user.emailVerified) {
      alert("Please verify your email first.");
      return;
    }

    alert("Login successful!");
    router.push("/Events");

  } catch (exception) {
    console.log(exception.code);
    alert(exception.code);
  }
}

export async function createAccount(email,password){
    try{
        const result = await createUserWithEmailAndPassword(authFeature,email,password);
        console.log(JSON.stringify(result))
        alert("Account Creation Successful");
    }catch(exception){
        console.log(JSON.stringify(exception))
        alert("Account Creation Failed");

    }
}

export async function resetEmail(email) {
  try {
    await sendPasswordResetEmail(authFeature, email);
    alert("Reset email sent!");
  } catch (exception) {
    console.log(exception.code);
    alert(exception.code);
  }
}