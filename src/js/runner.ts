export const runner = () => {
    // interface
    interface Person {
        name: string,
        age: number,
    }
    interface Animal {
        readonly type: string,
        hair: number,
    }
    // keyof type
    type keyPerson = keyof Person;
    // Record
    type able = Record<keyPerson, string>
    // readonly
    type Writable<T> = {
        -readonly [P in keyof T]: T[P];
    };
};