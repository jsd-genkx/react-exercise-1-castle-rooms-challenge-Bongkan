import SecretRoom from "./09_SecretRoom";

const Nook = ({ message1, onReply }) => {
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <h1>Nook</h1>
      <p>Message for JSD7: {message1}</p>
      <SecretRoom message1={message1} onReply={onReply} />
    </div>
  );
};

export default Nook;
