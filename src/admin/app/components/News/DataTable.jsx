import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import DestroyAll from '../Partials/DestroyAll';
import Loader from '../Partials/Loader';
import TableContents from './TableContents';
import CreateBtn from './CreateBtn';

function DataTable({
  news,
  create,
  edit,
  destroy,
  isActive
}) {
  const contents = () => {
    if (isActive) {
      return (
        <TableContents
          news={news}
          destroy={destroy}
          edit={edit}
        />
      );
    }

    return (
      <Loader isActive={isActive} />
    );
  };

  return (
    <Card>
      <CardHeader
        title="You're an alpaca 2"
        avatar="https://pbs.twimg.com/profile_images/870937677507338241/PIlFtJxo.jpg"
      />
      <CardTitle title="News List" />
      <CardText>
        {contents()}
      </CardText>
      <CardActions>
        <CreateBtn create={create} />
        <DestroyAll />
      </CardActions>
    </Card>
  );
}

DataTable.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired
  }).isRequired).isRequired,
  create: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
  destroy: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default DataTable;
