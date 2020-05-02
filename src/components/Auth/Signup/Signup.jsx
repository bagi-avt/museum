import React from "react";
import { Form, Input, Button } from "antd";
import {
    UserOutlined,
    LockOutlined,
    MailOutlined,
    ExclamationCircleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Signup = (props) => {
    const success = false;
    return (
        <div className="auth__block">
            <div className="auth__top">
                <h2>Регистрация</h2>
                <p>
                    Для входа в музей, вам нужно <br /> зарегистрироваться
                </p>
            </div>
            {!success ? (
                <Form className="login-form">
                    <Form.Item
                        hasFeedback
                        validateStatus="success"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: "Пожалуйста введите свою почту!",
                            },
                        ]}
                    >
                        <Input
                            prefix={
                                <MailOutlined className="site-form-item-icon" />
                            }
                            size="large"
                            placeholder="E-mail"
                        />
                    </Form.Item>
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: "Пожалуйста введите свое Имя!",
                            },
                        ]}
                    >
                        <Input
                            prefix={
                                <UserOutlined className="site-form-item-icon" />
                            }
                            size="large"
                            placeholder="Ваше имя"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Пожалуйста введите пароль!",
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
                    <Form.Item
                        name="passwordReplay"
                        rules={[
                            {
                                required: true,
                                message: "Пожалуйста введите пароль!",
                            },
                        ]}
                    >
                        <Input
                            prefix={
                                <LockOutlined className="site-form-item-icon" />
                            }
                            type="password"
                            size="large"
                            placeholder="Павторите пароль"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                            to="/login"
                        >
                            Зарегистрироваться
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <Link className="auth__register-link" to="/login">
                            Войти в аккаунт
                        </Link>
                    </Form.Item>
                </Form>
            ) : (
                <div className="auth__success-block">
                    <ExclamationCircleOutlined className="site-form-item-icon" />
                    <h2>Подтвердите свой аккаунт</h2>
                    <p>
                        На Вашу почту отправлено письмо с ссылкой на
                        подтверждение аккаунта.
                    </p>
                </div>
            )}
        </div>
    );
};

export default Signup;
