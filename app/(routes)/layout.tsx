"use client";

import useAsync from "@/hooks/use-async";
import { cn } from "@/utils/cn";
import { Spin } from "antd";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

export default function LayoutRootChild({ children }: { children: ReactNode }) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    // const { setUser } = useUser();
    // const { run } = useAsync(() => getMe(), true);
    const router = useRouter();
    useEffect(() => {
        router.push("/login");
    }, []);
    return isLoading ? (
        <main className="main-spin">
            <Spin size="large" />
        </main>
    ) : (
        <main
            className={cn(
                "w-full min-h-screen max-h-screen h-screen overflow-x-hidden bg-white"
            )}
        >
            {children}
        </main>
    );
}
