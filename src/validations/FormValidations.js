export function minLenghtValidation (inputData, minLenght){
    const {value} = inputData
    removeClassErrorSuccess(inputData)
    if(value.lenght >= minLenght){
        inputData.classList.add("success")
        
        return true
    }else{
        inputData.classList.add("error")

        return false
    }
}

export function emailValidation (inputData){
    const emailValid = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
    const {value} = inputData
    removeClassErrorSuccess(inputData)
    const resultadoValidacion = emailValid.test(value)
    if (resultadoValidacion){
        inputData.classList.add("success")
        return true
    }else{
        inputData.classList.add("error")

        return false
    }

}

function removeClassErrorSuccess(inputData){
    inputData.classList.remove("success")
    inputData.classList.remove("error")

}
