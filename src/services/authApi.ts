

import { AXIOS } from ".";
import { SignupProps, VerifyProps } from "../features/auth/auth.types"



export const signin = async(payload: SignupProps) => {
  return  AXIOS.post(`/auth/login`, payload).then((response) => response.data)
};

export const signup = async(payload:SignupProps) => {
    return  AXIOS.post(`/register`, payload).then((response) => response.data)
 } 

 export const verifyUser = async(payload:VerifyProps) => {
  return  AXIOS.post(`/email-confirm`, payload).then((response) => response.data)
} 
 export const forgotPassword = async(payload:{email:string}) => {
  return  AXIOS.post(`/forgot-password`, payload).then((response) => response.data)
} 
 export const resetPassword = async(payload:{password:string, code:string}) => {
  return  AXIOS.post(`/reset-password`, payload).then((response) => response.data)
} 




//  export const changePassword = async(payload) => {
//   return  AXIOS.post(`/auth/update-password`, payload).then((response) => response.data)
// } 