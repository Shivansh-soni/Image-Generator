import React from "react";

function Hero() {
  const [text, setText] = React.useState("");
  const [img, setImg] = React.useState("");

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
      <div className="card lg:card-side w-full bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Album" />
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
            <button
              className="btn btn-primary "
              onClick={async (e) => {
                e.preventDefault();

                const response = await fetch(
                  "http://localhost:5000/openai/generateimage",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      prompt: text,
                      size: "medium",
                    }),
                  }
                );

                const data = await response.json();
                console.log(data);
                // eslint-disable-next-line
                if (data.success == true) {
                  setImg(data.data);
                } else {
                  alert("Error! Please try again");
                  setText("");
                }
              }}
            >
              Listen
            </button>
          </div>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
