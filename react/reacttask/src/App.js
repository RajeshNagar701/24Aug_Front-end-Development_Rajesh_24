import Css1 from "./CSS/Css1"
import Css2 from "./CSS/Css2"
import Class_component from "./Component/Class_component"
import Func_component from "./Component/Func_component"
import Header from "./Header"
import Jsx from "./JSX/Jsx"
import Main_blog from "./Layout/Main_blog"
import Main_contact from "./Layout/Main_contact"
import Main_home from "./Layout/Main_home"
import MUI from "./MUI/MUI"
import Module_css from "./Module_css/Module_css"
import AMG from "./Props/Class/AMG"
import BMS from "./Props/Function/BMS"
import React_boostrap from "./React_boostrap/React_boostrap"
import Simple_bootstrap from "./React_boostrap/Simple_bootstrap"
import Sass_css from "./Sass_css/Sass_css"
import Class_state from "./State/Class/Class_state"
import Func_state from "./State/function/Func_state"
import Styled_component from "./Styled_component/Styled_component"
import Tailwind from "./Tailwind/Tailwind"

function App() {
  return (
    <div>
        {
            //<Header/>

            //component
            //<Func_component/>
            //<Class_component/>
            //<Jsx/>  
            
            // css
            //<Css1/>
            //<Css2/>
            //<Module_css/>

            // LAYOUT
            //<Main_home/>
            //<Main_contact/>
            //<Main_blog/>

            // Props
            //<BMS/>
            //<AMG/>

            //<Sass_css/>


            // state
            //<Func_state/>
            //<Class_state/>

            // Boostrap / React-Bootstrap / Custome styled-component
            //<Simple_bootstrap/>
            //<React_boostrap/>    // framwork 1
            //<Styled_component/>

            // Tailwind            // framwork 2
            //<Tailwind/>         

            // MUI        // framwork 3
            <MUI/>
        }

        
    
    </div>
  )
}

export default App