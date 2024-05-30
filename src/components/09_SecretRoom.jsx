import { useState } from "react";

const SecretRoom = ({ message1, onReply }) => {
  const [reply, setReply] = useState("");

  const handleSendReply = () => {
    onReply(reply);
  };
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <h1>SecretRoom</h1>
      <p>Message for JSD7: {message1}</p>
      <textarea
        className="border w-[200px]"
        value={reply}
        onChange={(e) => setReply(e.target.value)}
        placeholder="Type your reply here..."
      />
      <button
        onClick={handleSendReply}
      >
        Send Reply
      </button>
    </div>
  );
};

export default SecretRoom;
