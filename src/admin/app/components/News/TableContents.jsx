import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableHeader,
  TableRow,
  TableHeaderColumn,
  TableRowColumn,
  TableBody
} from 'material-ui/Table';
import DestroyBtn from './DestroyBtn';
import EditBtn from './EditBtn';

const Colors = require('material-ui/styles/colors');

const style = {
  background: Colors.grey800,
  color: '#fff',
  margin: 0,
  height: '50%'
};

const tableStyle = {
  margin: 0
};

const btnStyle = {
  marginRight: 10
};

function TableContents({ news, destroy, edit }) {
  return (
    <Table selectable={false} style={tableStyle}>
      <TableHeader>
        <TableRow style={style} >
          <TableHeaderColumn>ID</TableHeaderColumn>
          <TableHeaderColumn>Title</TableHeaderColumn>
          <TableHeaderColumn>Description</TableHeaderColumn>
          <TableHeaderColumn>Created at</TableHeaderColumn>
          <TableHeaderColumn>Updated at</TableHeaderColumn>
          <TableHeaderColumn>Controls</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody stripedRows>
        {
          news.map(aNews => (
            <TableRow hoverable displayBorder key={aNews.id}>
              <TableRowColumn>{aNews.id}</TableRowColumn>
              <TableRowColumn>{aNews.title}</TableRowColumn>
              <TableRowColumn>{aNews.description}</TableRowColumn>
              <TableRowColumn>{aNews.created_at}</TableRowColumn>
              <TableRowColumn>{aNews.updated_at}</TableRowColumn>
              <TableRowColumn>
                <EditBtn {...aNews} edit={edit} style={btnStyle} />
                <DestroyBtn id={aNews.id} destroy={destroy} style={btnStyle} />
              </TableRowColumn>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  );
}

TableContents.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired
  }).isRequired).isRequired,
  destroy: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired
};

export default TableContents;
