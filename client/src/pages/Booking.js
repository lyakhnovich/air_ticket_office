import React from 'react';


import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { addDays } from 'date-fns';
import { useState } from 'react';
import Container from "react-bootstrap/Container";
import DateRange from "react-date-range/dist/components/DateRange";




const Booking = () => {

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);

  return (
    <Container>

      <input/>

      <DateRange
        showDateDisplay={false}
        editableDateInputs={true}
        onChange={item => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
      />
    </Container>
  );
};

export default Booking;

