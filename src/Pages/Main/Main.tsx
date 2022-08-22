import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Header from "../../components/Header/Header";
import WhichIsRoblox from "./components/WhichIsRoblox/WhichIsRoblox";
import CourseDetails from "./components/CourseDetails/CourseDetails";
import CourseContent from "./components/CourseContent/CourseContent";
import ParentsOpinion from "./components/ParentsOpinion/ParentsOpinion";

const Main = () => {
  return (
    <>
      <Header />
      <Hero />
      <WhichIsRoblox />
      <CourseDetails />
      <CourseContent />
      <ParentsOpinion />
      <Footer />
    </>
  );
};

export default Main;
