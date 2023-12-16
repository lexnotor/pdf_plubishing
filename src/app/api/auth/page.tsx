"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();
    const [load, setLoad] = useState(false);
    const [token, setToken] = useState<string>(null);

    const handleToken = () => {
        fetch("/api/mail?auth_link=true")
            .then((res) => res.json())
            .then(({ link }) => {
                window.location.href = link;
            });
    };

    useEffect(() => {
        const code = searchParams.get("code");

        if (code) {
            setLoad(true);
            fetch(`/api/mail?code=${code}`)
                .then((res) => res.json())
                .then(({ token }) => {
                    setToken(token);
                    setLoad(true);
                    router.replace(pathname);
                })
                .catch(() => {
                    setToken(null);
                    setLoad(true);
                });
        }
    }, [searchParams, pathname, router]);

    return (
        <div>
            {token ? (
                <div className="max-w-xs mx-auto">
                    COPY/PASTE this token: {token}
                </div>
            ) : (
                <div>
                    <button
                        className="border rounded-lg mx-20 my-6 p-4 disabled:cursor-progress"
                        onClick={handleToken}
                        disabled={load}
                    >
                        Get gmail token
                    </button>
                </div>
            )}

            {load ? (
                <div className="w-screen h-screen flex justify-center items-center">
                    <div className="w-24 h-24 border-4 border-transparent border-t-teal-400 animate-spin rounded-full" />
                </div>
            ) : null}
        </div>
    );
};

export default Page;
