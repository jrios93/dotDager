import Nav from "./components/Nav";
import Hero from "./pages/Hero";
import Proyecto from "./pages/Proyecto";

const App = () => {
  return (
    <main className="relative min-h-screen flex flex-col gap-10 bg-[radial-gradient(circle_at_center,#1E0024_0%,rgba(0,0,0,0.95)_100%)] justify-between">
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
    </main>
  );
};

export default App;
