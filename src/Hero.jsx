import React from "react";
import { BallTriangle } from "react-loader-spinner";

function Hero() {
  const [text, setText] = React.useState("");
  const [img, setImg] = React.useState(
    "https://img.freepik.com/free-photo/ai-nuclear-energy-industry-innovation-smart-grid-disruptive-technology_53876-143121.jpg?w=740&t=st=1671949871~exp=1671950471~hmac=7aace702d6f527d1f17e00c87fe60d5409cdba6544c57d6354b421cd7e845bf3"
  );
  const [loader, setLoader] = React.useState(false);
  const [visible, setVisible] = React.useState("none");

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="card lg:w-full lg:card-side bg-base-100 shadow-xl">
        <figure className="">
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
                setVisible("flex");
                setLoader(true);
                const response = await fetch(
                  "https://cute-cyan-adder.cyclic.app/openai/generateimage",
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
                  setTimeout(() => {
                    setVisible("none");
                    setLoader(false);
                  }, 5000);
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
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "rgb(0,0,0 , 0.8)",
              display: `${visible}`,
              justifyContent: "center",
              alignItems: "center",
              width: "100vw",
              height: "100vh",
            }}
          >
            <BallTriangle
              height={100}
              width={100}
              radius={5}
              color="#4fa94d"
              ariaLabel="ball-triangle-loading"
              wrapperClass={{}}
              wrapperStyle=""
              visible={loader}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
