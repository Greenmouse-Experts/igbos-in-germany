// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { Input } from "@material-tailwind/react";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";


interface FormData extends FieldValues {
  email: string;
  password: string;
}

function ForgotPassword() {



  const { handleSubmit } = useForm({});
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
    <main>
      <section className="px-0 py-0 grid xl:grid-cols-2 grid-cols-1">
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="md:w-[32rem] bg-white dark:bg-darkMood w-full px-5 py-10 flex flex-col justify-center items-center mx-auto h-full rounded-2xl"
          >
            {/* <NavLink to="/">
              <img src="/logo.svg" alt="logo" className=" scale-90 mb-10 " />
            </NavLink> */}
            <div className="flex flex-col justify-center gap-4 w-full">
              <h2 className="text-[2.5rem] font-bold tracking-[-2px] mb-1">
                Forget Password?
              </h2>
              <p className="text-grey-800 text-lg font-normal mb-8">
                Enter the email address associated with your account.
              </p>

              <div className="flex flex-col gap-8 ">
                <div className="mb-4">
                  <Input
                    color="#015907"
                    label="Your Email Address"
                    className="!h-[4rem] focus:!border-colorPrimary !rounded-[10px] border-[#D9D9D9] text-lg   "
                    labelProps={{
                      className:
                        " text-lg focus:after:!border-colorPrimary border-colorPrimary ",
                      style: { color: "#9A9A9A" },
                    }}
                  />
                </div>

               
                <button className="btn-green btn bg-colorPrimary py-4 rounded-[10px] text-white font-semibold">
                  Confirm
                </button>
                
              </div>
            </div>
          </form>
        </div>

        <div className="hidden xl:block h-full">
          <img
            src="/img/forgot-img.svg"
            alt=""
            className="object-cover object-center h-full"
          />
        </div>
      </section>
    </main>
  );
}

export default ForgotPassword;
