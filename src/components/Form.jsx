import React from 'react';
import OwnerInfo from './OwnerInfo';
import ExecutorInfo from './ExecutorInfo';
import BeneficiaryInfo from './BeneficiaryInfo';
import { useGlobalContext } from '../context';
import style from './Form.module.css';

const Form = () => {
  const { title, page, setPage, handleSubmit } = useGlobalContext();

  const pageDisplay = () => {
    if (page === 0) {
      return <OwnerInfo />;
    } else if (page === 1) {
      return <ExecutorInfo />;
    } else {
      return <BeneficiaryInfo />;
    }
  };
  const prevHide = page === 0 && 'remove__button';

  const nextHide = page === Object.keys(title).length - 1 && 'remove__button';

  const submitHide = page !== Object.keys(title).length - 1 && 'remove__button';
  return (
    <section className={style.main}>
      <div className={style.container}>
        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.header}>
            <h2>{title[page]}</h2>
          </div>
          <div className={style.body}>{pageDisplay()}</div>
          <div className={style.footer}>
            <button
              type="button"
              className={`${prevHide}`}
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              prev
            </button>
            <button
              type="button"
              className={`${nextHide}`}
              disabled={page === Object.values(title).length - 1}
              onClick={() => {
                setPage((currPage) => currPage + 1);
              }}
            >
              next
            </button>
            <button type="submit" className={`${submitHide}`}>
              Generate will
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
