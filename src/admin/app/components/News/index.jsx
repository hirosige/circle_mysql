import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../containers/Header';
import MainSection from "./MainSection";
import Container from '../Partials/Container';
import Success from '../SnackBars/Success';
import Failure from "../SnackBars/Failure";
import { switchButtons } from '../../actions/header';

class News extends Component {
  static propTypes = {
    news: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
      updated_at: PropTypes.string.isRequired
    }).isRequired).isRequired,
    initialize: PropTypes.func.isRequired,
    create: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired,
    destroy: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
    committed: PropTypes.bool.isRequired,
    success: PropTypes.shape({
      message: PropTypes.string
    }),
    failure: PropTypes.shape({
      message: PropTypes.string
    }),
    openResBar: PropTypes.func.isRequired,
    closeResBar: PropTypes.func.isRequired,
    succeeded: PropTypes.bool.isRequired
  };

  static defaultProps = {
    success: PropTypes.shape({
      message: ''
    }),
    failure: PropTypes.shape({
      message: ''
    })
  };

  componentDidMount() {
    window.store.dispatch(switchButtons({ activeIndex: 0 }));
    this.props.initialize();
  }

  render() {
    const statusBar = () => {
      if (this.props.succeeded) {
        return (
          <Success
            committed={this.props.committed}
            success={this.props.success}
            openResBar={this.props.openResBar}
            closeResBar={this.props.closeResBar}
          />
        );
      }
      return (
        <Failure
          committed={this.props.committed}
          failure={this.props.failure}
          openResBar={this.props.openResBar}
          closeResBar={this.props.closeResBar}
        />
      );
    };
    return (
      <Container>
        <Header {...this.props} />
        <MainSection
          news={this.props.news}
          create={this.props.create}
          edit={this.props.edit}
          destroy={this.props.destroy}
          isActive={this.props.isActive}
        />
        {statusBar()}
      </Container>
    );
  }
}

export default News;
