import { Button, Icon } from "semantic-ui-react";
import { useRouter } from "next/router";
import classNames from "classnames";
import { useAuth} from "@/hooks";
import styles from "./Account.module.scss";

export function Account() {
  const { user } = useAuth();
  const router = useRouter();

  const goToLogin = () => router.push("/join/sign-in");
  const goToAccount = () => router.push("/account");



  return (
    <div className={styles.account}>
     
    <Button icon className={classNames({ [styles.user]: user })}>
        <Icon name="user outline" onClick={user ? goToAccount : goToLogin} />
      </Button>
    </div>
  );
}
