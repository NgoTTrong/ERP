import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "@/styles/globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import { themeConfig } from "@/theme/theme-config";

const beVietnamePro = Be_Vietnam_Pro({
	weight: ["100", "300", "400", "500", "700", "900"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "auto",
});

export const metadata: Metadata = {
	title: "ERP",
	description: "ERP for every bussiness",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="vi">
			<body className={beVietnamePro.className}>
				<AntdRegistry>
					<ConfigProvider theme={themeConfig}>
						{children}
					</ConfigProvider>
				</AntdRegistry>
			</body>
		</html>
	);
}
