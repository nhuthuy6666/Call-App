import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "./pages/login";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Prepare from './pages/Prepare';
import VideoCall from './pages/VideoCall';
import EndCall from './pages/EndCall';
import AudioCall from './pages/AudioCall';
import PrepareAudio from './pages/PrepareAudio';
import History from './pages/History';
import Profile from './pages/Profile';
export default function App() {
  return (
    <main>
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Prepare' element={<Prepare />}/>
          <Route path='/VideoCall' element={<VideoCall />}/>
          <Route path='/EndCall' element={<EndCall />}/>
          <Route path='/PrepareAudio' element={<PrepareAudio />} />
          <Route path='/AudioCall' element={<AudioCall />} />
          <Route path='/History' element={<History />}/>
          <Route path='/Profile' element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  )
}