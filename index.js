
let result,classi;

let U = "metric";
        const radioInputs = document.getElementsByName("unit");

        for (const input of radioInputs) {
            input.addEventListener("change", () => {
                clear();
                U = input.value;
                console.log(`Selected unit: ${U}`);

                const heightInput = document.querySelector('input[name="height"]');
                const weightInput = document.querySelector('input[name="weight"]');
                if (U === "metric") {
                    heightInput.placeholder = "cm";
                    const heightInput2 = document.querySelector('input[placeholder="inches"]');
                    heightInput2.remove();
                    weightInput.placeholder = "kg";
                } 
                else {
                    heightInput.placeholder = "feet";
                    heightInput.insertAdjacentHTML('afterend', '<input type="number" name="height" placeholder="inches"/>');
                    weightInput.placeholder = "pounds";
                }
            });
        }

const fun = (h,w)=>{
        return (w/(h**2));
};
const calculateBtn = document.querySelector("#calculate");

const range = ()=>{
    if(result < 16){
        classi = "Severe Thinness";
        document.querySelector("body").style.backgroundColor = "rgb(255, 180, 175)";
        document.querySelector("#box").style.color = "Red";
    }
    else if(result >= 16 && result <17){
        classi = "Moderate Thinness";
        document.querySelector("#box").style.color = "Orange";
        document.querySelector("body").style.backgroundColor = "rgba(255, 195, 161, 0.822)";

    }
    
    else if(result >= 17 && result <18.5){
        classi = "Mild Thinness";
        document.querySelector("#box").style.color = "rgb(255, 162, 0)";
        document.querySelector("body").style.backgroundColor = "rgba(255, 252, 161, 0.822)";


    }
    
    else if(result >= 18.5 && result <25)
    {
        classi = "Normal";
        document.querySelector("#box").style.color = "Green";
        document.querySelector("body").style.backgroundColor = "rgba(161, 255, 175, 0.822)";

    }   
    
    else if(result >= 25 && result <30){
        classi = "Overweight";
        document.querySelector("#box").style.color = "rgb(255, 162, 0)";
        document.querySelector("body").style.backgroundColor = "rgba(255, 252, 161, 0.822)";

    }
    
    else if(result >= 30 && result <35){
        classi = "Obese Class I";
        document.querySelector("#box").style.color = "Red";
        document.querySelector("body").style.backgroundColor = "rgb(255, 180, 175)";


    }
    
    else if(result >= 35 && result <40){
        classi = "Obese Class II";
        document.querySelector("#box").style.color = "Red";
        document.querySelector("body").style.backgroundColor = "rgb(255, 180, 175)";

    }
    else{
        classi = "Obese Class III";
        document.querySelector("#box").style.color = "Red";
        document.querySelector("body").style.backgroundColor = "rgb(255, 180, 175)";


    }
    
    return classi;

};

calculateBtn.addEventListener('click',()=>{
    let height = document.getElementsByName("height")[0].value;
    const weight = document.getElementsByName("weight")[0].value;
    if(U === "US units")
    {
        const height2 = document.getElementsByName("height")[1].value;
        const w = weight / 2.20462;
        const h = (height * 12 + height2) * 0.0254;
        result = fun(h,w)*100;
    }
    else
        result = fun(height,weight)*10000;
    let Result = document.querySelector("#result");
    let Result2 = document.querySelector("#Result");
    const Classification = document.querySelector("#classi");
    if(isNaN(result))
        Result.textContent = "";
    else{
        Result2.style.display = "inline";
        Result.textContent = result.toFixed(2);
        Classification.textContent =`${range()}`;
    }
});



const clearBtn = document.querySelector("#clear");

const clear = () => {
    const height = document.getElementsByName("height");
    const weight = document.getElementsByName("weight")[0];
    const age = document.getElementsByName("age")[0];
    const genderRadioButtons = document.getElementsByName("gender");
    const Result = document.querySelector("#result");
    const Classification = document.querySelector("#classi");
    let Result2 = document.querySelector("#Result");


    Result.textContent = "";
    height.value = "";
    weight.value = "";
    age.value = "";
    Classification.textContent = "";
    Result2.style.display = "none";
    document.querySelector("body").style.backgroundColor = "azure";


    // Loop through the gender radio buttons and set checked to false for all
    for (const radioButton of genderRadioButtons) {
      radioButton.checked = false;
    }

    for(let i of height)
    {
        i.value = "";
    }
  };
  
clearBtn.addEventListener('click',clear);



