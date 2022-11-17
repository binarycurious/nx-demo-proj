import styles from './react-payment-form.module.less';

/* eslint-disable-next-line */
export interface ReactPaymentFormProps {}

export function ReactPaymentForm(props: ReactPaymentFormProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactPaymentForm!</h1>
    </div>
  );
}

export default ReactPaymentForm;
