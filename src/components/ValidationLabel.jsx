export default function ValidationLabel(props) {
  return (
    <p
      style={{
        "color": "#ff0000",
        "margin": 0,
        "display": props.isValid ? "none" : "inline"
      }}
    >
      {props.text}
    </p>
  );
}