

const sleep: any = (ms: any) => new Promise(resolve => setTimeout(resolve, ms))

const asyncValidate = (values: any /*, dispatch */) => {

    return sleep(1000).then(() => {
        // simulate server latency
    });
}

export default asyncValidate;
