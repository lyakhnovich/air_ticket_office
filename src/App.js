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
            <label>откуда</label>
            <div>
              <DestinationInput/>
            </div>
          </div>

          <div className='destination'>
            <label>куда</label>
            <div>
              <DestinationInput/>
            </div>
          </div>

          <div className='dates'>
            <div>
              <DateInput/>
            </div>
          </div>

          <div className='dates'>
            <div>
              <DateInput/>
            </div>
          </div>

          <div className='passengers'>
            <label>пассажиры и класс</label>
            <PassNclass/>
          </div>

          <div className='submit'>
            <button>Найти билеты</button>
          </div>

      </form>


    </div>
)
}

export default App