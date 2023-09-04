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
    age: z.number(),
});

console.log(userInfoSchema.parse({
    name: 'Moon',
    age: 26,
}));  // { name: 'Moon', age: 26 }

// 아래의 것도 thorw error 없이 정상 출력되므로 알아두기!
console.log(userInfoSchema.parse({
    name: 'Moon',
    age: 26,
    gender: 'male',
}));  // { name: 'Moon', age: 26 }