import React from "react";

function Hero() {
  const [text, setText] = React.useState("");
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      {" "}
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src="https://placeimg.com/400/400/arch" alt="Album" />
        </figure>
        <div className="card-body flex flex-col gap-20 justify-center">
          <h2 className="card-title text-2xl">AI based Image Generator</h2>
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            placeholder="Describe an Image"
            className="input input-bordered w-full max-w-xs"
          />
          <div className="card-actions items-center justify-center">
            <button className="btn btn-primary ">Listen</button>
          </div>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
