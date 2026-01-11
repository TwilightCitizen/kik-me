import { createSignal } from "solid-js";
import { FiEye, FiEyeOff } from "solid-icons/fi";

export default function PassInput(props) {
  const [type, setType] = createSignal("password");
  const onClick = props => setType(type() === "password" ? "text" : "password");

  return (
    <div style={{ 
        "display": "flex", 
        "flex-direction": "row",
        "gap": "0.0625in"
      }}>

      <input
        type={type()}
        value={props.value}
        placeholder={props.placeholder}
        on:input={props.onInput}

        style={{  
          "flex-grow": 1,
          "padding": "0.09375in",
          "border": "1px solid #c3c3c3"
         }}
      />

      <span
        on:click={onClick}

        style={{
          "flex-grow": 0,
          "cursor": "pointer",
          "color": "#888"
        }}
      >
        {type() === "password" ? <FiEyeOff size={20} /> : <FiEye size={20} />}
      </span>
    </div>
  );
}
