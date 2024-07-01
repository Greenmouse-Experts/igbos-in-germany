// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// //@ts-nocheck
// import { Input } from "@material-tailwind/react";
// import { useState } from "react";
// import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
// import { IoMdEye, IoMdEyeOff } from "react-icons/io";
// import { NavLink } from "react-router-dom";
// import { useLogin } from "./useLogin";
// import SpinnerMini from "../../components/SpinnerMini";
// import AuthButton from "./AuthButton";
// import toast from "react-hot-toast";

// interface FormData extends FieldValues {
//   email: string;
//   password: string;
// }

// function SignInForm() {

 

//   const [showPassword, setShowPassword] = useState(false);
//   const handleClickShowPassword = () => setShowPassword((show) => !show);

  
//   const { register, handleSubmit, formState } = useForm({});
//   const { errors } = formState;
//   console.log(errors)

//   // const {  } = formState;

//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const form = useForm<FormData>({
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   });

//   const { login, isLoading } = useLogin();
//   // const dispatch = useDispatch();

//   const onSubmit: SubmitHandler<FieldValues> = ({password, email}) => {
//     const formData = new FormData();
//     formData.append("login_details", email);
//     formData.append("password", password);
//     toast.error(`Cross-Origin Request Blocked`);
//     login(
//       { login_details:email, password },
  
//     );
//   };
  
//   return (
//     <section className="px-0 py-0 grid xl:grid-cols-2 grid-cols-1">
//       <div>
//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className="md:w-[32rem] bg-white dark:bg-darkMood w-full px-5 py-10 flex flex-col justify-center items-start mx-auto h-auto rounded-2xl"
//         >
//           <NavLink to="/">
//             <img src="/logo.svg" alt="logo" className=" scale-90 mb-10 " />
//           </NavLink>
//           <div className="flex flex-col gap-4 w-full">
//             <h2 className="text-[2.5rem] font-bold tracking-[-2px] mb-1">
//               Sign in
//             </h2>
//             <p className="text-grey-800 text-lg font-normal mb-8">
//               Please login to continue
//             </p>

//             <div className="flex flex-col gap-8 ">
//              <div className="mb-4">
//              <Input
//                 color="#015907"
//                 label="Username"
//                 type="text"
//                 disabled={isLoading}
//                 className="!h-[4rem] focus:!border-colorPrimary !rounded-[10px] border-[#D9D9D9] text-lg   "
//                 labelProps={{
//                   className: " text-lg focus:after:!border-colorPrimary border-colorPrimary ",
//                   style: { color: '#9A9A9A',  },
//                 }}
//                 {...register("email", { required: "username is required" })}
//                 error={!!errors.email}
//               />
//              </div>
//               <div className="relative w-full">
//                 <Input
//                   color="#015907"
//                   label="Password"
//                   disabled={isLoading}
//                   type={showPassword ? "text" : "password"}
//                   className="!h-[4rem]  focus:border-colorPrimary !rounded-[10px] border-[#D9D9D9] text-lg   "
//                   labelProps={{
//                     className: " text-lg focus:after:!border-colorPrimary border-colorPrimary ",
//                     style: { color: '#9A9A9A',  },
//                   }}
//                   {...register("password", {
//                     required: "Password is required",
//                   })}
//                   error={!!errors.password}
//                 />
//                 <span
//                   className="absolute right-3 top-4 cursor-pointer"
//                   onClick={handleClickShowPassword}
//                 >
//                   {showPassword ? (
//                     <IoMdEyeOff size={27} color="gray" />
//                   ) : (
//                     <IoMdEye size={27} color="gray" />
//                   )}
//                 </span>
//               </div>

//               <p className="text-grey-800 text-lg font-normal mt-2 ">
//                 Forgot Password?{" "}
//                 <NavLink to="/forgot-password"
//                   className="text-blue-700 underline !font-bold pb-1 cursor-pointer"
                
//                 >
//                   Click here
//                 </NavLink>
//               </p>
//               <div className="flex gap-2">
//                 <input type="checkbox" name="" id="check" className="w-5 h-5" />
//                 <label htmlFor="check">Keep me logged in</label>
//               </div>
//               <AuthButton type="submit" disabled={isLoading} >
//               {!isLoading ? "Sign in" : <SpinnerMini />}
//               </AuthButton>
//               <div className="w-full flex justify-center items-center">
//                 <span className="bg-grey-400 h-[1.5px] block w-full"></span>
//                 <span className="mx-2 text-grey-700">or</span>
//                 <span className="bg-grey-400 h-[1.5px] inline w-full"></span>
//               </div>
//             </div>

//             <p className="text-grey-800 text-lg font-normal mb-3 text-center mt-3">
//               Need an account?{" "}
//               <span className="text-blue-700 underline !font-bold pb-1">
//                 <NavLink to="/signup" className="text-blue-700 underline !font-bold pb-1">Create one</NavLink>
//               </span>
//             </p>
//           </div>
//         </form>
//       </div>

//       <div className="hidden xl:block h-full">
//         <img src="/img/login-img.svg" alt="" className="object-cover object-center h-full" />
//       </div>
//     </section>
//   );
// }

// export default SignInForm;
