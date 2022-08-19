export const add = (list: number[]):number => {
    return list.reduce((prev, cur) => {
        return prev + cur;
    });
}