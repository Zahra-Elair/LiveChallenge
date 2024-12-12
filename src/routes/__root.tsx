import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-10 ">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Brand or App Name */}
          <h1 className="text-2xl font-bold text-primary">My Product Store</h1>

          {/* Navigation Links */}
          <div className="flex gap-6">
            <Link
              to="/"
              className="text-gray-600 hover:text-primary transition-colors duration-300 [&.active]:font-bold"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-primary transition-colors duration-300 [&.active]:font-bold"
            >
              About
            </Link>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <Outlet />

      {/* Developer Tools */}
      <TanStackRouterDevtools />
    </>
  ),
});
