import {
  Gallery,
  Location,
  Maps,
  Movie,
  Moviment,
  View
} from '@/components/Icon';
import * as S from './styles';
import { Fragment } from 'react';

const stepsIcons = [View, Moviment, Location, Maps, Gallery, Movie];

export default function Steps({ show }: { show: boolean }) {
  return (
    <S.StepsContainer $show={show}>
      {stepsIcons.map((Icon, index, arr) => (
        <Fragment key={index}>
          <S.StepItem>
            <Icon />
          </S.StepItem>
          {index < arr.length - 1 && <S.Divider />}
        </Fragment>
      ))}
    </S.StepsContainer>
  );
}
