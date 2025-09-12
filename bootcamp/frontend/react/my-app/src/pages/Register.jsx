import { useForm } from "react-hook-form";
import * as yup from "yup";
import AuthBox from "../components/AuthBox";
import AuthTitle from "../components/AuthTitle";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Link } from "react-router";

// Define the validation schema using Yup
const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/,
      "Password is not strong enough"
    )
    .required("Password is required"),
});

export function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const titleText = "Sign up your new account";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex flex-col gap-2 items-center w-full">
      <AuthTitle text={watch("firstName") + " " + titleText} />
      <AuthBox>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-1">
            <label className="font-semibold">First Name</label>
            <input
              type="text"
              id="firstName"
              {...register("firstName", { required: true })}
              className="border p-1 border-gray-300 rounded-sm"
            />
            {errors.firstName && (
              <span className="text-red-500 text-sm">
                {errors.firstName.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold">Last Name</label>
            <input
              type="text"
              id="lastName"
              {...register("lastName", { required: true })}
              className="border p-1 border-gray-300 rounded-sm"
            />
            {errors.lastName && (
              <span className="text-red-500 text-sm">
                {errors.lastName.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold">Email</label>
            <input
              type="text"
              id="email"
              {...register("email", { required: true })}
              className="border p-1 border-gray-300 rounded-sm"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                {...register("password", { required: true })}
                className="border p-1 border-gray-300 rounded-sm w-full pr-10"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="bg-amber-500 hover:bg-amber-600 px-4 py-2 mt-4 text-white rounded-lg w-full"
          >
            Sign Up
          </button>
        </form>
      </AuthBox>

      <p>
        Already have an account?
        <Link to="/sign-in" className="font-bol text-amber-400">
          Sign in
        </Link>
      </p>
    </div>
  );
}
