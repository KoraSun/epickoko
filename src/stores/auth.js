import { observable, action, makeObservable } from "mobx";

class AuthStore {
  constructor(){
    makeObservable(this)
  }
  @observable isLogin = false;
  @observable isLoading = false;
  @observable values = {
    username: "name",
    password: "",
  };

  @action setLogin(isLogin) {
    this.isLogin = isLogin;
  }

  @action setUsername(username) {
    this.values.username = username;
  }
  @action setPassword(password) {
    this.values.password = password;
  }

  @action Login() {
    console.log("登录中");
    this.isLoading = true;
    setTimeout(() => {
     console.log("登录成功")
      this.isLoading = false;
      this.isLogin = true;
    }, 2000);
  }
  @action register() {
    console.log("注册中");
    this.isLoading = true;
    setTimeout(() => {
        console.log("注册成功")
      this.isLoading = false;
      this.isLogin = true;
    }, 2000);
  }
  @action logout(){
      console.log("注销成功")

  }
}

export {AuthStore}