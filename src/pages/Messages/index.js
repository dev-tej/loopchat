import { useEffect, useState } from "react";
import CustomSpinner from "components/CustomSpinner";
import "./index.css";

function Messages() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 2500);
    }
  }, [loading]);

  return loading ? (
    <CustomSpinner loading={loading} helperText={"Fetching messages..."} />
  ) : (
    <>
      <div className="messages-container">
        <h1>Messages</h1>
      </div>
    </>
  );
}

export default Messages;
