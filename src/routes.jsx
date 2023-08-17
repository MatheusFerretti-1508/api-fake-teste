import { Routes, Route } from "react-router-dom";
import TesteApi, {} from './pages/api/teste'

const Rotas = () => {

    return (
        <Routes>
            <Route path="/" element={<TesteApi />} />
            <Route path="/api" element={<TesteApi />} />
        </Routes>
    )
}

export default Rotas