import './Title.css'
const Title = ({name}) => {
    return (
        <>
            <div className="title">
                <div className="text-0">
                    <span className="span-0">Hi </span>
                    <span className="span-1">{name}</span>
                </div>
            </div>
        </>
    )
}

export default Title
