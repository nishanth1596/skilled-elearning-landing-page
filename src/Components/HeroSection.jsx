import Button from "./Button";
import heroImgMobile from "../assets/image-hero-mobile@2x.webp";

const HeroSection = () => {
  return (
    <section className="mx-5 my-16 md:mx-11 md:my-28 xl:mx-40 xl:mb-44">
      <div className="max-w-[19.75rem] md:max-w-[20.4rem] xl:max-w-[34rem]">
        <h1 className="text-fs-3 font-normal leading-120% md:text-fs-2 md:font-extrabold xl:mt-[6.9rem] xl:text-fs-1 xl:font-bold">
          Maximize skill, minimize budget
        </h1>
        <p className="mt-6 text-lg font-medium leading-150% text-grey xl:max-w-md">
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>
        <Button type="gradient1" />
      </div>
      <div className="mt-12">
        <img
          className="w-full md:hidden"
          src={heroImgMobile}
          alt="A woman learning from her laptop while having a hot coffee"
        />
      </div>
    </section>
  );
};

export default HeroSection;
