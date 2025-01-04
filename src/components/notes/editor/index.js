import React, { Fragment, useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import debounce from 'lodash/debounce';

function Editor({ note, updateNote }) {
  const [currentContent, setCurrentContent] = useState('');

  const debouncedUpdateNote = debounce((content) => {
    const title = content.replace(/(<([^>]+)>)/gi, '').slice(0, 30);
    updateNote(note, { title, body: content });
  }, 2000);

  const handleChange = (content, delta, source) => {
    if (source === 'user') {
      setCurrentContent(content);
      debouncedUpdateNote(content);
    }
  };

  useEffect(() => {
    setCurrentContent(note.body);
  }, [note]);

  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link'],
      ['clean'],
    ],
  };

  return (
    <div className='notes-editor'>
      <ReactQuill
        value={currentContent}
        onChange={handleChange}
        modules={modules}
        placeholder='Escreva sua nota aqui...'
      />
    </div>
  );
}

export default Editor;
