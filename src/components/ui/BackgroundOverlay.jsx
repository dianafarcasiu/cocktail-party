function BackgroundOverlay({ rounded = "rounded-xl", opacity = true }) {
  return (
    <div
      className={`absolute top-0 left-0 w-full h-full bg-black ${rounded} ${
        opacity ? "bg-opacity-40" : "bg-opacity-20"
      } z-0 `}
    ></div>
  );
}

export default BackgroundOverlay;
