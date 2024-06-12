// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { Input } from "@material-tailwind/react";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { NavLink } from "react-router-dom";

interface FormData extends FieldValues {
  email: string;
  password: string;
}

function SignUpForm() {
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(!open);

  const [showPassword, setShowPassword] = useState(false);
  const [showpassword_confirmation, setShowpassword_confirmation] =
  useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowpassword_confirmation = () =>
    setShowpassword_confirmation((show) => !show);

  const {  handleSubmit } = useForm({});
  // const {  } = formState;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const form = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // const { login, isLoading } = useLogin();
  // const dispatch = useDispatch();

  const onSubmit: SubmitHandler<FieldValues> = () => {
    // login(
    //   { email, password },
    //   {
    //     onSuccess(data) {
    //       dispatch(saveUser(data.data));
    //       dispatch(setToken(data.token));
    //       localStorage.setItem("token", data.token);
    //       dispatch(setIsLoggedIn());
    //       sessionStorage.setItem("lte_token", data.token);
    //       // dispatch(loginUser())
    //     },
    //   }
    // );
  };
  return (
    <section className="px-0 py-0 grid xl:grid-cols-2 grid-cols-1">
      <div>
      <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:w-[32rem] bg-white dark:bg-darkMood w-full px-5 py-10 flex flex-col justify-center items-start mx-auto h-auto rounded-2xl"
        >
          <NavLink to="/">
            <img src="/logo.svg" alt="logo" className=" scale-90 mb-10 " />
          </NavLink>
          <div className="flex flex-col gap-4 w-full">
            <h2 className="text-[2.5rem] font-bold tracking-[-2px] mb-1">
              Sign Up
            </h2>
            <p className="text-grey-800 text-lg font-normal mb-8">
            Fill in your details to create an account
            </p>

            <div className="flex flex-col gap-8 ">
             <div className="mb-4">
             <Input
                color="#015907"
                placeholder="Your Full Name"
                label="Full Name"
                className="!h-[4rem] focus:!border-colorPrimary !rounded-[10px] border-[#D9D9D9] text-lg   "
                labelProps={{
                  className: " text-lg focus:after:!border-colorPrimary border-colorPrimary ",
                  style: { color: '#9A9A9A',  },
                }}
              
              />
             </div>
             <div className="mb-4">
             <Input
                color="#015907"
                label="Email"
                placeholder="Your Email Address"
                className="!h-[4rem] focus:!border-colorPrimary !rounded-[10px] border-[#D9D9D9] text-lg   "
                labelProps={{
                  className: " text-lg focus:after:!border-colorPrimary border-colorPrimary ",
                  style: { color: '#9A9A9A',  },
                }}
              
              />
             </div>
             <div className="relative w-full mb-4">
             <Input
                  color="#015907"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  className="!h-[4rem]  focus:border-colorPrimary !rounded-[10px] border-[#D9D9D9] text-lg   "
                  labelProps={{
                    className: " text-lg focus:after:!border-colorPrimary border-colorPrimary ",
                    style: { color: '#9A9A9A',  },
                  }}
                />
                <span
                  className="absolute right-3 top-4 cursor-pointer"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? (
                    <IoMdEyeOff size={27} />
                  ) : (
                    <IoMdEye size={27} />
                  )}
                </span>
              </div>
             
               <div className="relative w-full mb-4">
               <Input
                  color="#015907"
                  label="Confirm Password"
                  type={showpassword_confirmation ? "text" : "password"}
                  className="!h-[4rem]  focus:border-colorPrimary !rounded-[10px] border-[#D9D9D9] text-lg   "
                  labelProps={{
                    className: " text-lg focus:after:!border-colorPrimary border-colorPrimary ",
                    style: { color: '#9A9A9A',  },
                  }}
                />
                <span
                  className="absolute right-3 top-4 cursor-pointer"
                  onClick={handleClickShowpassword_confirmation}
                >
                  {showpassword_confirmation  ? (
                    <IoMdEyeOff size={27} />
                  ) : (
                    <IoMdEye size={27} />
                  )}
                </span>
              </div>

              <div className="flex gap-2">
              <input
                type="checkbox"
                name=""
                id="checkbox"
                className="w-5 h-5"
              />
              <label htmlFor="checkbox" className="text-[#232323] font-normal">
                I agree to{" "}
                <span className=" font-semibold">
                 Terms and Conditions
                </span>
              </label>
            </div>
             
              <button className="btn-green btn bg-colorPrimary py-4 rounded-[10px] text-white font-semibold">
                Sign up
              </button>
              <div className="w-full flex justify-center items-center">
                <span className="bg-grey-400 h-[1.5px] block w-full"></span>
                <span className="mx-2 text-grey-700">or</span>
                <span className="bg-grey-400 h-[1.5px] inline w-full"></span>
              </div>
            </div>

            <p className="text-grey-800 text-lg font-normal mb-3 text-center mt-3">
            Already have an account? {" "}
              <span className="text-blue-700 underline !font-bold pb-1">
                <NavLink to="/signin" className="text-blue-700 underline !font-bold pb-1">Sign in</NavLink>
              </span>
            </p>
          </div>
        </form>
      </div>

      <div className="hidden xl:block h-full">
        <img src="/img/signup-img.svg" alt="" className=" object-cover object-center h-full"/>
      </div>
    </section>
  );
}

export default SignUpForm;
