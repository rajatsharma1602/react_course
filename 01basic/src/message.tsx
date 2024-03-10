function Message() {
  // JSX format
  const name = undefined;
  if (!name)
    return (
      <div>
        <h1>Message</h1>
      </div>
    );
  return (
    <div>
      <h1>Message from {name}</h1>
    </div>
  );
}

export default Message;
