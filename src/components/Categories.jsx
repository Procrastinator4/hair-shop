import React from "react";

const Categories = ({
  id,
  image1,
  image2,
  image3,
  title1,
  title2,
  title3,
  heading,
}) => {
  return (
    <section className="min-h-[100vh] py-12 space-y-8" id={id}>
      {/* heading for categories */}
      <div className="text-center mx-auto w-full mb-24">
        <h1 className="text-5xl my-4">{heading} </h1>
        <p className="text-lg">
          Experiment for using these products is very successful and you can do
          too.
        </p>
      </div>
      {/* categories products list  */}
      <div className="grid grid-cols-3 px-28 gap-20 w-full">
        <div className=" flex flex-col space-y-8 w-full h-[30rem] items-center ">
          <div className=" h-[70%] relative">
            <img src={image1} alt="watch" className=" h-full  rounded-full " />
          </div>
          <h1 className="text-3xl font-semibold">{title1}</h1>
          <a
            href="#"
            className="px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded-md"
          >
            Go Shop
          </a>
        </div>
        <div className=" flex flex-col space-y-8 w-full h-[30rem] items-center ">
          <div className=" h-[70%] relative">
            <img src={image2} alt="watch" className=" h-full  rounded-full " />
          </div>
          <h1 className="text-3xl font-semibold">{title2}</h1>
          <a
            href="#"
            className="px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded-md"
          >
            Go Shop
          </a>
        </div>
        <div className=" flex flex-col space-y-8 w-full h-[30rem] items-center ">
          <div className=" h-[70%] relative">
            <img src={image3} alt="watch" className=" h-full  rounded-full " />
          </div>
          <h1 className="text-3xl font-semibold">{title3}</h1>
          <a
            href="#"
            className="px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded-md"
          >
            Go Shop
          </a>
        </div>
      </div>
    </section>
  );
};

export default Categories;
