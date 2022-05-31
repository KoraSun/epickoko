import { useStores } from "../stores";
import InfiniteScroll from "react-infinite-scroll-component";
import { Divider, List, Popconfirm,message} from "antd";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

export const Lists = observer(() => {

  const cancel = (e) => {
    console.log(e);
    message.error("取消删除");
  };

  const { HistoryStore, ImageStore } = useStores();
  const [loading, setLoading] = useState(false);
  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    HistoryStore.find();
    setLoading(false);
  };

  useEffect(() => {
    loadMoreData();
  });

  return (
    <div
      id="scrollableDiv"
      style={{
        height: 600,
        overflow: "auto",
        margin: "20px auto",
        padding: "0 16px",
        border: "1px solid rgba(140, 140, 140, 0.35)",
      }}
    >
      <InfiniteScroll
        dataLength={HistoryStore.newList.length}
        next={loadMoreData}
        hasMore={HistoryStore.hasMore}
      >
        <List
          dataSource={HistoryStore.newList}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <div>
                <img
                  src={item.attributes.url.attributes.url}
                  style={{
                    width: "100px",
                    objectFit: "contain",
                    border: "1px solid #eee",
                    height: "120px",
                  }}
                />
              </div>
              <div style={{ width: "200px" }}>{item.attributes.name}</div>
              <div style={{ width: "500px" }}>
                <a
                  target="_blank"
                  href={item.attributes.url.attributes.url}
                  style={{ color: "black" }}
                >
                  {item.attributes.url.attributes.url}
                </a>
              </div>

             
              <Popconfirm
                title="确定删除这张照片吗?"
                onConfirm={()=>{HistoryStore.delete(item.id)}}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
              > 
                <button>Delete</button>
              </Popconfirm>
            </List.Item>
          )}
        />
        {<Divider plain>It is all, nothing more 🤐</Divider>}
      </InfiniteScroll>
    </div>
  );
});
