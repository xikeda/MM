import React from 'react';
import {Scene, Router, Actions, Stack} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
import firebase from 'firebase';

const RouterComponent = () => {
  return (
    <Router navigationBarStyle={{ backgroundColor: '#2980b9'}}  titleStyle={{ color:'#fff', alignSelf:'center' }}>
      <Stack key="root" hideNavBar>
        <Stack key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" />
        </Stack>
        <Stack key="employeeList">
          <Scene onLeft={() => logUserOut()} leftTitle="Log out" leftButtonTextStyle={{color: '#fff'}} rightTitle="Add" rightButtonTextStyle={{color: '#fff'}} onRight={() => Actions.employeeCreate()} key="_employeeList" component={EmployeeList} title="Employees"  initial/>
          <Scene leftTitle="Back" navButtonTextStyle={{color: '#fff'}} onLeft={() => Actions.employeeList({type: 'reset'})} navBarButtonColor='#fff' key="employeeCreate" component={EmployeeCreate} title="Create Employee"/>
          <Scene leftTitle="Back" navButtonTextStyle={{color: '#fff'}} onLeft={() => Actions.employeeList({type: 'reset'})} navBarButtonColor='#fff' key="employeeEdit" component={EmployeeEdit} title="Edit Employee"/>
        </Stack>
      </Stack>
    </Router>
  );
};

const logUserOut = () => {
    firebase.auth().signOut()
      .then(() => {
        Actions.auth();
      });
};

export default RouterComponent;
