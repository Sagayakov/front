import { useForm } from 'react-hook-form';
import { FormAuthWrapper } from './FormAuth.style';

interface AuthData {
  email: string;
  password: string;
}

export const FormAuth = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset
  } = useForm<AuthData>({mode: 'onBlur'});

  const onsubmit = (data: AuthData) => {
    alert(JSON.stringify(data));
    reset()
  };

  return (
    <FormAuthWrapper>
      <form onSubmit={handleSubmit(onsubmit)} autoComplete="false">
        <input
          {...register('email', { required: true })}
          placeholder="Email"
          style={{
            width: '100%',
            height: '56px',
            border: '1px solid #DCDCDC',
            borderRadius: '8px',
            padding: '12px 24px',
          }}
        />
        <div style={{ height: '1.5rem' }}>
          {errors?.email && (
            <p style={{ color: '#FF3F25', fontSize: '13px' }}>
              Введите корректный email
            </p>
          )}
        </div>
        <input
          {...register('password', { required: true })}
          placeholder="Пароль"
          style={{
            width: '100%',
            height: '56px',
            border: '1px solid #DCDCDC',
            borderRadius: '8px',
            padding: '12px 24px',
          }}
        />
        <div style={{ height: '1.5rem' }}>
          {errors?.password && (
            <p style={{ color: '#FF3F25', fontSize: '13px' }}>
              Введите корректный пароль
            </p>
          )}
        </div>
        <input
          type="submit"
          style={{
            width: '100%',
            height: '43px',
            backgroundColor: '#02C66E',
            border: 'none',
            borderRadius: '8px',
            color: 'white',
            cursor: 'pointer',
          }}
          value="Войти"
        //   disabled={!isValid}
        />
      </form>
    </FormAuthWrapper>
  );
};
