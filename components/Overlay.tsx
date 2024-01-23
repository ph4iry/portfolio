export function Overlay() {
  return (
    <div className="container">
      <header>
        <h1>
          <strong>spline/</strong>code <sup>Demo</sup>
        </h1>
        <nav>
          <a
            href="https://lol3p7.csb.app/"
            rel="noreferrer"
          >
            / work
          </a>
          <a href="https://2giomw.csb.app/" target="_blank" rel="noreferrer">
            / relax
          </a>
        </nav>
      </header>
      <section>
        This 3D scene was built with{" "}
        <a href="https://spline.design" target="_blank" rel="noreferrer">
          <strong>Spline</strong>
        </a>
        . Press & Drag to rotate, or touch the objects to interact.
      </section>
      <footer>Made with love by the Spline Team</footer>
    </div>
  );
}
