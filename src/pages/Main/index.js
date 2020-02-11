import React, { Component } from 'react';

import logo from '../../assets/logo.png';

import { Container, Form } from './styles';

import CompareList from '../../components/CompareList';

import moment from 'moment';

import api from '../../services/api';

export default class Main extends Component {
  state = {
    repositoryInput: '',
    repositories: [],
    repositoryError: false,
    loading: false
  };

  handleAddRepository = async e => {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      const { data: repository } = await api.get(
        `/repos/${this.state.repositoryInput}`
      );

      // tratando a data antes de chegar no render
      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        repositoryInput: '',
        //spreadoperation pega o state atual e adiciona o novo no final
        repositories: [...this.state.repositories, repository],
        repositoryError: false
      });
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <Container>
        <img src={logo} className="logo" alt="teste" />

        <Form
          withError={this.state.repositoryError}
          onSubmit={this.handleAddRepository}
        >
          <input
            type="text"
            placeholder="usuario/repositorio"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
            disabled={this.state.loading}
          />
          <button type="submit">
            {this.state.loading ? (
              <i className="fa fa-spinner fa-pulse" />
            ) : (
              'Ok'
            )}
          </button>
          <div className="error">Repositório não encontrado!</div>
        </Form>
        <CompareList repositories={this.state.repositories} />
      </Container>
    );
  }
}
