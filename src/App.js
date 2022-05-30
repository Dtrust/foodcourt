import { Header, Top, Menu, About, Location, Footer } from './components';

import './sass/app.sass';

function App() {
    return (
        <div className="App">
            <Header />
            <Top />
            <Menu />
            <About />
            <Location />
            <Footer />
        </div>
    );
}

export default App;
