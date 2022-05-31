import { observable, action, makeObservable } from "mobx";
import { Auth, Uploader } from "../models/index";
class HistoryStore {
  constructor() {
    makeObservable(this);
  }

  @observable newList = [];
  @observable isLoading = false;
 hasMore = true;
  @observable page = 0;
  @observable itemId = null;

  limit = 10;

  @action append(newList) {
    this.newList = newList;
  }
 
  @action find() {
   
    return new Promise((resolve, reject) => {
      Uploader.find({ page: this.page, limit: this.limit })
        .then((newList) => {
          this.append(newList);
          if (newList.length < this.limit) {
            this.hasMore=false
          }
          resolve(newList);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    })
  }
  @action delete(itemId) {
    Uploader.delete(itemId);
  }
}

export default new HistoryStore();
