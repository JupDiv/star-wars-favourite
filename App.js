import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import MainPage from './components/MainPage/MainPage';

export default function App() {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}
