import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import CharacterList from './components/CharacterList/CharacterList';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <CharacterList />
    </Provider>
  );
}
