import { z } from 'zod';

// 1️⃣ coerce 활용
const userInfoSchema = z.object({
    name: z.string(),
    age: z.coerce.string()  // 강제로 string으로 받게 함
});

console.log(userInfoSchema.parse({
    name: 'moon',
    age: 26
}));  // { name: 'moon', age: '26' }
