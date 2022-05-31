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
const Uploader = {
  add(file, filename) {
    const item = new AV.Object("Image");
    const avFile = new AV.File(filename, file);
    item.set("name", filename);
    item.set("owner", AV.User.current());
    item.set("url", avFile);
    return new Promise((resolve, reject) => {
      item.save().then(
        (serverFile) => {
          resolve(serverFile);
        },
        (error) => {
          reject(error);
        }
      );
    });
  },
  find(page = 0, limit = 10) {
    const query = new AV.Query("Image");
    query.include("owner");
    query.equalTo("owner", AV.User.current());
    query.descending("createdAt");
    query.limit("limit", limit);
    query.skip(page * limit);
    return new Promise((resolve, reject) => {
      query.find().then(
        (results) => {
          resolve(results);
        },
        (error) => {
          reject(error);
        }
      );
    });
  },
  delete(id) {
    const query = new AV.Query("Image");
    query.get(id).then((result)=>{
     result.destroy()
    })
  },
  get(id){
    const query = new AV.Query("Image");
    query.get(id).then((result)=>{
      console.log(result)
    })
  },

  
};

export { Auth, Uploader };
