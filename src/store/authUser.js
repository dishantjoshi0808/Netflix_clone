// import {create} from 'zustand'

// export const useAuthStore = create((set)=>({
//     user:null,
//     isSigningUp:false,
//     signup : async(credentials)=>{
//         set({isSigningUp:true})
//         try{
//             const response = await axios.post("/api/v1/auth/singnup",credentials)
//             set({user:response.data.user,isSigningUp:false})
//         }
//         catch (error){
//             toast.error(error.response.data.message || "An error ocurred")
//             set({isSigningUp:false,user:null})
//         }
        
//     },
//     login : async()=>{},
//     logout : async()=>{},
//     authcheck : async()=>{},
// }))