import Nav from "./components/Nav";
import Footer from "./pages/Footer";
import GameZone from "./pages/GameZone";
import Hero from "./pages/Hero";
import Proyecto from "./pages/Proyecto";
import Testimonial from "./pages/Testimonial";

const App = () => {
  return (
    <main className="relative min-h-screen flex flex-col gap-20 bg-[radial-gradient(circle_at_center,#1E0024_0%,rgba(0,0,0,0.95)_100%)] justify-between">
      <div
        className="fixed inset-0 z-20 pointer-events-none"
        style={{
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      ></div>
      <Nav />
      <Hero />
      <Proyecto />
      <Testimonial />
      <GameZone />
      <Footer />
    </main>
  );
};

export default App;
