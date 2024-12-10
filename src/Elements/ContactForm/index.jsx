import React from "react";
import { Form, Input, Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import emailjs from "emailjs-com";
import "./Contactform.css"; // Importing the CSS

const ContactForm = () => {
  const [form] = Form.useForm();

  // Email.js configuration (replace with your actual keys)
  const serviceID = "your_service_id";
  const templateID = "your_template_id";
  const userID = "your_user_id";

  // Handle form submission
  const onFinish = (values) => {
    const formData = {
      name: values.name,
      email: values.email,
      location: values.location,
      phone: values.phone,
    };

    // Handle file upload
    if (values.file && values.file[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        formData.file = reader.result; // Get base64 string
        sendEmail(formData);
      };
      reader.readAsDataURL(values.file[0].originFileObj);
    } else {
      sendEmail(formData);
    }
  };

  // Email sending function
  const sendEmail = (formData) => {
    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(() => {
        message.success("Message sent successfully!");
        form.resetFields();
      })
      .catch(() => {
        message.error("Failed to send the message.");
      });
  };

  // Image upload validator
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <div className="contact-form-container p-4">
      <h2 className="form-title">Get in Touch</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ remember: true }}
      >
        {/* Name Input */}
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>

        {/* Email Input */}
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Please enter a valid email!" },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        {/* Location Input */}
        <Form.Item
          label="Location"
          name="location"
          rules={[{ required: true, message: "Please input your location!" }]}
        >
          <Input placeholder="Enter your location" />
        </Form.Item>

        {/* Phone Number Input */}
        <Form.Item
          label="Phone Number"
          name="phone"
          rules={[
            { required: true, message: "Please input your phone number!" },
            { pattern: /^[0-9]+$/, message: "Please enter a valid phone number!" },
          ]}
        >
          <Input placeholder="Enter your phone number" />
        </Form.Item>

        {/* Image Upload Input */}
        <Form.Item
          label="Upload Image"
          name="file"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[{ required: false, message: "Please upload an image!" }]}
        >
          <Upload name="file" listType="picture" maxCount={1} beforeUpload={() => false}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button type="primary" htmlType="submit" block className="submit-button">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactForm;
