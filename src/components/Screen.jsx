export default function Screen(props) {
  return (
    <aside
      style={{
          "position": "absolute",
          "display": props.show === false ? "none" : "block",
          "top": "0",
          "left": "0",
          "width": "100vw",
          "height": "100vh",
          "background-color": "#ffffffcc"
      }}
    >
      {props.children}
    </aside>
  );
}