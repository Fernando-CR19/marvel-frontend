import clsx from "clsx"
import ChevronLeftIcon from "@heroicons/react/24/solid/ChevronLeftIcon"
import ChevronRightIcon from "@heroicons/react/24/solid/ChevronRightIcon"
import { useEffect, useState } from "react"

export const Pagination = () => {

    const [items] = useState(Array.from(Array(11).keys()))
    const [numPages, setNumPages] = useState()
    const [itemsPerPage] = useState(5)
    const [currentItem, setCurrentItem] = useState(0)

    useEffect(() => {
        setNumPages(Math.ceil(items.length / itemsPerPage))
    }, [items, itemsPerPage])

    const onPrev = () => { }
    const onNext = () => { }
    const onSelect = () => { }

    return (
        <div className=" bg-gray-900 p-6 flex items-center">
            <button className="p-4 hover:bg-gray-700/70 rounded-full bg-gray-900/20 text-white">
                <ChevronLeftIcon className="h-6 w-6" />
            </ button>
            <div className="text-white flex">
                {items.map((item) => {
                    return <button className={clsx("p-4 hover:bg-gray-700/70 rounded-full bg-gray-900/20 text-white h-14 w-14 flex items-center justify-center")}>{Number(item) + 1}</button>
                })}
            </div>
            <button className="p-4 hover:bg-gray-700/70 rounded-full bg-gray-900/20 text-white">
                <ChevronRightIcon className="h-6 w-6" />
            </button>
        </div>
    )
}