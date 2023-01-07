import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { useQuery, useMutation } from "@apollo/client";
import * as I from './Form.types';
import { FormWrapper } from './Form.styles';
import { FlexDirectionRowContainer, FlexDirectionColumnContainer } from '../../globalStyle/globalStyle.styles';
// import { CREATE_USER } from './Form.services';
import { GET_USERS } from './Form.services';
// import Select from 'react-select';
// import CreatableSelect from 'react-select/creatable';
import { InputText } from '../../components/Forms/Inputs/InputText/InputText';
// import { InputEmail } from '../../components/Forms/Inputs/InputEmail/InputEmail';
// import { InputPassword } from '../../components/Forms/Inputs/InputPassword/InputPassword';
// import { TextAreaComponent } from '../../components/Forms/TextArea/TextArea';
// import { InputCheckbox } from '../../components/Forms/Inputs/InputCheckbox/InputCheckbox';
// import languageNames from '../../staticData/languageNames.json';

export const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<I.Inputs>();
  // const [createUser, { loading }] = useMutation(CREATE_USER);
  const {data: users, loading }: any = useQuery(GET_USERS);

  console.log('users', users);

  const onSubmit: SubmitHandler<I.Inputs> = (data) => {
    console.log(data);

    // createUser({
    //   variables: {
    //     name: data.name,
    //     surname: data.surname,
    //   },
    // });

  };

  return (
    <>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>

        <FlexDirectionRowContainer>

          <FlexDirectionColumnContainer>

            <InputText
              id={'name'}
              placeholder={'First Name'}
              ariaLabel={'First Name'}
              maxLength={100}
              dataTest={'input-name'}
              {...register("name", { required: true })}
            />
          
            {errors.name && <span>This field is required</span>}

          </FlexDirectionColumnContainer>

          <FlexDirectionColumnContainer>

            <InputText 
              id={'surname'}
              placeholder={'Surname'}
              ariaLabel={'Surname'}
              maxLength={100}
              dataTest={'input-surname'}
              {...register("surname", { required: true })}
            />
            
            {errors.surname && <span>This field is required</span>}
          
          </FlexDirectionColumnContainer>


        </FlexDirectionRowContainer>

        {/* <InputEmail
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
        
        </FlexDirectionRowContainer> */}

        
        {/* <InputCheckbox
          id={"Mexicana"}
          name={"Mexicana"}
          value={"Mexicana"}
          label={'Mexicana'}
        /> */}

        {/* <Select
          isMulti
          name="work-time"
          options={[
            { value: 'Part-time', label: 'Part-time', color: '#00875A'},
            { value: 'Full-time', label: 'Full-time', color: '#0052CC'}
          ]}
          className="basic-multi-select"
          classNamePrefix="select"
          placeholder={'Contract time'}
        />

        <CreatableSelect        
          isMulti
          name="programming-language"
          options={[
            { value: 'HTML', label: 'HTML'},
            { value: 'CSS', label: 'CSS'},
            { value: 'Javascript', label: 'Javascript'}
          ]}
          className="basic-multi-select"
          classNamePrefix="select"
          isClearable
          placeholder={'Type the programming language'}
        />

    <TextAreaComponent 
      placeholder={'Write a short text'}
      rows={10}
      cols={5}
      maxLength={500}
    /> */}


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
