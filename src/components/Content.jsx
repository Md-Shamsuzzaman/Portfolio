

const Content=(props)=>{
    return(<>
                <div className="content">
                        <h1>{props.standard}</h1>
                        <p style={props.style}>{props.para}</p>
                    <p style={props.style2} >{props.marks}</p>
                </div>
    </>)
}
export default Content;