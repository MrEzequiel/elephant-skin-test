import { Help, PowerOff } from '@/components/Icon';
import * as S from './styles';
import Tooltip from '@/components/Tooltip';

export default function ActionSideBar() {
  return (
    <S.ActionSideBarContainer>
      <Tooltip content="Help">
        <S.ActionSideBarItem>
          <Help size="small" />
        </S.ActionSideBarItem>
      </Tooltip>
      <Tooltip content="Logout">
        <S.ActionSideBarItem>
          <PowerOff size="small" />
        </S.ActionSideBarItem>
      </Tooltip>
    </S.ActionSideBarContainer>
  );
}
