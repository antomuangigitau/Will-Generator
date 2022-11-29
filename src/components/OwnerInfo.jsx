import React from 'react';
import { useGlobalContext } from '../context';
import FormRow from './FormRow';

const OwnerInfo = () => {
  const { values, handleChange } = useGlobalContext();
  const { ownerAddress, ownerName, ownerPhoneNumber, ownerEmail } = values;
  return (
    <>
      <FormRow
        id="Name"
        type="text"
        name="ownerName"
        placeholder="full name"
        value={ownerName}
        handleChange={handleChange}
      />
      <FormRow
        id="Email"
        type="email"
        name="ownerEmail"
        placeholder="email"
        value={ownerEmail}
        handleChange={handleChange}
      />
      <FormRow
        id="Phone Number"
        type="tel"
        name="ownerPhoneNumber"
        placeholder="phone number"
        value={ownerPhoneNumber}
        handleChange={handleChange}
      />
      <FormRow
        id="Adress"
        type="number"
        name="ownerAddress"
        placeholder="address"
        value={ownerAddress}
        handleChange={handleChange}
      />
    </>
  );
};

export default OwnerInfo;
