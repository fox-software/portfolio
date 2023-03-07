import { Header } from "../src/components/Header";
import { SocialMedia } from "./components/SocialMedia";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className="page">
      <Header />
      <SocialMedia />
      <Footer />
    </div>
  );
}
