import { observable, action, makeObservable } from "mobx";
import { Auth, Uploader } from "../models/index";
class ImageStore {
  constructor() {
    makeObservable(this);
  }

  @observable file = null;
  @observable filename = "";
  @observable isLoading = false;
  @observable serverFile=null;

  @action setFilename(newFilename) {
    this.filename = newFilename;
  }

  @action setFile(newFile) {
    this.file = newFile;
  }

  @action upload() {
    this.isLoading = true;
    return new Promise((resolve, reject) => {
      Uploader.add(this.file, this.filename)
        .then((serverFile) => {
          this.isLoading = false;
          this.serverFile=serverFile
          resolve(serverFile);
        })
        .catch((error) => {
          console.log("上传失败");
          reject(error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    });
  }
}

export default new UserStore();
