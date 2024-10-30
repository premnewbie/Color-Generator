import { useState } from "react"

const ColorGenerator = () => {
    const [type,setType] = useState('HEX');
    const [color,setColor] = useState('#000000')

    const hexCodes = [0,1,2,3,4,5,6,7,8,9,"A",'B','C','D','E','F']

    const hexHelper = (length) => {
        const code = Math.floor(Math.random()*length);
        return code;
    }

    const createHexColor = () => {
        if(type!=='HEX') setType('HEX')
        let colorCode ='#';
        for(var i=0;i<6;i++){
            colorCode += hexCodes[hexHelper(hexCodes.length)]
        }
        setColor(colorCode);
    }

    const RGBHelper = () => {
        const num = Math.floor(Math.random()*255);
        return num;
    }

    const createRGBColor = () => {
        if(type!=="RGB") setType('RGB')
        var arr = [];
        for(var i=0;i<3;i++){
            arr[i] = RGBHelper()
        }
        setColor(`RGB(${arr[0]},${arr[1]},${arr[2]})`)
    }

    const generateRandom = () => {
        if(type==="HEX"){
            createHexColor();
        } else{
            createRGBColor();
        }
    }

  return (
    <div style={{height:'100vh',width:'100vw',backgroundColor:color,alignContent:'center'}}>
        <button onClick={type!=='HEX'?createHexColor:null}>Create HEX color</button>
        <button onClick={type==='HEX'?createRGBColor:null}>Create RGB color</button>
        <button onClick={generateRandom}>Generate random color</button>
        <h1>{color}</h1>
    </div>
  )
}

export default ColorGenerator