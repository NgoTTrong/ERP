"use client";
import { Button, Form, FormProps, Input } from "antd";
import UserIcon from "./icons/user-icon";
import LockIcon from "./icons/lock-icon";
import { ILoginForm } from "./type";
import { isValidPhone } from "@/utils/functions";

const LoginForm = () => {
	const [form] = Form.useForm();

	const handleLogin: FormProps<ILoginForm>["onFinish"] = async (values) => {
		console.log("Success:", values);
	};
	return (
		<Form
			className="flex items-center gap-3 flex-col w-full [&_.ant-form-item]:w-full"
			form={form}
			onFinish={handleLogin}
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
			<Button type="primary" htmlType="submit" className="w-full mt-3">
				Đăng nhập
			</Button>
		</Form>
	);
};

export default LoginForm;
