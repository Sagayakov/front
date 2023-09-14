import { SubmitHandler, useForm } from 'react-hook-form';
import { RegisterFormWrapper } from './RegisterForm.style';

interface Inputs {
  userName: string;
  email: string;
  phoneNumber: number;
  password: string;
}

export const RegisterForm = () => {
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
    <RegisterFormWrapper>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="false">
        <input
          {...register('userName', { required: true })}
          placeholder="Имя пользователя"
        />
        <div style={{ width: '405px', height: '16px' }}>
          {errors?.userName && (
            <span style={{ color: '#FF3F25', fontSize: '13px' }}>
              {errors.email.message}
            </span>
          )}
        </div>
        <input
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
        <input
          {...register('phoneNumber', { required: true })}
          placeholder="Номер телефона"
        />
        <div style={{ width: '405px', height: '16px' }}>
          {errors?.phoneNumber && (
            <span style={{ color: '#FF3F25', fontSize: '13px' }}>
              {errors.phoneNumber.message}
            </span>
          )}
        </div>
        <input
          type="password"
          {...register('password', { required: true })}
          placeholder="Пароль"
        />
        <div style={{ width: '405px', height: '16px' }}>
          {errors?.password && (
            <span style={{ color: '#FF3F25', fontSize: '13px' }}>
              {errors.password.message}
            </span>
          )}
        </div>
        <input
          type="password"
          {...register('password', { required: true })}
          placeholder="Повторите пароль"
        />
        <div style={{ width: '405px', height: '16px' }}>
          {errors?.password && (
            <span style={{ color: '#FF3F25', fontSize: '13px' }}>
              {errors.password.message}
            </span>
          )}
        </div>
        <input type="submit" value="Зарегистрироваться" />
      </form>
    </RegisterFormWrapper>
  );
};
