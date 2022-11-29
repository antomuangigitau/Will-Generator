import React, { useContext, useState, useEffect } from 'react';
const FormContext = React.createContext();
const initialState = {
  ownerName: '',
  ownerEmail: '',
  ownerPhoneNumber: '',
  ownerAddress: '',
  executorName: '',
  executorEmail: '',
  executorNumber: '',
  executorAddress: '',
  beneficiaryName: '',
  beneficiaryAddress: '',
  beneficiaryName2: '',
  beneficiaryAddress2: '',
  assets: '',
};
const title = {
  0: 'First, we need some details from you',
  1: 'Who will be the Executor(s) of your Will?',
  2: 'Properties to give out to your beneficiaries?',
};

const FormProvider = ({ children }) => {
  const [values, setValues] = useState(initialState);
  const [page, setPage] = useState(0);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(`${name}: ${value}`);
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(values));
  };

  return (
    <FormContext.Provider
      value={{
        values,
        page,
        title,
        setPage,
        handleChange,
        handleSubmit,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(FormContext);
};

export default FormProvider;
