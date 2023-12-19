"use client";
import play_icon from "@/assets/images/custom_play.svg";
import { ModalVideoProps } from "@/types";
import { ConfigProvider, Modal } from "antd";
import Image from "next/image";
import { useMemo, useState } from "react";
import ReactPlayer from "react-player/lazy";

const ModalVideo: (props: ModalVideoProps) => JSX.Element = (props) => {
    const videos = useMemo(() => {
        if (typeof props.urls == "string") return [props.urls];
        else if (Array.isArray(props.urls)) return props.urls;

        return [];
    }, [props.urls]);

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <figure
                className="cursor-pointer hover:scale-110 duration-500"
                onClick={() => setIsOpen(true)}
            >
                <Image
                    alt="play icon"
                    src={play_icon}
                    width={150}
                    className="max-sm:w-24"
                />
            </figure>

            <ConfigProvider
                theme={{
                    components: {
                        Modal: {
                            paddingLG: 0,
                            padding: 0,
                            paddingMD: 0,
                            paddingSM: 0,
                            paddingXL: 0,
                            paddingXS: 0,
                            paddingXXS: 0,
                            paddingContentHorizontal: 0,
                            paddingContentHorizontalLG: 0,
                            paddingContentHorizontalSM: 0,
                            controlPaddingHorizontal: 0,
                            controlPaddingHorizontalSM: 0,
                            colorBgContainer: "#333",
                            contentBg: "#333",
                        },
                    },
                }}
            >
                <Modal
                    open={isOpen}
                    onCancel={() => setIsOpen(false)}
                    footer={false}
                    destroyOnClose
                    closable={false}
                >
                    <ReactPlayer
                        url={videos}
                        width="100%"
                        fallback={
                            <div className="w-full h-full flex justify-center items-center">
                                <span className="w-8 h-8 border-transparent border-2 border-t-primary rounded-full animate-spin" />
                            </div>
                        }
                        stopOnUnmount
                        playIcon={
                            <Image
                                alt="play icon"
                                src={play_icon}
                                width={150}
                                className="max-sm:w-24"
                            />
                        }
                    />
                </Modal>
            </ConfigProvider>
        </>
    );
};

export default ModalVideo;
