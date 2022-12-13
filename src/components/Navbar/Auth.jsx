import React from 'react'
import { Menu } from '@headlessui/react'
import iconDown from "../../img/icons/down-arrow.svg"
import iconAccount from "../../img/icons/account.svg"

export default function Auth() {
    const user = {
        name: "Metin Yüce",
        avatar: "https://i.scdn.co/image/ab6775700000ee85634e227d07f58812d7aa6a83",
    }
    return (
        <Menu as="nav" className="relative z-50">
            {({ open }) => (
                <>
                    <Menu.Button className={`flex items-center h-8 rounded-3xl pr-2 ${open ? 'bg-active' : 'bg-black'} hover:bg-active`}>
                        <img src={user.avatar} alt="" className='w-8 h-8 rounded-full p-0.5 mr-2 object-cover' />
                        <span className='text-sm font-semibold mr-2 '>{user.name}</span>
                        <img src={iconDown} alt="" className={open ? `rotate-180` : ``} />
                    </Menu.Button>
                    <Menu.Items className={"absolute top-full right-0 w-48 rounded bg-active translate-y-2 p-1 z-50"}>
                        <Menu.Item >
                            {({ active }) => (
                                <div className={`h-10 justify-between flex items-center px-2 text-sm rounded ${active && "bg-white bg-opacity-10"}`}>
                                    <a
                                        href="/"
                                    >
                                        Hesap
                                    </a>
                                    <img src={iconAccount} alt="" />
                                </div>

                            )}
                        </Menu.Item>
                        <Menu.Item >
                            {({ active }) => (
                                <a
                                    className={`h-10 flex items-center px-2 text-sm rounded ${active && "bg-white bg-opacity-10"}`}
                                    href="/"
                                >
                                    Profil
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item >
                            {({ active }) => (
                                <a
                                    className={`h-10 flex items-center px-2 text-sm rounded ${active && "bg-white bg-opacity-10"}`}
                                    href="/"
                                >
                                    Ayarlar
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item >
                            {({ active }) => (
                                <a
                                    className={`h-10 flex border-t-[0.5px] border-white/20 items-center px-2 text-sm ${active && "bg-white bg-opacity-10"}`}
                                    href="/"
                                >
                                    Oturumu kapat
                                </a>
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </>
            )}
        </Menu>
    )
}
