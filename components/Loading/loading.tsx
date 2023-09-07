const Loading = () => {
  return (
    <>
      <div className="loading-container">
        <p>
          Loading
          <span className="loading-dot">.</span>
          <span className="loading-dot">.</span>
          <span className="loading-dot">.</span>
        </p>
      </div>
      <div className="loading-backdrop"></div>
    </>
  );
};

export default Loading;
