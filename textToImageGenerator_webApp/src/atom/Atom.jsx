import axios from "axios";
import { useEffect } from "react";
import { atom, selector, selectorFamily } from "recoil";
import { assets } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


// -------- LOGGED-IN USER ----------
export const  userAtom = atom({
    key: 'userAtom',
    default:''
})

// ------- CREDIT -------
export const creditAtom = atom({
    key: 'creditAtom',
    default: 0
})
    // -------- LOGIN --------
export const loginAtom = atom({
    key: 'loginAtom',
    default: 'Login'
})
    // --------- CLOSE SIGN-IN/UP card --------
export const exitAtom = atom({
    key: 'exitAtom',
    default: 0
})

    // ----- PROMPT -----
export const promptAtom = atom({
    key: 'promptAtom',
    default: ''
})

    // ----- IMAGE-LOADING -----
export const loadedImgAtom = atom({
    key: 'loadedImgAtom',
    default: assets.scrollImages[1]
})
export const isImgLoadingAtom = atom({
    key:'isImgLoadingAtom',
    default: false
})
export const isLoadingAtom = atom({
    key: 'isLoadingAtom',
    default: false
})


//  ------ BACKEND TO FRONTEND ---------
export const backendUrlAtom = atom({
    key: 'backendUrlAtom',
    default: import.meta.env.VITE_BACKEND_URL
})

export const tokenAtom = atom({
    key: 'tokenAtom',
    default: localStorage.getItem('token')
})

// -------------------- FETCH CREDIT API -------------------------

// export const creditSelector = selectorFamily({
//     key: 'creditSelector',
//     get: ()=>async({get})=>{
//         try{
//             const backendURL = get(backendUrlAtom);
//             const token = get(tokenAtom);
//             const response = await axios.get(backendURL+'/api/user/credit', {headers:{token}})
//             return response.data;
//         }
//         catch(err){
//             console.error(err.message);
//         }
//     }
// })
// function to fetch credit data from API to be used in selector()
export const fetchCreditData = async(backendURL, token)=>{
    
    try{
        const response = await axios.get(backendURL+'/api/user/credit', {headers: {token}});
        return response.data;
    }
    catch(err){console.error('ERROR-ATOM: ', err.message); throw err};
}
// invoke the fetchCreditData() 
export const creditDataSelector = selector({
    key: 'creditDataSelector',
    get: async({get})=>{
        const URL = get(backendUrlAtom);
        const token = get(tokenAtom);
        const creditPoints = await fetchCreditData(URL,token);
        return creditPoints;
    }
})


