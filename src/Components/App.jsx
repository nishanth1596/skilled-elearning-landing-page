import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import heroImgTablet from "../assets/image-hero-tablet.png";
import heroImgDesktop from "../assets/image-hero-desktop.png";

const App = () => {
  return (
    <div className="flex h-dvh justify-center">
      <div className="relative max-w-[23.44rem] md:max-w-3xl xl:max-w-[90rem]">
        <Header />
        <Main />
        <Footer />
        <figure>
          <img
            className="absolute -top-[6rem] left-[25rem] -z-50 hidden md:block lg:hidden"
            src={heroImgTablet}
            alt="A woman learning from her laptop while having a hot coffee"
          />

          <img
            className="absolute -z-50 hidden md:hidden lg:hidden xl:-top-[15rem] xl:left-[46rem] xl:block"
            src={heroImgDesktop}
            alt="A woman learning from her laptop while having a hot coffee"
          />

          <figcaption>
            A woman learning from her laptop while having a hot coffee
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default App;
