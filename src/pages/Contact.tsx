// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import Banner from "../components/Banner";
import BtnWhite from "../components/Buttons/BtnWhite";
import InputText from "../components/InputText";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { Dialog, DialogBody, DialogFooter } from "@material-tailwind/react";

interface ContactForm {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

function Contact() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const initialValues: ContactForm = {
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  };

  const { control, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>({
    defaultValues: initialValues,
  });

  const onSubmit = async (data: ContactForm) => {
    setLoading(true);
    console.log(data);
    try {
      const response = await axios.post(
        "https://api.ndiigbogermany.org/api/submit/contact",
        {
          ...data,
          full_name: data.name,
          phone_number: data.phone,
        }
      );
      // toast.success(response.data.message);
      reset(initialValues); // Reset the form to initial values after successful submission
      setOpen(true); // Open the success dialog
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit form");
    } finally {
      setLoading(false);
    }
  };

  const handleDialogClose = () => setOpen(false);

  return (
    <>
      <Banner page="Contact Us" img="/img/contact-banner.png" />

      <section className="padding">
        <div className="flex lg:flex-row flex-col gap-10 items-center">
          <div className="bg-white card-shadow dark:bg-bluePrimary dark:text-white shadow-lg rounded-md p-5 py-8 flex flex-col items-center text-center lg:w-[33%] w-full">
            <div className="bg-colorPrimary p-4 rounded-full w-fit scale-90">
              <img src="/icons/contact-1.svg" alt="location" className="scale-90" />
            </div>
            <div className="flex flex-col gap-3 mt-3">
              <h4 className="text-xl font-semibold">Address</h4>
              <p>60090 Frankfurt am Main, Germany</p>
            </div>
          </div>
          <div className="bg-white card-shadow dark:bg-bluePrimary dark:text-white shadow-lg rounded-md p-5 py-8 flex flex-col items-center text-center lg:w-[33%] w-full">
            <div className="bg-colorPrimary p-4 rounded-full w-fit scale-90">
              <img src="/icons/contact-2.svg" alt="location" className="scale-90" />
            </div>
            <div className="flex flex-col gap-3 mt-3">
              <h4 className="text-xl font-semibold">Phone Number</h4>
              <p>+49 162 2906722</p>
            </div>
          </div>
          <div className="bg-white card-shadow dark:bg-bluePrimary dark:text-white shadow-lg rounded-md p-5 py-8 flex flex-col items-center text-center lg:w-[33%] w-full">
            <div className="bg-colorPrimary p-4 rounded-full w-fit scale-90">
              <img src="/icons/contact-3.svg" alt="location" className="scale-90" />
            </div>
            <div className="flex flex-col gap-3 mt-3">
              <h4 className="text-xl font-semibold">Email Address</h4>
              <p>info@ndiigbogermany.org</p>
            </div>
          </div>
        </div>

        {/* map */}
        <div className="flex lg:flex-row gap-10 flex-col mt-32">
          <div className="lg:w-[50%] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5533842251325!2d3.3927071!3d6.451335299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b10ec458dc1%3A0x604b6b9aca21122d!2s3%20Ajele%20St%2C%20Lagos%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1718187207386!5m2!1sen!2sng"
              width="100%"
              height="500"
              style={{ border: 0 }}
            ></iframe>
          </div>
          <div className="bg-bluePrimary text-white px-8 py-10 lg:w-[50%] w-full md:ml-3 ml-0 shadow-md">
            <form
              className="flex flex-col 2xl:gap-8 gap-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex md:flex-row flex-col justify-between gap-8">
                <Controller
                  name="name"
                  control={control}
                  rules={{ required: "Name is required" }}
                  render={({ field }) => (
                    <InputText
                      label="Name"
                      type="text"
                      placeholder="Enter full name"
                      error={errors.name?.message}
                      {...field}
                    />
                  )}
                />
                <Controller
                  name="phone"
                  control={control}
                  rules={{ required: "Phone number is required" }}
                  render={({ field }) => (
                    <InputText
                      label="Phone"
                      type="tel"
                      placeholder="Enter phone number"
                      error={errors.phone?.message}
                      {...field}
                    />
                  )}
                />
              </div>
              <div>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: "Invalid email address",
                    },
                  }}
                  render={({ field }) => (
                    <InputText
                      label="Email"
                      type="email"
                      placeholder="Enter email address"
                      error={errors.email?.message}
                      {...field}
                    />
                  )}
                />
              </div>
              <div>
                <Controller
                  name="subject"
                  control={control}
                  rules={{ required: "Subject is required" }}
                  render={({ field }) => (
                    <InputText
                      label="Subject"
                      type="text"
                      placeholder="Subject"
                      error={errors.subject?.message}
                      {...field}
                    />
                  )}
                />
              </div>
              <div>
                <label className="text-black">Message</label>
                <Controller
                  name="message"
                  control={control}
                  rules={{ required: "Message is required" }}
                  render={({ field }) => (
                    <textarea
                      {...field}
                      placeholder="Message"
                      className="bg-[#F4F4F4] text-black h-[120px] pl-5 w-full pt-4 placeholder:text-bluePrimary"
                    />
                  )}
                />
                {errors.message && (
                  <p className="text-red-600">{errors.message.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="bg-colorPrimary btn btn-green rounded-md text-white font-semibold py-3"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="bg-colorPrimary flex flex-col justify-center items-center text-center text-white">
        <p className="text-2xl font-medium">
          Membership is open to All official registered Igbo Unions/Associations in Germany.
        </p>
        <BtnWhite />
      </section>

      {/* Success Dialog */}
      <Dialog open={open} handler={handleDialogClose}>
        <DialogBody>
          <div className="text-center text-black">
            <h3 className="text-2xl font-semibold mb-4">Success</h3>
            <p className=" text-xl">Thank you for reaching out! Your message has been successfully sent. We will get back to you shortly.!</p>
          </div>
        </DialogBody>
        <DialogFooter>
          <button
            className="bg-colorPrimary btn btn-green rounded-md text-white font-semibold py-2 px-3"
            onClick={handleDialogClose}
          >
            Close
          </button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default Contact;
