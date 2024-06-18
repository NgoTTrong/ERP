"use client";

import useAsync from "@/hooks/use-async";
import { Spin } from "antd";
import { ReactNode, useEffect, useState } from "react";

export default function LayoutRootChild({ children }: { children: ReactNode }) {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	// const { setUser } = useUser();
	// const { run } = useAsync(() => getMe(), true);

	return (
		<main className="w-full h-full flex items-center justify-center">
			{isLoading ? <Spin size="large" /> : <>{children}</>}
		</main>
	);
}
