const Userreducer=(state,action)=>{
    switch(action.type){
        case "Set_Login":
            return{
                isloggedin:true
            }
    }
}
export default Userreducer;