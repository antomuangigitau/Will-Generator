import FormRow from './FormRow';
import { useGlobalContext } from '../context';

const ExecutorInfo = () => {
  const { values, handleChange } = useGlobalContext();
  const { executorName, executorAddress, executorEmail, executorNumber } =
    values;
  return (
    <>
      <p>
        The Main Executor is the person appointed to carry out the wishes of
        this Will.
      </p>
      <p>
        An Executor must be over the age of 21, not be a bankrupt and is of
        sound mind to carry out his or her duties under the Will upon the
        Testator’s demise. An Executor can also be a Beneficiary under a Will.
      </p>
      <FormRow
        id="Name"
        type="text"
        name="executorName"
        placeholder="full name"
        value={executorName}
        handleChange={handleChange}
      />
      <FormRow
        id="Email"
        type="email"
        name="executorEmail"
        placeholder="email"
        value={executorEmail}
        handleChange={handleChange}
      />
      <FormRow
        id="Number"
        type="number"
        name="executorNumber"
        placeholder="Phone number"
        value={executorNumber}
        handleChange={handleChange}
      />
      <FormRow
        id="Address"
        type="number"
        name="executorAddress"
        placeholder="address"
        value={executorAddress}
        handleChange={handleChange}
      />
    </>
  );
};

export default ExecutorInfo;
