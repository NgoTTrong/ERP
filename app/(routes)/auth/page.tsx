"use client";
import AuthSection from "@/components/auth/auth-section";

const LoginPage = () => {
	return (
		<main className="w-full h-full grid grid-cols-2 md:gap-6 gap-4">
			<img
				src="/image/login.jpg"
				className="w-full !max-w-full h-full object-cover rounded-r-2xl"
				alt=""
			/>
			<section className="w-full h-full flex items-center justify-center">
				<AuthSection />
			</section>
		</main>
	);
};

export default LoginPage;
