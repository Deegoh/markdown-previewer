/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import marked from 'marked';

import Editor from './compenents/editor';
import DEFAULT_TEXT from './const';

function App() {
  const [content, setContent] = useState(DEFAULT_TEXT);
  const handleChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <>
      <Editor handleChange={handleChange}>{content}</Editor>
      <div id="preview" dangerouslySetInnerHTML={{ __html: marked(content, { breaks: true }) }} />
    </>
  );
}

export default App;
