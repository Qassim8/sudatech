const MainTitle = ({ title, subtitle, description, pos, margin }) => {
  return (
    <div className={`${pos} ${margin} md:max-w-2xl pb-10`}>
      <h1 className="text-base md:text-lg font-bold text-(--gr-color)">
        {title}
      </h1>
      <p className="text-lg md:text-3xl font-black text-slate-900 my-2">
        {subtitle}
      </p>
      <p className="text-xs md:text-sm text-(--text-color)">{description}</p>
    </div>
  );
};

export default MainTitle;
