import { useContext } from "react";
import { FirebaseContext } from "../context/firebase.context";

export const useFirebase = () => useContext(FirebaseContext);
