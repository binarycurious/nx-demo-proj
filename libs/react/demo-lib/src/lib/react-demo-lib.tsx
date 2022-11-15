import styles from './react-demo-lib.module.less';

/* eslint-disable-next-line */
export interface ReactDemoLibProps {}

export function ReactDemoLib(props: ReactDemoLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactDemoLib!</h1>
    </div>
  );
}

export default ReactDemoLib;
