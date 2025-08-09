import { useForm } from "react-hook-form";
import * as yup from "yup";
import AuthBox from "../components/AuthBox";
import AuthTitle from "../components/AuthTitle";
import { yupResolver } from "@hookform/resolvers/yup";

import { Link } from "react-router";

// Define the validation schema using Yup
const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

export function ForgotPassword() {
  const titleText = "Forgot your password?";

  const {
    register,
    handleSubmit,

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
      <AuthTitle text={titleText} />
      <p>Please enter your email address to reset your password.</p>
      <AuthBox>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
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

          <button
            type="submit"
            className="bg-amber-500 hover:bg-amber-600 px-4 py-2 mt-4 text-white rounded-lg w-full"
          >
            Send Password Reset Link
          </button>
        </form>
      </AuthBox>

      <p>
        Already have an account?
        <Link to="/register" className="font-bol text-amber-400">
          Sign In
        </Link>
      </p>
    </div>
  );
}
