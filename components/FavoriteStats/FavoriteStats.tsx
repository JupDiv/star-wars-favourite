import { useAppSelector, useAppDispatch } from '../../redux/hooks/hooks';
import { resetValueButton } from '../../redux/slices/favoriteCharactersSlice';
import {
  HeaderContainer,
  HeaderTitle,
  HeaderCountBlock,
  HeaderCountTab,
  HeaderResetButton,
  HeaderButtonText,
} from './FavoriteStats.styles';
import { colors } from '../../styles/theme';

type genderArrayType = { id: number; gender: string; count: number }[];
type FavouriteWindowsProps = {
  setIsToggle: (value: boolean) => void;
  isToggle: boolean;
};

export default function FavoriteStats({
  setIsToggle,
  isToggle,
}: FavouriteWindowsProps): JSX.Element {
  const dispatch = useAppDispatch();
  const female = useAppSelector((state) => state.favouriteCharaster.female);
  const male = useAppSelector((state) => state.favouriteCharaster.male);
  const other = useAppSelector((state) => state.favouriteCharaster.other);

  const genderArray: genderArrayType = [
    { id: 1, gender: 'male', count: male.length },
    { id: 2, gender: 'female', count: female.length },
    { id: 3, gender: 'other', count: other.length },
  ];

  function resetValue() {
    setIsToggle(!isToggle);
    dispatch(resetValueButton([]));
  }
  return (
    <HeaderContainer>
      <HeaderCountTab>
        {genderArray.map((item) => (
          <HeaderCountBlock key={item.id}>
            <HeaderTitle>{item.count}</HeaderTitle>
            <HeaderTitle>{item.gender}</HeaderTitle>
          </HeaderCountBlock>
        ))}
      </HeaderCountTab>
      <HeaderResetButton color={colors.primary} onPress={() => resetValue()}>
        <HeaderButtonText>Reset</HeaderButtonText>
      </HeaderResetButton>
    </HeaderContainer>
  );
}
