import clsx from "clsx";

export const Drawer = ({ show = false, position = "right", onClick }) => {
    const drawerClassNames = () => {
        if (position === "left") {
            return clsx(
                "fixed w-72 h-screen transition bg-white left-0",
                show ? "translate-x-0" : "-translate-x-full"
            );
        }

        if (position === "right") {
            return clsx(
                "fixed w-72 h-screen transition bg-white right-0",
                show ? "translate-x-0" : "translate-x-full"
            );
        }

        if (position === "top") {
            return clsx(
                "fixed top-0 transition w-screen h-72 bg-white",
                show ? "translate-y-0" : "-translate-y-full"
            );
        }

        if (position === "bottom") {
            return clsx(
                "fixed bottom-0 transition w-screen h-72 bg-white",
                show ? "translate-y-0" : "translate-y-full"
            );
        }

        return ""
    };

    return (
        <div>
            <div
                onClick={onClick}
                className={clsx(
                    "fixed  w-screen h-screen transition-all duration-300 bg-gray-900/95",
                    show ? "visible opacity-100" : "invisible opacity-0"
                )}
            ></div>
            <div className={drawerClassNames()}>Drawer</div>
        </div>
    );
};