const Button = ({ type }) => {
  const style = {
    dark: "rounded-full bg-blue900 px-8 py-4 text-lg font-bold leading-150% text-white hover:bg-blue600 md:px-6 md:py-2.5",
    gradient1:
      "mt-10 text-fs-7 text-white bg-gradient-pink hover:bg-gradient-hover px-8 py-4 rounded-full",
    card: "mt-6 text-pink600 hover:text-pink300 text-fs-7 leading-150% font-bold ",
    purple:
      "text-white py-2.5 px-6 bg-gradient-purple rounded-full font-bold text-lg leading-150",
  };

  return <button className={style[type]}>Get Started</button>;
};

export default Button;
