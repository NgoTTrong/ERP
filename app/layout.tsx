import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/styles/globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { App, ConfigProvider } from "antd";
import { themeConfig } from "@/theme/theme-config";
import StyledComponentsRegistry from "@/config/antd-registry";

const roboto = Roboto({
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
            <body className={roboto.className}>
                <AntdRegistry>
                    <ConfigProvider theme={themeConfig}>
                        <StyledComponentsRegistry>
                            <App>{children}</App>
                        </StyledComponentsRegistry>
                    </ConfigProvider>
                </AntdRegistry>
            </body>
        </html>
    );
}
