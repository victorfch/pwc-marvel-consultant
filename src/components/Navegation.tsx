import { Route, Routes } from "react-router-dom";
import { Characters } from "../pages/Characters";
import { Series } from "../pages/Series";
import { Comics } from "../pages/Comics";

export const Navigation = () => {
    return (
		<div style={{minHeight: "78vh"}}>
			<Routes>
				<Route path='/' element={<Characters />} />
				<Route path='/characters' element={<Characters />} />
				<Route path='/series' element={<Series />} />
				<Route path='/comics' element={<Comics />} />
				{/*<Route path='/error' element={< />} />*/}
			</Routes>
		</div>
  	)
}