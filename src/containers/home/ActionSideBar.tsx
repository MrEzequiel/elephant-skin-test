import { Help, PowerOff } from '@/components/Icon';
import * as S from './styles';
import Tooltip from '@/components/Tooltip';
import { useRouter } from 'next/navigation';

export default function ActionSideBar() {
  const router = useRouter();

  return (
    <S.ActionSideBarContainer>
      <Tooltip content="Help">
        <S.ActionSideBarItem>
          <Help size="small" />
        </S.ActionSideBarItem>
      </Tooltip>
      <Tooltip content="Logout">
        <S.ActionSideBarItem onClick={() => router.push('/login')}>
          <PowerOff size="small" />
        </S.ActionSideBarItem>
      </Tooltip>
    </S.ActionSideBarContainer>
  );
}
