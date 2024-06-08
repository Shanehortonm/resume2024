import React from "react";

export const Contact = () => {
  return (
    <div
      id="Contact"
      className="h-full p-4 lg:p-20 flex flex-col items-center justify-center"
    >
      <h1
        data-aos="fade-in"
        className="text-[2.8rem] font-semibold mb-8 leading-normal text-cyan-500 uppercase"
      >
        Connect with Me
      </h1>
      <form
        data-aos="fade-in"
        action=""
        className="flex flex-col gap-2 lg:w-1/2"
      >
        <div className="lg:flex gap-6">
          <input
            className="w-full my-3 rounded-lg bg-black p-4 border-2 border-cyan-500 b_glow text-white"
            placeholder="What's your Name?"
            type="text"
          />
          <input
            className="w-full my-3 rounded-lg bg-black p-4 border-2 border-cyan-500 b_glow text-white"
            placeholder="Your email?"
            type="email"
          />
        </div>
        <textarea
          className="w-full my-3 rounded-lg bg-black p-4 border-2 border-cyan-500 b_glow text-white"
          placeholder="What's Up?"
          name=""
          id=""
          cols="20"
          rows="10"
        ></textarea>
        <button
          className="bg-cyan-800 shadow-xl hover:shadow-cyan-500 /50 text-white border-2 hover:bg-cyan-500  border-cyan-500  rounded-lg py-4 px-8 uppercase relative overflow-hidden font"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
