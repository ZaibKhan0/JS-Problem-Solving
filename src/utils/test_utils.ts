export const measureAvgTime = (callback: Function) => {
    const start = Bun.nanoseconds();
    callback()
    const end = Bun.nanoseconds();
    const estimatedTime = (end - start) / 1000000;
    console.log(estimatedTime)
    
    return estimatedTime;
}
