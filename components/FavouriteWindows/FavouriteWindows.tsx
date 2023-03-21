import {
  BlockWindow,
  FavouriteWindow,
  StyledText,
  StyledCurrentFans,
  StyledResetButtom,
} from './FavouriteWindows.styled';
import { useAppSelector, useAppDispatch } from '../../redux/hooks/hooks';
import { resetButton } from '../../redux/reducers/favouritePersonSlice';

type genderArrayType = { id: number; gender: string; count: number }[];

export default function FavouriteWindows() {
  const dispatch = useAppDispatch();
  const female = useAppSelector((state) => state.favouritePerson.female);
  const male = useAppSelector((state) => state.favouritePerson.male);
  const other = useAppSelector((state) => state.favouritePerson.other);

  const genderArray: genderArrayType = [
    { id: 1, gender: 'male', count: male.length },
    { id: 2, gender: 'female', count: female.length },
    { id: 3, gender: 'other', count: other.length },
  ];
  const emptyArray = [];
  return (
    <BlockWindow>
      <StyledResetButtom
        title="Reset"
        onPress={() => dispatch(resetButton())}
      />
      {genderArray.map((item) => (
        <FavouriteWindow key={item.id}>
          <StyledCurrentFans>{item.count}</StyledCurrentFans>
          <StyledText>{item.gender}</StyledText>
        </FavouriteWindow>
      ))}
    </BlockWindow>
  );
}
