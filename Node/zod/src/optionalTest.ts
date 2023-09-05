import { z } from 'zod';

const userRegisterSchema = z.object({
    name: z.string(),
    age: z.number().optional()
});

const userData = {
    name: 'moon'
}

// test
const testResult = userRegisterSchema.safeParse(userData);

// console
console.log(testResult);  // { success: true, data: { name: 'moon' } }