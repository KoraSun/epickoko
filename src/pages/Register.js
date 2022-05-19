import { observer } from "mobx-react";
import { useRef } from "react";
import { useStores } from "../stores";
import { Form, Input, Button } from "antd";
import styles from "../styles/Register.module.css";

export const Register = observer(() => {
  const inputRef = useRef(null);
  const { AuthStore } = useStores();
  const onChange = () => {
    AuthStore.setUsername(inputRef.current.value);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const validateUserName = (rule, value) => {
    if (/\W/.test(value)) return Promise.reject("只能是数字字母下划线");
    if (value.length < 4 || value.length > 10)
      return Promise.reject("长度为4-10个字符");
    return Promise.resolve();
  };

  const validateConfirm = ({ getFieldValue }) => ({
    //返回一个对象，需要用（）包起来
    validator(rule, value) {
      if (getFieldValue("password") === value) return Promise.resolve();
      else return Promise.reject("两次密码不一致");
    },
  });

  return (
    <div className={styles.wrapper}>
      {/*  Register:{AuthStore.values.username}
      <input ref={inputRef} onChange={onChange}></input> */}
      <h1>注册</h1>
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
              message: "请输入用户名！",
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
              message: "请输入密码！",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="再次输入"
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: "请再次确认密码！",
            },
            validateConfirm,
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
