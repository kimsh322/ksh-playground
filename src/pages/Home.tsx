import { useState } from "react";

export default function Home() {
  const [received, setReseived] = useState("");
  const receiveMessage = (event: MessageEvent) => {
    if (event.origin !== "http://localhost:5173") return;
    setReseived(event.data.value);
  };
  window.addEventListener("message", receiveMessage, false);
  const onPopup = () => {
    const url = "/popup";
    const popup = window.open(url, "_blank", `width=600, height=600, left=200, top=200`);
    if (popup) popup.popupData = "팝업데이터";
  };
  return (
    <div>
      <button onClick={onPopup}>클릭</button>
      <div>받은데이터</div>
      <div>{received}</div>
    </div>
  );
}
