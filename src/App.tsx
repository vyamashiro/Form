import React from 'react';
import Select from 'react-select';
import languageNames from '../src/staticData/languageNames.json';

function App() {
  return (
    <>
      <input type={'text'} />

      <input type={'email'} />
      <input type={'password'} />
      
      <input type={'tel'} />

      <input type={'checkbox'} />
      <input type={'radio'} />

      <input type={'number'} />
      <input type={'url'} />
      
      <input type={'date'} />
      <input type={'month'} />
    
      <Select
        // defaultValue={}
        isMulti
        name="colors"
        // options={languageNames}
        className="basic-multi-select"
        classNamePrefix="select"
      />

    </>
  );
}

export default App;
