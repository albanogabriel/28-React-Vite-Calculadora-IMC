import { useState } from "react";
import styles from './Calc.module.css';

const Calc = () => {
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [IMC, setIMC] = useState('');

    function calculateIMC() {
        const calcIMC = weight / (height ** 2)
        setIMC(calcIMC)
    }

    // function renderIMC () {
        
    //     if (IMC.length == 0) {
    //         return('')
    //     } else if (IMC > 0 && IMC <= 18.5) {
    //         return(<p>Seu IMC é de {IMC}, ENTRE 18,5 E 24,9, classificado como: Normal e grau 0 </p>)
    //     } else if (IMC > 18.5 && IMC <= 25){
    //         return (<p>Seu IMC é de {IMC}, ENTRE 18,5 E 24,9, classificado como: Normal e grau 0 </p>)
    //     } else if (IMC > 25.0 && IMC <= 30) {
    //         (<p>Seu IMC é de {IMC}, ENTRE 25,0 E 29,9, classificado como: Sobrepeso e grau 1</p>)
    //     } else if (IMC > 30 && IMC <= 40) {
    //         return (<p>Seu IMC é de {IMC}, ENTRE 30,0 E 39,9, classificado como: Obesidade e grau 2 </p>)
    //     } else if (IMC > 40 > 250) {
    //         return (<p>Seu IMC é de {IMC}, Maior que 40, classificado como: Obesidade e grau 3 </p>)
    //     } else {
    //         return (<p>Você é um monstro</p>)
    //     }
    // }

    return (
        <div className={styles.card}>
            <input className={styles.button} onChange={(event) => setHeight(event.target.value)} type="text" placeholder="height ex: 1.75" />
            <input className={styles.button} onChange={(event) => setWeight(event.target.value)} type="text" placeholder="weight ex: 90" />
            <button className={styles.buttonCalculate} type="submit" onClick={calculateIMC}>Calculate</button>
            
            {(IMC.length == 0) ? '' :
            (IMC > 0 && IMC <= 18.5) ? (<p>Seu IMC é de {IMC}, MENOR QUE 18,5, classificado como: Magreza e grau 0 </p>) :
            (IMC > 18.5 && IMC <= 25) ? (<p>Seu IMC é de {IMC}, ENTRE 18,5 E 24,9, classificado como: Normal e grau 0 </p>) :
            (IMC > 25.0 && IMC <= 30) ? (<p>Seu IMC é de {IMC}, ENTRE 25,0 E 29,9, classificado como: Sobrepeso e grau 1</p>) : 
            (IMC > 30 && IMC <= 40) ? (<p>Seu IMC é de {IMC}, ENTRE 30,0 E 39,9, classificado como: Obesidade e grau 2 </p>) :
            (IMC > 40 > 250) ? (<p>Seu IMC é de {IMC}, Maior que 40, classificado como: Obesidade e grau 3 </p>) : (<p></p>)
            }

            {/* {IMC && (
                <p>
                    Seu IMC é de {IMC},
                    {IMC < 18.5 && " MENOR QUE 18,5, classificado como: Magreza e grau 0"}
                    {(IMC >= 18.5 && IMC <= 24.9) && " ENTRE 18,5 E 24,9, classificado como: Normal e grau 0"}
                    {(IMC > 24.9 && IMC <= 29.9) && " ENTRE 25,0 E 29,9, classificado como: Sobrepeso e grau 1"}
                    {(IMC > 29.9 && IMC <= 39.9) && " ENTRE 30,0 E 39,9, classificado como: Obesidade e grau 2"}
                    {(IMC > 39.9 && IMC <= 250) && " Maior que 40, classificado como: Obesidade e grau 3"}
                </p>
            )} */}
            
        </div>
    );
};

export default Calc;
