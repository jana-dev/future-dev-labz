import Faq from "./components/Faq/Faq";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Header from "../../components/Header/Header";
import WhichIsRoblox from "./components/WhichIsRoblox/WhichIsRoblox";
import CourseDetails from "./components/CourseDetails/CourseDetails";
import CourseContent from "./components/CourseContent/CourseContent";
import ParentsOpinion from "./components/ParentsOpinion/ParentsOpinion";

const Main = () => {
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      document.title = "SEU FILHO RUMO AO FUTURO 🚀";
    } else {
      document.title = "Future - Dev Labz";
    }
  });

  return (
    <>
      <Header />
      <Hero />
      <WhichIsRoblox />
      <CourseDetails />
      <CourseContent />
      <ParentsOpinion />
      <Footer />
      <Faq />
    </>
  );
};

export default Main;
