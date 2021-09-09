import React from "react";

const Editor = ({handleChange, children}) => <textarea cols="100" rows="20" id="editor" onChange={handleChange} value={children}/>

export default Editor;