import styles from './FormRow.module.css';
const FormRow = ({ id, type, name, value, placeholder, handleChange }) => {
  return (
    <div className={styles['inner__first__row']}>
      <label htmlFor={id}>{id}</label>
      <div className={styles['input__box']}>
        <input
          className={styles['input__text']}
          type={type}
          placeholder={placeholder}
          name={name}
          id={id}
          value={value}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default FormRow;
