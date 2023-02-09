import ChrevronUpIcon from "@heroicons/react/24/solid/ChevronUpIcon"
import clsx from "clsx"

export const Accordion = ({ items = [], onToggle }) => {

    const onToggleHandler = (id) => () => {
        if (onToggle) {
            onToggle(id)
        }
    }

    return (
        <div className="bg-gray-200 border border-black w-96 p-4 m-4 space-y-2">
            {items.map((item) => {
                return (
                    <div className="rounded-md overflow-hidden">
                        <div key={item.id}>
                            <div className={clsx("flex py-4 px-2 justify-between transition-all duration-500", item.open ? "bg-gray-800" : "bg-gray-600")}>
                                <h2 className="text-white text-lg">{item.title}</h2>
                                <button onClick={onToggleHandler(item.id)}>
                                    <ChrevronUpIcon ChevronDownIcon className={clsx("h-6 w-6 text-white transition duration-500", item.open && "rotate-180")} />
                                </button>
                            </div>
                        </div>
                        <div className={clsx(
                            "bg-gray-500 transition-all overflow-hidden text-white duration-500",
                            !item.open ? "h-0 p-0" : "h-auto px-2 py-4"
                        )}>{item.content}</div>
                    </div>
                )
            })}
        </div>
    )
}