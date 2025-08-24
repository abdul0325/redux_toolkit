import { useDispatch, useSelector } from "react-redux";
import { reset, increment, decrement } from "./features/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex w-full justify-center items-center min-h-screen bg-gradient-to-br from-blue-800 via-gray-400 to-purple-900">
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl p-8 flex flex-col items-center gap-6 w-[350px]">
        <h1 className="text-3xl font-extrabold text-white drop-shadow-lg">
          Counter App
        </h1>
        <p className="text-5xl font-bold text-yellow-300 drop-shadow-md">
          {count}
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <button
            onClick={() => dispatch(increment())}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-transform"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-red-400 to-red-600 text-white font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-transform"
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch(reset())}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-600 text-white font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-transform"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
