"use client";
import { Button, Form, FormProps, Input } from "antd";
import UserIcon from "./icons/user-icon";
import LockIcon from "./icons/lock-icon";
import { IRegisterForm } from "./type";
import { isValidPhone } from "@/utils/functions";

const RegisterForm = () => {
	const [form] = Form.useForm();

	const handleRegister: FormProps<IRegisterForm>["onFinish"] = async (
		values
	) => {
		console.log("Success:", values);
	};
	return (
		<Form
			className="flex items-center gap-3 flex-col w-full [&_.ant-form-item]:w-full"
			form={form}
			onFinish={handleRegister}
		>
			<Form.Item
				name="phone"
				rules={[
					{ required: true, message: "Vui lòng nhập số điện thoại." },
					{
						validator(_, value) {
							if (isValidPhone(value)) {
								return Promise.resolve();
							}
							return Promise.reject(
								new Error("Số điện thoại không hợp lệ.")
							);
						},
					},
				]}
			>
				<Input
					type="number"
					inputMode="numeric"
					prefix={<UserIcon />}
					placeholder="Số điện thoại"
				/>
			</Form.Item>
			<Form.Item
				name="password"
				rules={[
					{ required: true, message: "Vui lòng nhập mật khẩu." },
					{ min: 8, message: "Mật khẩu phải có ít nhất 8 kí tự" },
				]}
			>
				<Input.Password
					prefix={<LockIcon />}
					type="password"
					placeholder="Mật khẩu"
				/>
			</Form.Item>
			<Form.Item
				name="confirmPassword"
				rules={[
					{ required: true, message: "Vui lòng nhập lại mật khẩu." },
					{ min: 8, message: "Mật khẩu phải có ít nhất 8 kí tự" },
					({ getFieldValue }) => ({
						validator(_, value) {
							if (!value || getFieldValue("password") === value) {
								return Promise.resolve();
							}
							return Promise.reject(
								new Error("Mật khẩu không khớp nhau.")
							);
						},
					}),
				]}
			>
				<Input.Password
					prefix={<LockIcon />}
					type="password"
					placeholder="Nhập lại mật khẩu"
				/>
			</Form.Item>
			<Button type="primary" htmlType="submit" className="w-full mt-3">
				Đăng ký
			</Button>
		</Form>
	);
};

export default RegisterForm;
