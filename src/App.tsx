import { Header } from "../src/components/Header";
import { SubHeader } from "./components/SubHeader";
import { SocialMedia } from "./components/SocialMedia";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <>
      <Header />
      <div className="page">
        <SubHeader />
        <SocialMedia />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}
