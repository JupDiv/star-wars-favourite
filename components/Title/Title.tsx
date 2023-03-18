import { useState } from 'react';
import { TitleStyle, ButtonStyle } from './Titile.style';
import PersonData from '../PersonData/PersonData';

type ItemProps = {
  name: string;
};

const Title: React.FC<ItemProps> = ({ name }: ItemProps): JSX.Element => {
  const [status, setStatus] = useState<boolean>(false);
  return (
    <TitleStyle>
      <ButtonStyle
        color="#f194ff"
        onPress={() => setStatus(!status)}
        title={name}
      />
      {status ? <PersonData name={name} /> : null}
    </TitleStyle>
  );
};

export default Title;
