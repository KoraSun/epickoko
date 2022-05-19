import { observer } from "mobx-react";

import { useStores } from "../stores";
import { useRef } from "react";
import { Form, Input, Button } from "antd";
import styles from "../styles/Register.module.css";

export const Login = observer(() => {
  const { AuthStore } = useStores();
  const inputRef = useRef(null);
  const onChange = (event) => {
    console.log(inputRef.current.value);
    AuthStore.setUsername(inputRef.current.value);
  };
  const validateUserName = (rule, value) => {
    if (/\W/.test(value)) return Promise.reject("只能是数字字母下划线");
    if (value.length < 4 || value.length > 10)
      return Promise.reject("长度为4-10个字符");
    return Promise.resolve();
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles.wrapper}>
      {/*   <>
      <h1>Login:{AuthStore.values.username}</h1>
      <input onChange={onChange} ref={inputRef}></input>
    </>  */}
      <h1>登录</h1>
      <Form
        name="basic"
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[
            {
              required: true,
              message: "请输入用户名",
            },
            {
              validator: validateUserName,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[
            {
              required: true,
              message: "请输入密码",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 10,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
});
