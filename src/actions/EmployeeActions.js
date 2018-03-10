import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE
} from './types';

export const employeeUpdate = ({prop, value}) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: {prop, value}
  };
};

export const employeeCreate = ({name, phone, shift}) => {
  const {currentUser} = firebase.auth();

  return(dispatch) => {
    //Create employee object in Firebase
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({name, phone, shift})
        //Jump back over to employee list screen
        .then(() => {
          dispatch({type: EMPLOYEE_CREATE});
          Actions.pop()
        });
  }
};
