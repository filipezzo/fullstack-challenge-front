import { Outlet } from "react-router-dom";
import { HeaderLayout } from "./header-layout";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col gap-6 bg-zinc-200 font-saira">
      <HeaderLayout />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
