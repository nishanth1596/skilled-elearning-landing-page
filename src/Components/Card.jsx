import Button from "./Button";

const Card = ({ title, logo, details }) => {
  if (!logo)
    return (
      <div className="rounded-2xl bg-gradient-pink p-8 text-fs-4 font-extrabold leading-120% text-white shadow-card-shadow xl:pt-16 xl:text-fs-3">
        <h3>{title}</h3>
      </div>
    );

  return (
    <div className="pb-10 pl-8 pr-8 shadow-card-shadow">
      <img className="max-w-14 md:-mt-7" src={logo} alt={`${title} logo`} />
      <h3 className="mt-9 text-xl font-extrabold leading-120%">{title}</h3>
      <p className="mt-6 text-base font-bold leading-150% text-grey xl:text-fs-5">
        {details}
      </p>
      <Button type="card" />
    </div>
  );
};

export default Card;
