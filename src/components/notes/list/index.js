import React, { Fragment } from 'react';
import { Button, Column, Tag, Title, List } from 'rbx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Moment from 'moment';

function ListNotes(props) {
  return (
    <Fragment>
      <Column.Group breakpoint='mobile'>
        <Column size={6} offset={1}>
          <Title size={6}>{props.notes.length} Notes</Title>
        </Column>
        <Column size={2}>
          <Button
            state='active'
            className='is-custom-purple'
            color='custom-purple'
            outlined
            size='small'
            onClick={() => props.createNote()}
          >
            Notes +
          </Button>
        </Column>
      </Column.Group>
      <List className='notes-list'>
        {props.notes.map((item, key) => (
          <List.Item
            key={key}
            onClick={() => props.selectNote(item._id)}
            active={item == props.current_note}
          >
            <Title size={6}>
              {item.title.replace(/(<([^>]+)>)/gi, '').substring(0, 15)}
            </Title>
            <Title size={6} subtitle spaced={false}>
              {item.body.replace(/(<([^>]+)>)/gi, '').substring(0, 30)}
            </Title>

            <Column.Group breakpoint='mobile'>
              <Column size={10}>
                <Tag color='dark'>
                  {Moment(item.created_at).format('DD/MM')}
                </Tag>
              </Column>
              <Column size={2}>
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => props.deleteNote(item)}
                  color='grey'
                />
              </Column>
            </Column.Group>
          </List.Item>
        ))}
      </List>
    </Fragment>
  );
}

export default ListNotes;
