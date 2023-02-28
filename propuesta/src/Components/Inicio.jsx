import img from "../Icons/39246.jpg";
export default function Inicio() {
  return (
    <>
      <section className="fondo">
        <div className="heade">
          <span className="heade1">ESPERO ESTES MUY BIEN</span>
          <a href="/declaracion">
            <span className="heade2">💙</span>
          </a>

          <span className="heade3">👆</span>
          <span className="heade3">Click</span>
        </div>
        <img src={img} className="m1" alt="" />
      </section>
    </>
  );
}
