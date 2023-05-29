import MainHeader from "./components/MainHeader/MainHeader";
import AppInformation from "./components/AppInformation/AppInformation";
import Advantages from "./components/Advantages/Advantages";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";



const App = () => {
  return (
    <main>
      <MainHeader />
      <AppInformation />
      <Advantages />
      <Team />
      <Form />
      <Footer />
    </main>
  );
};

export default App;
