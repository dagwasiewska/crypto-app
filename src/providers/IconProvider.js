import React from "react";
import fontawesome from '@fortawesome/fontawesome'
import { faInbox } from '@fortawesome/free-solid-svg-icons'

function IconProvider({ children }) {
  fontawesome.library.add(faInbox);

  return (
    <>
      {children}
    </>
  );
}

export default IconProvider;
