import {
  BlockWindow,
  FavouriteWindow,
  StyledText,
  StyledCurrentFans,
} from './FavouriteWindows.styled';
import { useAppSelector } from '../../redux/hooks/hooks';
type genderArrayType = { id: number; gender: string; count: number }[];

export default function FavouriteWindows() {
  const female = useAppSelector((state) => state.favouritePerson.female);
  const male = useAppSelector((state) => state.favouritePerson.male);
  const other = useAppSelector((state) => state.favouritePerson.other);

  const genderArray: genderArrayType = [
    { id: 1, gender: 'male', count: male.length },
    { id: 2, gender: 'female', count: female.length },
    { id: 3, gender: 'other', count: other.length },
  ];
  return (
    <BlockWindow>
      {genderArray.map((item) => (
        <FavouriteWindow key={item.id}>
          <StyledCurrentFans>{item.count}</StyledCurrentFans>
          <StyledText>{item.gender}</StyledText>
        </FavouriteWindow>
      ))}
    </BlockWindow>
  );
}
