export default function Title(props) {
  return (
    <h1
      style={{
        "font-weight": "bold",
        "font-size": "24pt",
        "color": "#616162",
        ...props.style
      }}
    >
      {props.children}
    </h1>
  );
}