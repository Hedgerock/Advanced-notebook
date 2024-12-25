import { Outlet } from "react-router-dom"
import './Layout.css';
import { useLayoutSetup } from "./hooks";

export const Layout = () => {
    const { myFooterTitle, myHeaderTitle } = useLayoutSetup();

    return (
        <main className="application-skeleton">
            <div className="application-skeleton-header">
                <h1>{ myHeaderTitle }</h1>
            </div>

            <div className="main">
                <Outlet />
            </div>

            <div className="application-skeleton-footer">
                <h1>{ myFooterTitle }</h1>
            </div>
        </main>

    )

}