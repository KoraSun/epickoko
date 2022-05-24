import { useStores } from "../stores";
import { observer } from "mobx-react";
import { InboxOutlined } from "@ant-design/icons";
import { Upload, message } from "antd";
import styles from "../styles/Tips.module.css";
import { useRef, useState } from "react";
const { Dragger } = Upload;

export const Uploader = observer(() => {
  const { ImageStore, UserStore } = useStores();

  const props = {
    showUploadList: false,
    beforeUpload: (file) => {
      if (!UserStore.currentUser) {
        message.warning("请先登录再上传");
        return false;
      }
      ImageStore.setFile(file);
      ImageStore.setFilename(file.name);

      ImageStore.upload()
        .then((serverFile) => {
          console.log("上传成功");
          console.log(serverFile);
        })
        .catch((error) => {
          console.log("上传失败");
          console.log(error);
        });
      return false;
    },
  };
  const [state, setState] = useState({
    width: null,
    height: null,
    fullUrl: "",
  });
  const widthRef = useRef();
  const heightRef = useRef();
  const widthChange = () => {
    setState({ ...state, width: widthRef.current.value });
  };
  const heightChange = () => {
    setState({ ...state, height: heightRef.current.value });
  };
  const fullStr = () => {
    const widthStr = state.width ? `/w/${state.width}` : "";
    const heightStr = state.height ? `/h/${state.height}` : "";
    const url = ImageStore.serverFile.attributes.url.attributes.url;
    const fullStr = url + "?imageView2/0" + widthStr + heightStr;
    setState({ ...state, fullUrl: fullStr});
  };

  return (
    <div>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading
          company data or other band files
        </p>
      </Dragger>

      {ImageStore.serverFile ? (
        <div className={styles.result}>
          <h1>上传结果</h1>
          <dl>
            <dt>图片链接：</dt>
            <dd>
              <a href={ImageStore.serverFile.attributes.url.attributes.url}>
                {ImageStore.serverFile.attributes.url.attributes.url}
              </a>
            </dd>
            <dt>图片名字：</dt>
            <dd>{ImageStore.serverFile.attributes.name}</dd>
            <dt>图片预览：</dt>
            <dd>
              <img src={ImageStore.serverFile.attributes.url.attributes.url} />
            </dd>
            <dt>尺寸裁剪：</dt>
            宽度
            <input ref={widthRef} onChange={widthChange} />
            高度
            <input ref={heightRef} onChange={heightChange} />
            <br />
            <button onClick={fullStr} className={styles.button}>
              生成链接
            </button>
            <dd>
              <a target="blank" href={state.fullUrl}>
                {state.fullUrl}
              </a>
            </dd>
          </dl>
        </div>
      ) : null}
    </div>
  );
});
