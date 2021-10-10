import React, {useState, useEffect} from 'react';
import "./bot.css";

const Bot = () => {
    const [isQuesAsked, setQuesAsked] = useState(false);
    const answer=[1, 2];
    const list =[
        "How many tags with same id can be added in HTML?",
        "Which company developed Javascript?"
    ];
    const options = [["0", "1", "2", "3"], ["Microsoft", "Adobe", "Netscape", "IBM"]];
    
    const [i, setI] = useState(list.length+1);
    useEffect(() => {
        if(i===list.length+1)
            setTimeout(()=>{
                setI(0);
            }, 1000);
        if(i<list.length&&!isQuesAsked){
            if(i===0){
                let div = document.createElement("div");
                div.className="question";
                div.innerHTML="Choose the correct option: ";
                document.querySelector(".chat").append(div);
            }
            setQuesAsked(true);
            let h3=document.createElement("h3");
            h3.innerHTML = list[i];
            document.querySelector(".chat").appendChild(h3);
            let j=0;
            let div = document.createElement("div");
            div.className="options"
            while(j<options[i].length){
                let span = document.createElement("span");
                span.innerHTML = options[i][j];
                span.id = i+"-"+j; 
                span.addEventListener("click", handleClick);
                div.append(span);
                j++;
            }
            document.querySelector(".chat").append(div);
            setI(i+1);
        }
    })

    function handleClick(e){
        console.log(e);
        let id = e.target.id;
        let ros = id.split("-");

        if(options[(Number)(ros[0])][(Number)(ros[1])]===options[(Number)(ros[0])][answer[(Number)(ros[0])]]){
            let div = document.createElement("div");
            div.innerHTML="Correct Answer";
            div.className="right";
            document.querySelector(".chat").append(div);
        }
        else{
            let div = document.createElement("div");
            div.innerHTML="Wrong Answer";
            div.className="right";
            document.querySelector(".chat").append(div);
            let newDiv = document.createElement("div");
            newDiv.className="right";
            newDiv.innerHTML="Answer: "+options[(Number)(ros[0])][answer[(Number)(ros[0])]];
            document.querySelector(".chat").append(newDiv);
        }

        for(let j=0;j<options[(Number)(ros[0])].length;j++){
            let str = ros[0]+"-"+j;
            let span = document.getElementById(str);
            console.log(span.removeEventListener)
            if(span.removeEventListener)
                span.removeEventListener("click", handleClick, false);
            span.classList.add("inactive");
        }
        setTimeout(()=>{
            setQuesAsked(false);
        }, 1000);
    }

    return ( 
    <div className="container">
        <div className="section1"></div>
        <div className="section2">
            <div className="chat"></div>
            <div className="message">
                <input type="text" placeholder="Type in your message"/>
                <button>Send</button>
            </div>
        </div>
    </div> 
    );
}
 
export default Bot;