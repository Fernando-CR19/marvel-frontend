import clsx from "clsx"

export const Drawer = ({ position = "right", show = false, onClick }) => {
    return (
        <div>
            <div className={clsx("fixed left-0 top-0 w-screen h-screen bg-gray-800/90",
                show ? "block" : "hidden",
            )}
                onClick={onClick}></div>
            <div className={clsx(
                "fixed bg-white transition duration-300 ease-in-out",
                position === "left" || position === "right" ? "w-72 h-screen" : "",
                show && position === "left" ? "translate-x-0" : "-translate-x-full",
                show && position === "right" ? " right-0 -translate-x-0" : "right-0 translate-x-full",
                position === "top" || position === "bottom" ? "h-72 w-screen" : "",
                position === "top" && "top-0",
                position === "bottom" && "bottom-0"
            )}>Drawer</div>
        </div >
    )
} 