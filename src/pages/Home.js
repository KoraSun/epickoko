import { observer } from "mobx-react";
import UserStore from "../stores/user";
import { Uploader } from "../components/Uploader";
import { Tips } from "../components/Tips";

export const Home = observer(() => {
  const currentUser = UserStore.currentUser;
  return (
    <div>
      <Tips>Hello，请先登录！</Tips>

      <Uploader />
    </div>
  );
});
