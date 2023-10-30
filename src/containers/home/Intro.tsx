import Footer from '@/components/Footer';
import * as S from './styles';
import IconButton from '@/components/IconButton';
import { ArrowLongRight } from '@/components/Icon';

export default function Intro({
  onTourStarted
}: {
  onTourStarted: () => void;
}) {
  return (
    <>
      <S.IntroContainer>
        <S.TitleIntro>Innovation in Your Hands</S.TitleIntro>
        <S.DescriptionIntro>
          Explore, Interact and Transform the Real Estate Market with Our Smart
          Interactive Table.
        </S.DescriptionIntro>
        <S.BottomContainer>
          <S.TitleStartExperience>start experience</S.TitleStartExperience>
          <IconButton icon={<ArrowLongRight />} onClick={onTourStarted} />
        </S.BottomContainer>
      </S.IntroContainer>

      <S.FooterContainer>
        <Footer />
      </S.FooterContainer>
    </>
  );
}
