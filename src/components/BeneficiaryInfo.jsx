import React from 'react';
import FormRow from './FormRow';
import { useGlobalContext } from '../context';

const BeneficiaryInfo = () => {
  const { values, handleChange } = useGlobalContext();
  const {
    beneficiaryName,
    beneficiaryAddress,
    beneficiaryName2,
    beneficiaryAddress2,
    assets,
  } = values;
  return (
    <>
      <p>
        You can choose to allocate your owned properties (if any) to your
        beneficiaries. This is only applicable for property under single
        ownership and may not apply for other types of property ownership
        arrangements.
      </p>
      <FormRow
        id="Beneficiary"
        type="text"
        name="beneficiaryName"
        placeholder="Name"
        value={beneficiaryName}
        handleChange={handleChange}
      />
      <FormRow
        id="Address"
        type="number"
        name="beneficiaryAddress"
        placeholder="Address"
        value={beneficiaryAddress}
        handleChange={handleChange}
      />
      <FormRow
        id="Beneficiary 2"
        type="text"
        name="beneficiaryName2"
        placeholder="Name"
        value={beneficiaryName2}
        handleChange={handleChange}
      />
      <FormRow
        id="Address"
        type="number"
        name="beneficiaryAddress2"
        placeholder="Address"
        value={beneficiaryAddress2}
        handleChange={handleChange}
      />
      <FormRow
        id="Assets to distribute"
        type="text"
        name="assets"
        placeholder="Car, items in safe, jewellery,company shares"
        value={assets}
        handleChange={handleChange}
      />
    </>
  );
};

export default BeneficiaryInfo;
