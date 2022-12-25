import React from "react";
import { BallTriangle } from "react-loader-spinner";

function Hero() {
  const [text, setText] = React.useState("");
  const [img, setImg] = React.useState(
    "https://source.unsplash.com/random/600x600/?ai"
  );
  const [loader, setLoader] = React.useState(false);
  const [visible, setVisible] = React.useState("none");
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage:
          "url('https://source.unsplash.com/random/1920×1080/?dark')",
        backgroundRepeat: "no-repeat",
        // filter: "blur(8  px)",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          position: "absolute",
          zIndex: "999",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="card lg:w-full lg:card-side bg-base-100 shadow-xl">
          <figure className="">
            <img src={img} className="h-full " alt="Album" />
          </figure>
          <div className="card-body flex flex-col lg:gap-20 items-center lg:items-none gap:10 justify-center">
            <h2 className="card-title text-xs lg:text-2xl ">
              AI based Image Generator
            </h2>
            <form>
              <input
                type="text"
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
                placeholder="Describe an Image"
                className="input input-bordered input-sm md:input-md my-2  md:my-0  md:w-full max-w-xs "
              />
              <div className="card-actions items-center justify-center">
                <button
                  type="submit"
                  className="btn btn-primary btn-sm md:btn-md  lg:my-10 my-5 "
                  onClick={async (e) => {
                    e.preventDefault();
                    setVisible("flex");
                    setLoader(true);
                    const response = await fetch(
                      // "http://localhost:5000/openai/generateimage",
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
                      setVisible("none");
                      setLoader(false);
                    }
                  }}
                >
                  Generate
                </button>
              </div>
            </form>
            <p className="text-xs text-center  font-rale font-bold">
              Made with ❤️ by SHIVANSH SONI
            </p>
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
    </div>
  );
}

export default Hero;
