import { z } from 'zod';
import { useForm, type SubmitHandler, type SubmitErrorHandler } from "react-hook-form";

const userInfoSchema = z.object({
    name: z.string().min(2, { message:'2글자 이상' }),
    age: z.number()
});

type TUserInfoType = z.infer<typeof userInfoSchema>;

const BasicUsage = () => {
    const { register, handleSubmit } = useForm<TUserInfoType>();

    const onFormSubmit:SubmitHandler<TUserInfoType> = (userInfo: TUserInfoType) => {
        alert(JSON.stringify(userInfo));
    }

    const onFormSubmitError:SubmitErrorHandler<TUserInfoType> = (errors, e) => {
        // TODO : errors가 문자열로 파싱이 안됨 → 순환 참조의 문제 발생
        // ref 속성에서 발생하는 것으로 보임
        console.log(JSON.stringify(errors, (key, value) => {
            if (key === 'ref') {
                return;
            }

            return value;
        }));
    }

    return (
        <form onSubmit={handleSubmit(onFormSubmit, onFormSubmitError)}>
            <label htmlFor="name">이름 : </label>
            <input type="text" {...register('name')} id='name'/>
            <label htmlFor="age">&nbsp; 나이는 필수 값 : </label>
            <input type="text"  {...register('age', { required: true })} id='age'/>
            <input type="submit" value='submit'/>
        </form>
    )
}

export default BasicUsage;