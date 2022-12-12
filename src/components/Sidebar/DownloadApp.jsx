import React from 'react'
import iconDownload from "../../img/icons/download.svg"

export default function DownloadApp() {
    return (
        <a href='/' className=' group h-10 px-6 flex flex-shrink-0 text-link items-center hover:text-white gap-x-4'>
            <img src={iconDownload} alt="" className='opacity-80 group-hover:opacity-100' />
            <span className='text-sm text-bold'>Uygulamayı Yükle</span>
        </a>
    )
}
