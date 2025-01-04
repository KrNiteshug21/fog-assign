const DataConfig = ({ data }) => {
  const filteredData = data.map((obj) =>
    Object.keys(obj).reduce((acc, key) => {
      if (key !== "_id" && key !== "__v") {
        acc[key] = obj[key]; // Add the key-value pair to the accumulator object
      }
      return acc;
    }, {})
  );

  return (
    <>
      {filteredData.map((dataObj) => (
        <div key={dataObj._id}>
          {Object.keys(dataObj).map((key) => (
            <p
              className="flex justify-between items-center gap-2 border-white/20 hover:bg-white px-2 py-1 border-b-1 font-medium hover:text-primary-black tracking-wider transition-all duration-200 ease-in-out"
              key={key}
            >
              <span className="text-wrap">{key.toUpperCase()}</span>{" "}
              <span className="">
                {dataObj[key] === true
                  ? "ON"
                  : dataObj[key] === false
                  ? "OFF"
                  : dataObj[key]}
              </span>
            </p>
          ))}
        </div>
      ))}
    </>
  );
};

export default DataConfig;
