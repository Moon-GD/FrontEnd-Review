import { z } from 'zod';

// 1️⃣ min, max
const minAgeData = -1;
const ageSchema = z.number().min(1, { message: '1보다 커야 합니다.' });

// 결과 확인
const minResult = ageSchema.safeParse(minAgeData);

// console
if (!minResult.success) {
    // success 여부를 체크하는 이유는?
    // → TS에서 success가 false로 나올 때만 error property에 접근하도록 허용하기 때문
    console.log(minResult.error.message);
}

// minResult console 결과
// [
//     {
//       "code": "too_small",
//       "minimum": 1,
//       "type": "number",
//       "inclusive": true,
//       "exact": false,
//       "message": "1보다 커야 합니다.",
//       "path": []
//     }
// ]


// 2️⃣ refine
const countryData = 'USA';
const countrySchema = z.string().refine(value => value === 'Korea', {message: '한국 사람만 가입할 수 있습니다.'});

// test
const countryResult = countrySchema.safeParse(countryData);

if (!countryResult.success) {
    console.log(countryResult.error.message);
}

// console 결과
// [
//     {
//       "code": "custom",
//       "message": "한국 사람만 가입할 수 있습니다.",
//       "path": []
//     }
//  ]