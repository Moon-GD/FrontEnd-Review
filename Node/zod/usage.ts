import { number, z } from 'zod';

// 1️⃣ basic usage
const numberSchema = z.number();

console.log(numberSchema.parse(1));  // 1

// 숫자가 아닌 대상을 numberSchema로 parse를 시도하면 throws error!
// console.log(numberSchema.parse('Hello zod'));  // throws error!

// safe parse
console.log(numberSchema.safeParse(1));  // { success: true, data: 1 }
console.log(numberSchema.safeParse('Hello zod'));  // { success: false, error: [Getter] }


// 2️⃣ object usage
const userInfoSchema = z.object({
    name: z.string(),
    age: z.number()
});

console.log(userInfoSchema.parse({
    name: 'Moon',
    age: 26,
}));  // { name: 'Moon', age: 26 }