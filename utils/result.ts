class ResultBuilder {
    public static success(data:any){
        return {
            success:true,
            timestamp:Date.now(),
            data,
            code:'000000'
        }
    }
}

export default ResultBuilder