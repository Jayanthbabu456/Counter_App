import Decrement from "./components/Decrement";
import Increment from "./components/Increment";
import Reset from "./components/Reset";
import { useState } from "react";
function App() {
  const [value, setValue] = useState(0);

  return (
    <div className="">
      <div>
        <p>Counter App</p>
        <div>
          <p>{value}</p>
          <div>
            <Increment i={value} i1={setValue} />
            <Reset r1={setValue} />
            <Decrement d={value} d1={setValue} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
