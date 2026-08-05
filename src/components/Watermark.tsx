export function Watermark() {
  return (
    <div
      className="mw-juliet-sign"
      aria-label="Co-crafted by Juliet, in partnership with Madam Whim Marketing"
    >
      <div className="mw-juliet-swing">
        <div className="mw-pin" />
        <div className="mw-chain" />

        <a
          href="https://vlog.madamwhimmarketing.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mw-madamwhim"
          aria-label="Madam Whim Marketing"
        >
          <svg
            className="mw-diamond"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 1.5L22.5 12L12 22.5L1.5 12L12 1.5Z" />
          </svg>
          <span className="mw-madamwhim-text">Madam Whim Marketing</span>
        </a>

        <a
          href="https://www.juliet.space?via=shauna"
          target="_blank"
          rel="noopener noreferrer"
          className="mw-sign"
          aria-label="Co-crafted by Juliet"
        >
          <div className="mw-sign-cocrafted">Co-crafted by</div>
          <div className="mw-sign-juliet">Juliet</div>
        </a>
      </div>
    </div>
  )
}

export default Watermark
