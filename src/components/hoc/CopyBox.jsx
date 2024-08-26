export const CopyBox = ({ children, text }) => {

    return (
        <div 
            className="copy-box" 
            title={ text }
        >
            { children }
        </div>
    )
}