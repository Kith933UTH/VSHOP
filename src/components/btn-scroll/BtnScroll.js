import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCaretUp} from "@fortawesome/free-solid-svg-icons"

export function BtnScroll() {
    const topClick = () => {
        const body = document.querySelector('body').getBoundingClientRect().top + window.scrollY
        window.scroll({
            top: body,
            behavior: 'smooth'
        })
    }

    return (
        <button
            className='fixed bottom-8 right-4 bg-gray-600 text-white rounded-full w-[30px] h-[30px] md:w-[40px] md:h-[40px] md:right-8 md:bottom-8 z-20 shadow-gray-600'
            onClick={topClick}
        >
            <FontAwesomeIcon icon={faCaretUp}/>
        </button>
    )
}
