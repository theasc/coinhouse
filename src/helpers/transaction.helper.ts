export function transformValue(key: string, value: string): string {
    switch (key) {
        case 'gas':
        case 'gasPrice':
            return `${value} WEI`;
        case 'timestamp':
            return (new Date(value)).toString();
        case 'value':
            return `${fromWeiToEther(Number(value))} ETH`
        default:
            return value;
    }
}

export function fromWeiToEther(wei: number) {
    return (wei/Math.pow(10, 18));
}
