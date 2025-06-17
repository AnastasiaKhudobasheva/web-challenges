import Button from "./component/Button.jsx";

export default function App() {
  function handleClick() {
    alert(`You clicked me`);
  }

  return (
    <>
      <Button
        isColor="green"
        text="YES"
        isBackground="pink"
        onHandleClick={handleClick}
      />
      <Button
        isColor="green"
        text="NO"
        isBackground="pink"
        onHandleClick={handleClick}
      />
      <Button
        isColor="red"
        isDisabled
        text="DO NOT CLICK"
        isBackground="yellow"
      />
    </>
  );
}
