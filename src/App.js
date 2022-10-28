import Header from './pages/Header'
import Home from './pages/Home'
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import About from "./pages/About";
import {Route, Routes} from 'react-router-dom'

function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route exact path="/О-нас.html" element={<About />} />
                <Route exact path="/Контакты.html" element={<Contact />} />
                <Route exact path="/Главная.html" element={<Home/>} />
                <Route exact path="/" element={<Home />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App;
