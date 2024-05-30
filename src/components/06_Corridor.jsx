import Gallery from "./07_Gallery";

const Corridor = ({ message1, onReply }) => {
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <h1>Corridor</h1>
      <p>Message for JSD7: {message1}</p>
      <Gallery message1={message1} onReply={onReply} />
    </div>
  );
};

export default Corridor;
