import Button from "./Button";
import heroImgMobile from "../assets/image-hero-mobile@2x.webp";

const HeroSection = () => {
  return (
    <section className="mx-5 my-16 md:mx-11 md:my-16 xl:mx-40">
      <div className="max-w-[19.75rem] md:max-w-[20.5rem] md:py-[2.6rem] xl:my-[6.9rem] xl:max-w-[34rem]">
        <h1 className="text-fs-2 font-normal leading-120% md:text-fs-2 md:font-extrabold xl:text-fs-1 xl:font-bold">
          Maximize skill, minimize budget
        </h1>
        <h2 className="sr-only"></h2>
        <p className="mt-6 text-lg font-medium leading-150% text-grey xl:max-w-md">
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>
        <Button type="gradient1" />
      </div>

      <img
        className="mt-12 w-full md:hidden"
        src={heroImgMobile}
        alt="A woman learning from her laptop while having a hot coffee"
      />
    </section>
  );
};

export default HeroSection;
