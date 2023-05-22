import "./App.css";
import moviePic from "./assets/images/movie.png";

function App() {
  return (
    <div className="flex h-full lg:h-screen   flex-col md:p-16">
      <div className="flex justify-between flex-col-reverse lg:flex-row h-full p-16 lg:h-screen">
        <div className="   w-full h-full md:w-full ">
          <img
            src={moviePic}
            alt="Your Image"
            className="h-500 w-full object-contain"
          />
          <div className="w-full justify-center lg:hidden">
            <button
              className="text-center w-full py-6 text-white text-md p-3 rounded-lg lg:flex"
              style={{
                background:
                  "linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%)",
              }}
            >
              🎉 Create my event
            </button>
          </div>
        </div>
        <div className="w-full   h-full   flex items-center justify-center my-10 lg:justify-end">
          <div className=" items-center gap-y-2 justify-center lg:justify-end">
            <p className="lg:text-6xl text-4xl font-bold lg:text-right text-center">
              Imagine if
            </p>
            <p
              className="lg:text-6xl my-2 text-4xl font-bold lg:text-right text-center"
              style={{
                background:
                  "linear-gradient(90deg, #8456EC 24.2%, #E87BF8 120.46%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Snapchat
            </p>
            <p className="lg:text-6xl text-4xl font-bold lg:text-right text-center">
              had events.
            </p>
            <p
              className="lg:text-2xl text-xl my-2  font-light text-center lg:text-right"
              style={{ width: 521 }}
            >
              Easily host and share events with your friends across any social
              media.
            </p>

            <div className="flex justify-end">
              <button
                className="text-center text-white text-sm p-3 rounded-lg hidden lg:flex"
                style={{
                  background:
                    "linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%)",
                }}
              >
                🎉 Create my event
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
