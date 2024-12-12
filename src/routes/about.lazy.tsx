import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="main-content p-4 max-w-3xl mx-auto">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          About Us
        </h1>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Who We Are
        </h2>
        <p className="text-lg text-gray-600">
          We are a passionate team dedicated to creating impactful web
          solutions. With a focus on user experience and modern design, we
          strive to make every project unique and effective.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Our Mission
        </h2>
        <p className="text-lg text-gray-600">
          Our mission is to deliver high-quality products and services that help
          businesses thrive in the digital age. We focus on innovation,
          creativity, and continuous learning to meet the ever-changing needs of
          our clients.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Contact Us
        </h2>
        <p className="text-lg text-gray-600">
          If you'd like to know more about what we do or just want to chat, feel
          free to reach out to us!
        </p>
        <p className="text-lg text-gray-600">
          Email:{" "}
          <a href="mailto:info@example.com" className="text-blue-500">
            info@example.com
          </a>
        </p>
      </section>
    </div>
  );
}
