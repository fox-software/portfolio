import { Header } from "../src/components/Header";
import { SubHeader } from "./components/SubHeader";
import { SocialMedia } from "./components/SocialMedia";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className="page">
      <Header />
      <SubHeader />
      <SocialMedia />
      <Footer />
    </div>
  );
}
