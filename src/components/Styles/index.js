const Wavify = ({ children }) => {
  return (
    <>
      <svg width="0" height="0">
        <defs>
          <clipPath id="clip-shape" clipPathUnits="objectBoundingBox">
            <path
              d="
                M0,0.1 
                Q0.25,0.2 0.5,0.1 
                Q0.75,0 1,0.1 
                L1,0.9 
                Q0.75,0.8 0.5,0.9 
                Q0.25,1 0,0.9 
                Z"
            />
          </clipPath>
        </defs>
      </svg>
      <div
        className="bg-slate-500 pt-20 pb-20"
        style={{ clipPath: "url(#clip-shape)" }}
      >
        {children}
      </div>
    </>
  );
};

export default Wavify;
