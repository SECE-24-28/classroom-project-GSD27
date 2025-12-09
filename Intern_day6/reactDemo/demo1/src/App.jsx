import Display from "./summa1"
import Display1 from "./summa2"


function App() {
  var name = "Raghul !!"
  var num = 18
  var arr={name:'summa' ,gender:'nope'}
  var arrnum = [12,13,14,15]
  return (
   <>

   <h1>This is from App()</h1>
   {/* passing name , number and array values == summa1.jsx */}
   <Display name = {name} num={num} obj={arr} arrnum = {arrnum}/>

<h6>-----------------------------------------------------------------------------------------
  -----------------------------------------------------------------------------------------
</h6>

   {/* changing name from button  == summa2.jsx*/}

    <Display1/>

   </>
  )
}

export default App
