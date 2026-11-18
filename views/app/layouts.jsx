// views/app/layouts.jsx
import Header from "../partials/header";
import Footer from "../partials/footer";
import Page from "./page";

export default function Layouts() {
  return (
    <div className="font-sans antialiased bg-white text-gray-800 flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Page />
      </main>
      <Footer />
    </div>
  );
}