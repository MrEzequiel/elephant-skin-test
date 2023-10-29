import Button from '@/components/Button';
import { ArrowLongRight } from '@/components/Icon';
import Input from '@/components/Input';
import * as S from './styles';

export default function LoginForm() {
  return (
    <>
      <form>
        <S.FieldsContainer>
          <Input placeholder="Type your email" type="email" />
          <Input placeholder="Type your password" type="password" />
        </S.FieldsContainer>

        <Button
          type="submit"
          $fullWidth
          rightIcon={<ArrowLongRight size="extrasmall" />}
        >
          Login
        </Button>
      </form>
    </>
  );
}
