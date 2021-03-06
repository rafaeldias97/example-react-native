import SplashOne from '../pages/SpashScreen/SplashOne';
import SplashTwo from '../pages/SpashScreen/SplashTwo';

const useRoute = () => {
  return [
    {
      path: 'splash',
      title: 'splash 1',
      component: SplashTwo,
    },
    {
      path: 'splash2',
      title: 'splash 2',
      component: SplashOne,
    },
  ];
};

export default useRoute();
