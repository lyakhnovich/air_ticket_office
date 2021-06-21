import React from 'react';

import {DatesRangeInput} from 'semantic-ui-calendar-react';

import Form from "semantic-ui-react/dist/commonjs/collections/Form";
import {Container} from "react-bootstrap";
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";





    class Booking extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        datesRange: ''
      };
    }

    handleChange = (event, {name, value}) => {
      if (this.state.hasOwnProperty(name)) {
        this.setState({ [name]: value });
      }
    }

    render() {
      return (
        <Container
          className="d-flex justify-content-center align-items-center"
          style={{height: window.innerHeight - 400}}
        >
          <input/>
          <input/>
          <Form>

            <DatesRangeInput
              name="datesRange"
              placeholder="Когда - Обратно"
              value={this.state.datesRange}
              iconPosition="left"
              onChange={this.handleChange}
            />
          </Form>
          <input/>
        </Container>
      );
    }
  }

export default Booking;

