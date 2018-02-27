import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Card, CardSection, Input, Button} from './common';

class EmployeeCreate extends Component {
  render (){
    return (
      <Card>
        <CardSection>
          <Input
          label="Name"
          placeholder="John Smith"
          />
        </CardSection>
        <CardSection>
          <Input
          label="Phone"
          placeholder="123-456-7890"
          />
        </CardSection>
        <CardSection>
        </CardSection>
      </Card>
    );
  }
}

export default EmployeeCreate;
