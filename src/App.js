import "./App.css";

import About from "./components/About/index";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

const App = () => {
  const sections = [About, Projects, Blog, Footer];
  return sections.map((Section) => <Section />);
};

export default App;
