import { timer,ResultBuilder } from '../../utils'

export default eventHandler(async ()=>{
    await timer(2000)

    return ResultBuilder.success(true)
})