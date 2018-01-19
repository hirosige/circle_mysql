import React, { Component } from 'react';
import { Button, Form, Input } from 'antd';
import { message } from "antd";

class FormContact extends Component {
     constructor(props) {
         super(props);

         this.handleSendUsSubmit = this.handleSendUsSubmit.bind(this)
     }

    handleSendUsSubmit(e) {
        e.preventDefault();
        // this.props.form.validateFields((err, values) => {
        //     if (!err) {
        //
        //     }
        // });
        const {t} = this.props;
        message.error(<span dangerouslySetInnerHTML={{__html: t('home.error.temporarily-unavailable')}}/>);
    };

    render() {
        const {t}                 = this.props;
        const {getFieldDecorator} = this.props.form;

        const fieldDecorators = {
            name:    {
                rules: [{
                    required: true,
                    message:  'Please input your username!'
                }]
            },
            email:   {
                rules: [{
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                }, {
                    required: true,
                    message: 'Please input your E-mail!',
                }]
            },
            message: {
                rules: [{
                    required: true,
                    message:  'Please input your message!'
                }]
            },
        };


        return (

            <Form onSubmit={this.handleSendUsSubmit}>
                <Form.Item>
                    {getFieldDecorator('name', fieldDecorators.name)(
                        <Input placeholder={t('home.content.contact-send-us-name')}/>
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('email', fieldDecorators.email)(
                        <Input type="email" placeholder={t('home.content.contact-send-us-email')}/>
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('message', fieldDecorators.message)(
                        <Input.TextArea placeholder={t('home.content.contact-send-us-message')}
                                        rows={3}/>
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" ghost size="large" htmlType="submit">
                    <span
                        dangerouslySetInnerHTML={{__html: t('home.content.contact-send-us-button')}}/>
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default Form.create()(FormContact);