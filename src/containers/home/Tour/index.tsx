import { useMemo, useState } from 'react';
import * as S from './styles';
import { tourItems } from './mock';
import Button from '@/components/Button';
import { Add, ArrowLongRight } from '@/components/Icon';
import IconButton from '@/components/IconButton';
import FullscreenVideo from '@/components/FullscreenVideo';
import FullscreenImage from '@/components/FullscreenImage';

export default function Tour() {
  const [tourSelect, setTourSelect] = useState(1);
  const tour = useMemo(() => tourItems[tourSelect], [tourSelect]);

  return (
    <S.MainContainer>
      <S.TourTextContainer>
        <S.TourTitle>{tour.title}</S.TourTitle>
        <S.TourDescription>{tour.description}</S.TourDescription>

        <Button
          type="submit"
          rightIcon={<ArrowLongRight size="extrasmall" />}
          style={{ width: 206 }}
        >
          let me in
        </Button>
      </S.TourTextContainer>

      <S.CardsContainer>
        {tourItems.map(({ Icon, ...item }, index) => (
          <S.CardContainer
            key={item.id}
            $isActive={index === tourSelect}
            $index={index}
          >
            <S.ImageCard
              src={item.attachment.cardImage}
              alt={item.titleCard}
              fill
            />

            <S.CardTextContainer>
              <S.CardDescriptionContainer>
                <Icon />
                <S.CardDescription>{item.titleCard}</S.CardDescription>
              </S.CardDescriptionContainer>
              <IconButton icon={<Add />} />
            </S.CardTextContainer>
          </S.CardContainer>
        ))}
      </S.CardsContainer>

      {tour.attachment.type === 'video' && (
        <FullscreenVideo src={tour.attachment.url} />
      )}
      {tour.attachment.type === 'image' && (
        <FullscreenImage src={tour.attachment.url} alt={tour.title} />
      )}

      <S.PaginationContainer>
        {tourSelect + 1} <S.Divider /> {tourItems.length}
      </S.PaginationContainer>
    </S.MainContainer>
  );
}
