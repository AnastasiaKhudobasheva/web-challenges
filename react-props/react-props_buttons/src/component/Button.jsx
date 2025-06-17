export default function Button({
  isColor,
  isDisabled,
  text,
  isBackground,
  onHandleClick,
}) {
  return (
    <button
      disabled={isDisabled}
      style={{ color: isColor, backgroundColor: isBackground }}
      // onClick={() => alert(`You clicked me`)}
      onClick={onHandleClick}
    >
      {text}
    </button>
  );
}
