import { Outlet } from "react-router-dom";

export default function Onboarder() {
  return (
    <div>
      <h1 className="text-xl font-semibold">Welcome Onboarder</h1>
      {/* nested routes render here */}
      <Outlet />
    </div>
  );
}