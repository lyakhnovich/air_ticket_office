import React from "react"
import DestinationInput from "./components/DestinationInput"
import DateInput from "./components/DateInput"
import PassNclass from "./components/PassNclass"



function App() {
  return (
    <div className='air-ticket-office'>
      <h2>ПОИСК АВИАБИЛЕТОВ</h2>

      <form className='form-field'>

          <div className='origin'>
            <label>откуда</label><br />
            <DestinationInput/>
          </div>

          <div className='destination'>
              <label>куда</label><br />
              <DestinationInput/>

          </div>

            <div className='departure'>
              <DateInput/>
            </div>

            <div className='return'>
              <DateInput/>
            </div>


          <div className='passengers'>
            <label>пассажиры и класс</label><br />
            <PassNclass/>
          </div>

          <div className='submit'>
            <button className='btn'>Найти билеты</button>
          </div>

      </form>


    </div>
)
}

export default App