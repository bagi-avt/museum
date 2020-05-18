import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

class Signin extends Component {
    render() {
        const onFinish = (values) => {
            console.log("Received values of form: ", values);
        };
        return (
            <div className="auth__block">
                <div className="auth__top">
                    <h2>Войти в аккаунт</h2>
                    <p>Пожалуйста, войдите в свой аккаунт</p>
                </div>

                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        hasFeedback
                        validateStatus="success"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Username!",
                            },
                        ]}
                    >
                        <Input
                            prefix={
                                <UserOutlined className="site-form-item-icon" />
                            }
                            size="large"
                            placeholder="E-mail"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Password!",
                            },
                        ]}
                    >
                        <Input
                            prefix={
                                <LockOutlined className="site-form-item-icon" />
                            }
                            type="password"
                            size="large"
                            placeholder="Пароль"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                            size="large"
                        >
                            ВОЙТИ В АККАУНТ
                        </Button>
                        <a
                            href="/api/auth/google"
                            className="login-form-button-google"
                        >
                            Google+
                        </a>
                    </Form.Item>
                    <Form.Item>
                        <Link className="auth__register-link" to="/register">
                            Зарегистрироваться
                        </Link>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default Signin;
