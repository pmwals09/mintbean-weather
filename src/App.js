import React from 'react';

function App() {
  return (
    <div className="grid-container">
      <h1 className='text-center'>Check your local weather</h1>
      <div className='grid-y'>
        <div className="cell">
          <div className='grid-x align-center'>
            <div className='small-4'>
              <form>
                <div className='input-group'>
                  <label htmlFor="zip" className='input-group-label'>Zip</label>
                  <input type="text" id="zip" name="zip" className='input-group-field'/>
                  <div className='input-group-button'>
                    <input type="submit" value="Submit" className="button"/>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='cell'>
          <h3 className='text-center'>OR</h3>
        </div>
        <div className="cell">
          <div className='grid-x align-center'>
            <div className='small-4'>
              <form>
                <div className='input-group'>
                  <label htmlFor="city" className='input-group-label'>City</label>
                  <input type="text" id="city" name="city" className='input-group-field'/>
                  <div className='input-group-button'>
                    <input type="submit" value="Submit" className="button"/>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
