const SingleServiceItem = ({ service }) => {
  const { icon, title, description } = service;
  const Icon = icon;

  return (
    <div className="w-full h-full">
      <div className="group relative overflow-hidden rounded-2xl shadow-two hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark duration-300 p-8 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col" >
        <div className="mb-6 bg-primary/10 text-primary flex h-[60px] w-[60px] items-center justify-center rounded-md transition-transform duration-300 group-hover:scale-110">
          <Icon size={35} />
        </div>

        <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white transition-colors duration-300">
          {title}
        </h3>

        <div className="flex-grow">
          <p className="text-body-color pr-[10px] text-base leading-relaxed font-medium">
            {description}
          </p>
        </div>

        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-body-color/5 to-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
    </div>
  );
};

export default SingleServiceItem;
