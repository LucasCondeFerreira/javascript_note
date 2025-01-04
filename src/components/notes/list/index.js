import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Moment from 'moment';

function ListNotes({
  notes,
  current_note,
  createNote,
  selectNote,
  deleteNote,
}) {
  return (
    <div className='notes'>
      <div className='columns is-mobile'>
        <div className='column is-offset-1 is-half'>
          <h6 className='title is-6'>{notes.length} Notas</h6>
        </div>
        <div className='column is-2'>
          <button
            className='button is-small is-outlined is-custom-purple'
            onClick={createNote}
          >
            Nova Nota +
          </button>
        </div>
      </div>

      <ul className='list notes-list'>
        {notes.map((item, key) => (
          <li
            key={key}
            className={`list-item ${item === current_note ? 'is-active' : ''}`}
            onClick={() => selectNote(item._id)}
          >
            <h6 className='title is-6'>
              {item.title.replace(/(<([^>]+)>)/gi, '').substring(0, 15)}
            </h6>
            <h6
              className='subtitle is-6'
              style={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {item.body.replace(/(<([^>]+)>)/gi, '').substring(0, 30)}
            </h6>

            <div className='columns is-mobile'>
              <div className='column is-10'>
                <span className='tag is-dark'>
                  {Moment(item.created_at).format('DD/MM')}
                </span>
              </div>
              <div className='column is-2'>
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteNote(item);
                  }}
                  color='grey'
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListNotes;
