"use client";

import StyledComponentsRegistry from "@/config/antd-registry";
import { useClient } from "@/hooks";
import useAsync from "@/hooks/use-async";
import { cn } from "@/utils/cn";
import { App, ConfigProvider, Spin } from "antd";
import { notFound } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

export default function LayoutRootChild({ children }: { children: ReactNode }) {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	// const { setUser } = useUser();
	// const { run } = useAsync(() => getMe(), true);

	return isLoading ? (
		<main className="main-spin">
			<Spin size="large" />
		</main>
	) : (
		<main className={cn("w-full overflow-x-hidden bg-[#FAFAFA]")}>
			<App className="h-full w-full [&_.ant-layout]:!h-full">
				{children}
			</App>
		</main>
	);
}
