import {Route, Routes} from "react-router-dom"
import ConsultationForm from "../Page/ConsultationForm";

import { Home } from "../Page/Home";







const AllRoutes = () => {
  return(

<Routes>
  <Route  path="/consultation" element={<ConsultationForm/>}></Route>
  <Route  path="/" element={<Home/>}></Route>




  
  
</Routes>
  )
};

export default AllRoutes;