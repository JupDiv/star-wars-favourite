import {
  BlockWindow,
  FavouriteWindow,
  StyledText,
  StyledCurrentFans,
  StyledResetButtom,
  CountWindow,
} from './FavouriteWindows.styled';
import { useAppSelector, useAppDispatch } from '../../redux/hooks/hooks';
import { resetValueButton } from '../../redux/reducers/favouritePersonSlice';

type genderArrayType = { id: number; gender: string; count: number }[];
type FavouriteWindowsProps = {
  setIsToggle: (value: boolean) => void;
};

export default function FavouriteWindows({
  setIsToggle,
}: FavouriteWindowsProps): JSX.Element {
  const dispatch = useAppDispatch();
  const female = useAppSelector((state) => state.favouritePerson.female);
  const male = useAppSelector((state) => state.favouritePerson.male);
  const other = useAppSelector((state) => state.favouritePerson.other);

  const genderArray: genderArrayType = [
    { id: 1, gender: 'male', count: male.length },
    { id: 2, gender: 'female', count: female.length },
    { id: 3, gender: 'other', count: other.length },
  ];

  function resetValue() {
    setIsToggle(false);
    dispatch(resetValueButton([]));
  }
  return (
    <BlockWindow>
      <CountWindow>
        {genderArray.map((item) => (
          <FavouriteWindow key={item.id}>
            <StyledCurrentFans>{item.count}</StyledCurrentFans>
            <StyledText>{item.gender}</StyledText>
          </FavouriteWindow>
        ))}
      </CountWindow>
      <StyledResetButtom title="Reset" onPress={() => resetValue()} />
    </BlockWindow>
  );
}
