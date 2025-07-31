import { div } from "motion/react-client";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

const Mode = (props) => {
  return (
      <label className="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-500 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-gray-500">
      <input className="peer sr-only" id="AcceptConditions" type="checkbox" onClick={props.event} />
      <div className="flex absolute h-8 w-14 justify-between p-2 items-center">
      <FaSun />
      <FaMoon />
      </div>
      <span className="absolute inset-y-0 start-0 m-1 size-6 rounded-full ring-[2px] ring-inset transition-all peer-checked:start-6 peer-checked:bg-transparent peer-checked:ring-transparant" />
    </label>
  );
}

export default Mode;
