const encrypt = () => {
    let encryptedText = "";
    const textToEncrypt = document.querySelector(".input-area").value;

    if(!validation(textToEncrypt)) {
        if(textToEncrypt !== "")
        {
            hideElement([".ws-image", ".ws-info", ".ws-message"])
            for(let i = 0; i < textToEncrypt.length; i++) {
                switch(textToEncrypt[i]) {
                    case "e": 
                        encryptedText += "enter";
                        break;
                    case "i": 
                        encryptedText += "imes";
                        break;
                    case "a": 
                        encryptedText += "ai";
                        break;
                    case "o":
                        encryptedText += "ober";
                        break;
                    case "u":
                        encryptedText += "ufat";
                        break;
                    default: 
                        encryptedText += textToEncrypt[i];
                        break;
                }
            } 
            document.querySelector(".text-display").textContent = encryptedText;
            document.querySelector(".white-square").setAttribute("style","text-align: left");
            document.querySelector(".text-display").setAttribute("style","display: block");
            document.querySelector(".white-square").setAttribute("overflow", "auto");
            document.querySelector(".text-display").setAttribute("overflow", "auto");
            document.querySelector(".copy").setAttribute("style", "display: block");
        }

    } else {
        alert("El texto continene letras mayúsculas o acéntos. Revise el texto y vuelv a dar click en la opción que desea.");
    }
}

const hideElement = (elementClassName) => {
    for(let j = 0; j < elementClassName.length; j++) {
        document.querySelector(elementClassName[j]).setAttribute("style", "display:none");
    }
}

const decrypt = () => {
    let decryptedText = "";
    const textToDecrypt = document.querySelector(".input-area").value;
    if(textToDecrypt !== "")
    {
        if(!validation(textToDecrypt)) {
            hideElement([".ws-image", ".ws-info", ".ws-message"])
            const enterRegex = /(enter)/g;
            const imesRegex = /(imes)/g;
            const aiRegex =  /(ai)/g;
            const oberRegex = /(ober)/g;
            const ufatRegex = /(ufat)/g;
            decryptedText = textToDecrypt.replace(enterRegex, "e").replace(imesRegex, "i").replace(aiRegex, "a").replace(oberRegex, "o").replace(ufatRegex, "u");
            document.querySelector(".text-display").textContent = decryptedText;
            document.querySelector(".white-square").setAttribute("overflow", "auto")
            document.querySelector(".white-square").setAttribute("overflow", "auto")
            document.querySelector(".text-display").setAttribute("style","display: block")
            document.querySelector(".copy").setAttribute("style", "display: block");
        }

    } else {
        alert("El texto continene letras mayúsculas o acéntos. Revise el texto y vuelv a dar click en la opción que desea.");
    }

}

const validation = (text) => {
    return /[A-Z]/.test(text) || /[\u00C0-\u017F]+/.test(text);
}

const copyContent = async () => {
    const copiedText = document.querySelector(".text-display").textContent;
    try {
        await navigator.clipboard.write(copiedText);
        await navigator.clipboard.writeText(copiedText);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
    document.querySelector(".copy-alert").setAttribute("style", "display: block; text-align: center");
    setTimeout( () => {
        document.querySelector(".copy-alert").setAttribute("style", "display: none");
    }, 5000)
}

const clear = () => {
    document.querySelector(".input-area").textContent = "";
} 