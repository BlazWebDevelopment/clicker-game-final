import { Outlet } from "@remix-run/react";
import { NavbarDisplay } from "~/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { BackgroundBeams } from "~/components/UI/background-beams";

function PortfolioLayout() {
  return (
    <>
      <Toaster />

      <div className="bg-black-950/30 h-full bg-dot-white/[0.15]">
        <NavbarDisplay />
        <Outlet />
      </div>
    </>
  );
}

export default PortfolioLayout;
