import { useState } from "react";

export default function Popup() {
  const [value, setValue] = useState(window.popupData);
  const handleClick = () => {
    window.opener.postMessage({ value });
    window.close();
  };
  return (
    <>
      <div>팝업!</div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleClick}>팝업닫기</button>
    </>
  );
}
