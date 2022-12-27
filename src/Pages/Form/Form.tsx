import React from 'react';
import { FormWrapper } from './Form.styles';
import { FlexDirectionRowContainer } from '../../styles/general.styles';
import Select from 'react-select';
import { InputText } from '../../components/Forms/Inputs/InputText/InputText';
import { InputEmail } from '../../components/Forms/Inputs/InputEmail/InputEmail';
import { InputPassword } from '../../components/Forms/Inputs/InputPassword/InputPassword';
import { TextAreaComponent } from '../../components/Forms/TextArea/TextArea';
import { InputCheckbox } from '../../components/Forms/Inputs/InputCheckbox/InputCheckbox';
import languageNames from '../../staticData/languageNames.json';

export const Form = () => {
  return (
    <>
      <FormWrapper>

        <FlexDirectionRowContainer>

          <InputText 
            id={'name'}
            name={'name'}
            placeholder={'First Name'}
            ariaLabel={'First Name'}
            maxLength={100}
            required={true}
          />
          {/* Error message if user input more than 100 characters */}

          <InputText 
            id={'surname'}
            name={'surname'}
            placeholder={'Surname'}
            ariaLabel={'Surname'}
            maxLength={100}
            required={true}
          />

        </FlexDirectionRowContainer>

        <InputEmail
          id={'email'}
          name={'email'}
          placeholder={'Input email'}
          ariaLabel={'input email'}
          maxLength={20}
        />

        <FlexDirectionRowContainer>

          <InputPassword
            id={'password'}
            name={'password'}
            placeholder={'Password'}
            ariaLabel={'password'}
            maxLength={20}
          />

          <InputPassword
            id={'confirm_password'}
            name={'confirm_password'}
            placeholder={'Confirm password'}
            ariaLabel={'password'}
            maxLength={20}
          />
        
        </FlexDirectionRowContainer>

        
        {/* <InputCheckbox
          id={"Mexicana"}
          name={"Mexicana"}
          value={"Mexicana"}
          label={'Mexicana'}
        /> */}

        <Select
          // defaultValue={}
          isMulti
          name="colors"
          // options={languageNames}
          className="basic-multi-select"
          classNamePrefix="select"
        />

    <TextAreaComponent 
      placeholder={'Write a short text'}
      rows={10}
      cols={5}
      maxLength={500}
    />


        {/* <input type={'checkbox'} />
        <input type={'radio'} />

        <input type={'number'} />
        <input type={'url'} />
        
        <input type={'date'} />
        <input type={'month'} />

        <textarea /> */}
      
        <button type='submit'>Enviar</button>

      </FormWrapper>
    </>
  );
}
