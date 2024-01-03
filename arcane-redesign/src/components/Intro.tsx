function Intro() {
  return (
    <section className="intro-section">
      <div className="heading">
        <svg>
          <text x="0%" y="50%" text-anchor="start">
            League Of Legends
          </text>
        </svg>
        <svg>
          <text x="0%" y="50%" text-anchor="start">
            League Of Legends
          </text>
        </svg>

        <h1>
          <div className="first-char">A</div>
          <div className="reveal-chars">
            <span>rcane</span>
          </div>
        </h1>

        <svg>
          <text x="0%" y="50%" text-anchor="start">
            League Of Legends
          </text>
        </svg>
        <svg>
          <text x="0%" y="50%" text-anchor="start">
            League Of Legends
          </text>
        </svg>
      </div>
      <div className="creators">
        <ul className="creators-list">
          <li className="creators-list_item">
            <img src="/riot-logo.png" className="creators-list_item_img"></img>
          </li>
          <li className="creators-list_item">
            <img
              src="/netflix-logo.png"
              className="creators-list_item_img"
            ></img>
          </li>
        </ul>
      </div>
      <div className="trailer">
        <img
          src="/jinx-overlay.jpg"
          alt="Trailer Thumbnail"
          className="trailer-thumbnail"
        />
        <img
          src="/play-button.png"
          alt="Trailer Play Button"
          className="play-button"
        />
      </div>
    </section>
  );
}

export default Intro;
