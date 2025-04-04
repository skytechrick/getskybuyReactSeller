import {
    getAuth,
    // GithubAuthProvider,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";

import { app } from "./firebaseConfig.js";

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
// const githubProvider = new GithubAuthProvider();

export const loginWithGooglePopup = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;
        const idToken = await user.getIdToken();
        localStorage.setItem("oAuth", JSON.stringify({ user, idToken, provider: "google" }) );
    } catch (error) {
        console.error("Google popup login error:", error);
        return null;
    }
};

// export const loginWithGithubPopup = async () => {
//     try {
//         const result = await signInWithPopup(auth, githubProvider);
//         const user = result.user;
//         const idToken = await user.getIdToken();
//         localStorage.setItem("oAuth", JSON.stringify({ user, idToken, provider: "github" }) );
//     } catch (error) {
//         console.error("GitHub popup login error:", error);
//         return null;
//     }
// };
