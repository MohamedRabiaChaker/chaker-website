const Wavify = ({ children }) => {
  return (
    <>
      <svg width="0" height="0">
        <defs>
          <clipPath id="clip-shape" clipPathUnits="objectBoundingBox">
            <path d="M0,0.1 Q0.25,0.2 0.5,0.1 Q0.75,0 1,0.1 L1,1 L0,1 Z" />
          </clipPath>
        </defs>
      </svg>
      <div
        className="bg-blue-100 pt-20"
        style={{ clipPath: "url(#clip-shape)" }}
      >
        {children}
      </div>
    </>
  );
};

export default Wavify;
