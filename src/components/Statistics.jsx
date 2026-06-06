const Statistics = () => {
  const stats = [
    { value: "+1000", label: "عملاء راضون" },
    { value: "+500", label: "مشاريع مكتملة" },
    { value: "+100", label: "فريق عمل مختص" },
    { value: "24/7", label: "دعم فني متاح" },
  ];

  return (
    <section className="bg-(--color-background) py-12">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div className="text-center" key={index}>
              <h3 className="text-3xl md:text-6xl bg-linear-to-br from-(--main-color) to-(--gr-color) bg-clip-text text-transparent font-medium">
                {stat.value}
              </h3>
              <p className="text-(--text-color)"> {stat.label} </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
