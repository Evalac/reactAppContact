import { Component } from 'react';

import users from '../../user.json';
import data from '../../data.json';
import friends from '../../friends.json';
import transactions from '../../transactions.json';
import { Profile } from '../Profile/Profile';
import { Statistic } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import { Container } from './App.styled';

import { Counter } from '../Counter';
import { Dropdown } from '../Dropdown';
import { ColorPicker } from 'components/ColorPicker/ColorPicker';

import { Form } from 'components/Form/Form';

import { CreateMaterialEditorForm } from 'components/RestApiModule3/CreateMaterialEditorForm/CreateMaterialEditorForm';
import * as API from '../RestApiModule3/services/api';
import { Materials } from 'components/RestApiModule3/Materials/Materials';

const colorOptions = [
  { label: 'red', color: '#f44336' },
  { label: 'blue', color: '#2196f3' },
  { label: 'green', color: '#4caf50' },
  { label: 'yellow', color: '#ffeb3b' },
  { label: 'orange', color: '#ff9800' },
  { label: 'purple', color: '#9c27b0' },
  { label: 'pink', color: '#e91e63' },
  { label: 'teal', color: '#009688' },
];

export class App extends Component {
  state = {
    materials: [],
    isLoading: false,
    error: null,
  };

  onSubmit = async values => {
    try {
      this.setState({ isLoading: true });
      const material = await API.addMaterials(values);
      this.setState(prevState => ({
        materials: [...prevState.materials, material],
      }));
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const allMaterials = await API.getMaterials();
      this.setState({ materials: allMaterials });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  deleteMaterial = async id => {
    await API.deleteMaterials(id);
    this.setState(prevState => ({
      materials: prevState.materials.filter(material => material.id !== id),
    }));
  };

  updateMaterial = async fields => {
    try {
      const updateMaterials = await API.updateMaterials(fields);
      this.setState(prevState => ({
        materials: prevState.materials.map(material =>
          material.id === fields.id ? updateMaterials : material
        ),
      }));
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    return (
      <>
        {/* <Profile
          username={users.username}
          tag={users.tag}
          location={users.location}
          avatar={users.avatar}
          stats={users.stats}
        />
        <Statistic title={`Upload stats`} stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
        <Container />
        <Counter initialValue={10} />
        <Dropdown />
        <ColorPicker options={colorOptions} /> */}
        {/* <Form onDataSubmit={this.formSubmitHandler} /> */}

        <CreateMaterialEditorForm
          onSubmit={this.onSubmit}
          isSubmitng={this.state.isLoading}
        />
        {this.state.isLoading && <p>LOADING</p>}
        {this.state.error && <p>Упс... щось пішло не так</p>}
        <Materials
          data={this.state.materials}
          removeMaterial={this.deleteMaterial}
          updateMaterial={this.updateMaterial}
        />
      </>
    );
  }
}
