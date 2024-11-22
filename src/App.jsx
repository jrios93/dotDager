import Nav from "./components/Nav";
import Hero from "./pages/Hero";

const App = () => {
  return (
    <main className="relative min-h-screen flex flex-col justify-between">
      <Nav />
      <Hero />
    </main>
  );
};

export default App;
