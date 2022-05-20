import { observable, action, makeObservable } from "mobx";
import { Auth } from "../models/index";
import UserStore from "./user"
class AuthStore {
  constructor() {
    makeObservable(this);
  }

  @observable values = {
    username: "",
    password: "",
  };

  @action setUsername(username) {
    this.values.username = username;
  }
  @action setPassword(password) {
    this.values.password = password;
  }

  @action login() {
    return new Promise((resolve, reject) => {
      Auth.login(this.values.username, this.values.password)
        .then((user) => {
          console.log("登录请求成功");
          UserStore.pullUser()
          resolve(user);
        })
        .catch((error) => {
          console.log(error);
          UserStore.resetUser()
          reject(error);
        });
    });
  }
  @action register() {
    return new Promise((resolve, reject) => {
      Auth.register(this.values.username, this.values.password)
        .then((user) => {
          console.log("注册请求成功");
          UserStore.pullUser()
          resolve(user);
        })
        .catch((error) => {
          console.log("注册请求失败");
          UserStore.resetUser()
          reject(error);
        });
    });
  }
  @action logout() {
    Auth.logout()
    UserStore.resetUser()
  }
}

export default new AuthStore();
