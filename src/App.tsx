import "./App.css";
import moviePic from "./assets/images/movie.png";

function App() {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="w-full lg:w-1/2 p-16 flex-grow max-h-screen">
        <img
          src={moviePic}
          alt="Your Image"
          className="h-auto w-full object-contain max-h-full"
        />
        <div className="w-full mt-4 lg:hidden">
          <button
            className="w-full h-14 sm:h-24 text-white text-md p-3 rounded-lg"
            style={{
              background: "linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%)",
            }}
          >
            🎉 Create my event
          </button>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center p-16">
        <div className="text-center lg:text-right">
          <p className="text-4xl lg:text-6xl font-bold">Imagine if</p>
          <p
            className="my-2 text-4xl lg:text-6xl font-bold"
            style={{
              background:
                "linear-gradient(90deg, #8456EC 24.2%, #E87BF8 120.46%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Snapchat
          </p>
          <p className="text-4xl lg:text-6xl font-bold">had events.</p>
          <p
            className="text-xl lg:text-2xl my-2 font-light"
            style={{ maxWidth: "521px" }}
          >
            Easily host and share events with your friends across any social
            media.
          </p>

          <div className="flex justify-center lg:justify-end">
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
  );
}

export default App;
