export default function Lock(props) {
    return (
      <div 
        style={{
          "margin": "0.25in 0 0 0",
          "text-align": "center",
          ...props.style 
          }}
        >
        <img 
          style={{  "width": "2in"}} 
          src="lock.png"
        />
      </div>
    );
}