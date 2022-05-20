
import { observer } from "mobx-react";
import UserStore from "../stores/user";
export const Home = observer(() => {
  const currentUser = UserStore.currentUser;
  return <div><h1>{
      currentUser?<>Hello:{currentUser.attributes.username}</>
      :"用户未登录"
      }</h1></div>;
});
