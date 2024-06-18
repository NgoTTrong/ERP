"use client";

import { useState } from "react";
import LoginForm from "./login-form";
import RegisterForm from "./register-form";

const AuthSection = () => {
	const [isLoginMode, setIsLoginMode] = useState<boolean>(true);
	return (
		<main className="w-[400px] flex flex-col gap-12">
			<h1 className="text-3xl text-center">Chào mừng bạn,</h1>
			{isLoginMode ? <LoginForm /> : <RegisterForm />}
			{isLoginMode ? (
				<span className="text-sm w-full text-center">
					Bạn chưa có tài khoản{" "}
					<b
						className="text-primary cursor-pointer hover:opacity-75 transition"
						onClick={() => setIsLoginMode((state) => !state)}
					>
						đăng ký ngay
					</b>
				</span>
			) : (
				<span className="text-sm w-full text-center">
					Bạn đã có tài khoản{" "}
					<b
						className="text-primary cursor-pointer hover:opacity-75 transition"
						onClick={() => setIsLoginMode((state) => !state)}
					>
						đăng nhập ngay
					</b>
				</span>
			)}
		</main>
	);
};

export default AuthSection;
