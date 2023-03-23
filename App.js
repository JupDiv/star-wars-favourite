import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import store from './src/redux/store/store';
import CharacterList from './src/components/CharacterList/CharacterList';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <CharacterList />
    </Provider>
  );
}
