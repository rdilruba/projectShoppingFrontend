import React from 'react'
import { Form, Input, Button, Checkbox, message } from 'antd';
import axios from "axios";




class Login extends React.Component {
    constructor() {
        super();

        this.state = {
            isRegisterForm: false,
            showLoginError: false,
            showRegisterError: false
        }

        this.onFinish = this.onFinish.bind(this);
    }


    onFinish(values) {

        if (!this.state.isRegisterForm) {
            axios.post('https://shopper496.herokuapp.com/auth/customerLogin', {
                username: values.username,
                password: values.password
            })
                .then((response) => {
                    if (response.status === 200) {
                        localStorage.setItem('ShopperAuth', response.data.Authorization);
                        localStorage.setItem('ShopperUser', response.data.User.username);
                        message.success('You have logged in successfully as ' + localStorage.getItem('ShopperUser'));

                        this.props.handleOk();
                    }

                }, (error) => {
                    this.setState({
                        showLoginError: true
                    })
                });


        }

        else {
            axios.post('https://shopper496.herokuapp.com/auth/customerRegister', {
                username: values.username,
                password: values.password,
                firstName: values.firstName,
                lastName: values.lastName
            })
                .then((response) => {
                    if (response.status === 200) {

                        message.success('You have registered successfully.');

                        this.props.handleOk();
                    }
                }, (error) => {
                    this.setState({
                        showRegisterError: true
                    })
                });
        }
    };

    render() {

        const layout = {
            wrapperCol: { span: 24 },
        };


        return (
            <div style={{ padding: 12, fontWeight: "lighter", fontSize: 23, fontFamily: "Manrope, sans-serif" }}>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    {
                        this.state.isRegisterForm ?
                            <div >
                                <Form.Item
                                    name="firstName"
                                    rules={[{ required: true, message: 'Please input your first name.' }]}
                                >
                                    <Input placeholder="First Name" style={{ fontSize: 18 }} />
                                </Form.Item>

                                <Form.Item
                                    name="lastName"
                                    rules={[{ required: true, message: 'Please input your last name.' }]}
                                >
                                    <Input placeholder="Last Name" style={{ fontSize: 18 }} />
                                </Form.Item> </div> : null
                    }


                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your username.' }]}
                    >
                        <Input placeholder="Username" style={{ fontSize: 18 }} />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password.' }]}
                    >
                        <Input.Password placeholder="Password" />
                    </Form.Item>
                    {
                        this.state.showLoginError ? <div style={{ color: "red", fontSize: 14, }}> Username or password is wrong. </div> : null
                    }
                    {
                        this.state.showRegisterError ? <div style={{ color: "red", fontSize: 14, }}> An error has occured. </div> : null
                    }
                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox style={{ marginTop: 10, marginLeft: 0 }}>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item style={{ textAlign: "center" }}>
                        <Button htmlType="submit" style={{ fontSize: 20, height: 40, padding: 4, verticalAlign: "middle", margin: "auto", width: 200 }} type="primary">
                            Submit
                        </Button>
                    </Form.Item>



                    <div style={{ textAlign: "center" }}>
                        {
                            !this.state.isRegisterForm ?
                                <div style={{ fontSize: 18 }}>
                                    Do not have an account? <a onClick={() => this.setState({ isRegisterForm: true })} style={{ color: "blue" }}> Register here.</a>
                                </div> :
                                <div style={{ fontSize: 18 }}>
                                    Already have an account? <a onClick={() => this.setState({ isRegisterForm: false })} style={{ color: "blue" }}> Log in here.</a>
                                </div>
                        }
                    </div>
                </Form>
            </div>
        )
    }

}

export default Login