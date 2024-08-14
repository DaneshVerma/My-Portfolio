import Typewriter from 'typewriter-effect'

function Greet (props){
    return (
        <Typewriter 
        options={{
            strings:props.text,
            autoStart:true,
            loop:true
        }}/>
    )
}

export default Greet;