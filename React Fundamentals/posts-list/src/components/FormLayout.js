import React from 'react';
import { Form, Input, Button, Typography  } from 'antd'
import { connect } from 'react-redux';
import submitForm from '../redux/actions/submitForm';

class FormLayout extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        const payload = {
          postTitle: event.target[0].value,
          postContent: event.target[1].value
        };
    
        this.props.submitForm(payload);
        this.props.form.resetFields();
      }
    });
  }

  render() {
    const formItemLayout = {
      labelCol: { 
        span: 4 ,
        offset: 5
      },
      wrapperCol: { 
        span: 5 ,
      },
    };

    const buttonItemLayout = {
      wrapperCol: { 
        span: 10, 
        offset: 9 
      },
    };

    const headerLayout = {
      fontSize: '1.8em', 
      marginLeft: '45%',
    };

    const { getFieldDecorator } = this.props.form;
    const { Text } = Typography;

    return (
      <div>
        <Text level={2} style={headerLayout}>Create Post</Text>
        <Form layout="horizontal" onSubmit={this.handleSubmit}>

          <Form.Item label="Title" {...formItemLayout}>
            {getFieldDecorator('title', {
              rules: [
                {
                  required: true,
                  message: 'Post title required'
                }
              ]
            })(<Input placeholder="Post title" />)}
          </Form.Item>

          <Form.Item label="Content" {...formItemLayout}>
            {getFieldDecorator('content', {
              rules: [
                {
                  required: true,
                  message: 'Post content required'
                }
              ]
            })(<Input placeholder="Post content" />)}
          </Form.Item>

          <Form.Item {...buttonItemLayout}>
            <Button type="primary" htmlType="submit">Create</Button>
          </Form.Item>

        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  submitForm,
}

const ConnectedForm = connect(null, mapDispatchToProps)(FormLayout);
const WrappedForm = Form.create({ name: 'posts-form' })(ConnectedForm)

export default WrappedForm;