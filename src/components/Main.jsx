export default function Main(props) {
  return (
    <main
      style={{
        "display": "flex",
        "flex-direction": "column",
        "gap": "0.125in",
        "padding": "0.25in",
        "border": "0.0625in solid #f2f2f2",
        "background-color": "#ffffff",
        "width": "3.25in",
        "border-radius": "0.125in",
        "filter": "drop-shadow(0 0.0625in 0.0315in rgb(80 160 80))"
      }}
    >
      {props.children}
    </main>
  )
}