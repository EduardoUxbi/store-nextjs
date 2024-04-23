import styles from './MyAccount.module.sass'

interface MyAccountLayoutProps {
  children: React.ReactNode;
  ordersinfo: React.ReactNode;
  userinfo: React.ReactNode;
}

export default async function MyAccountLayout(props: MyAccountLayoutProps) {
  return (
    <div className={styles.MyAccount}>
      {props.children}
      <main className={styles.MyAccount__panels}>
        {props.userinfo}
        {props.ordersinfo}
      </main>
    </div>
  );
}