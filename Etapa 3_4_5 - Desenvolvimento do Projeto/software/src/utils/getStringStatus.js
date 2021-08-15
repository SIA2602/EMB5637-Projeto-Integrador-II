export default function getStringStatus(status){
    if(status === "inOperation"){
        return "success"
    }

    else if(status === "inAlert"){
        return "warning"
    }

    return "error"
}