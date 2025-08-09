import { Link, Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="h-dvh bg-gray-50 justify-center items-center flex flex-col">
      <div className="w-[480px] flex flex-col justify-center items-center gap-2">
        <Link to="/">
          <img
            src="https://www.skilluplabs.com.au/bg_gray_logo_horizontal.png"
            alt=""
          />
        </Link>

        <Outlet />
      </div>
    </div>
  );
}
