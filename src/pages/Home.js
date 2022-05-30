import { observer } from "mobx-react";
import { Uploader } from "../components/Uploader";
import { Tips } from "../components/Tips";

export const Home = observer(() => {
  return (
    <div>
      <Tips>Hello，请先登录！</Tips>

      <Uploader />
    </div>
  );
});
