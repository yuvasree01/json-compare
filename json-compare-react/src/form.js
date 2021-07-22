import React,{component} from 'react'
class form extends Component{
    constructor(props){
        super(props)
        this.state={
            oldData:'',
            newData:'',

        }
    }
    changeHandler=(e) =>{
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler=e => {
        e.preventDefault()
        console.log(this.state)
    }
    render(){
        const{oldData,newData}=this.state
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="oldData" value={oldData} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="newData" value={newData} onChange={this.changeHandler}/>
                    </div>
                    <button type="submit">View Difference</button>
                </form>

            </div>
        )
    }
}
export default form