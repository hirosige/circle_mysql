import React from 'react';
import PropTypes from 'prop-types';
import DataTable from './DataTable';

const MainSection = ({
  news,
  create,
  edit,
  destroy,
  isActive
}) => (
  <div>
    <DataTable
      news={news}
      create={create}
      edit={edit}
      destroy={destroy}
      isActive={isActive}
    />
  </div>
);

MainSection.propTypes = {
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

export default MainSection;
