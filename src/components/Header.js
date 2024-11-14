export default function Header() {
  return (
    <>
      <div className="containers">
        <header className="d-flex justify-content-between align-items-center mx-5 py-3 border-bottom">
          <h3 className="fw-bold px-5">Rajshree T </h3>
          <button
            className="btn btn-primary arrow-icon"
            onClick={() =>
              (window.location.href =
                "mailto:tungare.rajshree@gmail.com?subject=Are%20You%20Ready%20for%20the%20Best%20Email%20of%20Your%20Day%3F")
            }
          >
            Get in touch <span className="arrow">{"\u2192"}</span>
          </button>
        </header>
      </div>
    </>
  );
}
