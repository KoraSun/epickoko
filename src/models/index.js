import AV, { Query, User } from "leancloud-storage";


AV.init({
  appId: "1PEqzPOyB8z0ekGaqLAvtmLv-gzGzoHsz",
  appKey: "e7IunV4Tf2tceUUHhJWsReB7",
  serverURL: "https://1peqzpoy.lc-cn-n1-shared.com",
});

const Auth = {
  register(username, password) {
    let user = new User();
    user.setUsername(username);
    user.setPassword(password);
    return new Promise((resolve, reject) => {
      user.signUp().then(
        (loginedUser) => resolve(loginedUser),
        (error) => reject(error)
      );
    });
  },
  login(username, password) {
    return new Promise((resolve, reject) => {
      User.logIn(username, password).then(
        (loginedUser) => resolve(loginedUser),
        (error) => reject(error)
      );
    });
  },
  logout() {
    User.logOut();
  },
  getCurrentUser() {
    return User.current();
  },
};

export { Auth };
