export default async function mockPromise(interval:number=2000){
    await new Promise((resolve)=> setTimeout(resolve,interval));
}