export const timer = (interval=1000)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(true)
        },interval)
    })
}