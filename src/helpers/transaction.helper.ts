export function transformValue(key: string, value: string): string{
    switch (key) {
        case 'gas':
        case 'gasPrice':
            return `${value} WEI`;
        case 'timestamp':
            return (new Date(value)).toString();
        default:
            return value;
    }
}
