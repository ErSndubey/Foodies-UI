const ShimmerMain = () => {
  return (
    <div className="grid grid-cols-2 ml-1 xl:ml-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
      {Array(15).fill("").map((_, index) => (
        <div key={index} className="w-44 xl:w-72 ml-1 my-3">
          <div className="h-48 bg-slate-300 rounded-t-lg animate-pulse"></div>
          <div className="w-40 xl:w-32 h-5 rounded mt-3 bg-slate-300 animate-pulse"></div>
          <div className="w-40 xl:w-60 h-5 rounded mt-3 bg-slate-300 animate-pulse"></div>
          <div className="w-24 h-5 rounded mt-3 bg-slate-300 animate-pulse"></div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerMain;
