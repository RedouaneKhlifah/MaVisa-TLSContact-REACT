import React, { useState, useEffect } from "react";

function HeaderReference_Key() {
  const [Reference_key, setReferenceKey] = useState("");
  useEffect(() => {
    const storedReferenceKey = sessionStorage.getItem("Reference_key");
    if (storedReferenceKey) {
      setReferenceKey(storedReferenceKey);
    }
  }, []);
  ///// when user leave the page ////////

  // useEffect(() => {
  //   const handleBeforeUnload = (event) => {
  //     event.preventDefault();
  //     localStorage.removeItem("Reference_key");
  //   };
  //   window.addEventListener("beforeunload", handleBeforeUnload);
  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, []);

  return (
    <div>
      <center>
        <div className="backroundHeaderForm">
          <h2 className="FormHederText">Reference_Key</h2>
        </div>
        <div className="box" id="boxForm">
          <p className="boxtextForm">Your Reference_key is : </p>
          <h5>{Reference_key}</h5>
          <p className="boxtext key " id="boxtext">
            Unfortunately, we cannot retrieve your reference key once it has
            been lost. Please ensure to keep a copy of your reference key in a
            safe and secure place to avoid losing it. We apologize for any
            inconvenience this may cause.
          </p>
        </div>
        
      </center>
    </div>
  );
}

export default HeaderReference_Key;
