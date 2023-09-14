import { SubmitHandler, useForm } from 'react-hook-form';
import { EnterWrapper } from './EnterWrapper.style';
import { InputForm } from './Input.style';

interface Inputs {
  email: string;
  password: string;
}

export const EnterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    alert(JSON.stringify(data));
    reset()
  };

  return (
    <EnterWrapper>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="false">
        <InputForm
          border={errors.email ? '#FF3F25' : '#DCDCDC'}
          type="email"
          {...register('email', { required: true })}
          placeholder="Email"
        />
        <div style={{ width: '405px', height: '16px' }}>
          {errors?.email && (
            <span style={{ color: '#FF3F25', fontSize: '13px' }}>
              {errors.email.message}
            </span>
          )}
        </div>
        <InputForm
          border={errors.email ? '#FF3F25' : '#DCDCDC'}
          type="password"
          {...register('password', { required: true })}
          placeholder="Пароль"
        />
        <div style={{ width: '405px', height: '16px' }}>
          {errors?.email && (
            <span style={{ color: '#FF3F25', fontSize: '13px' }}>
              {errors.email.message}
            </span>
          )}
        </div>
        <input type="submit" value="Войти" />
      </form>
    </EnterWrapper>
  );
};
