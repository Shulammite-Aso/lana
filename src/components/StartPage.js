import React from "react";
import AddLanguage from "./AddLanguage";

 const StartPage = () => {
  //#4db538
    return(
        <div className="card">
            <div className="text-center">
            <h3 className="text-2xl">Add and Select Language</h3>
            <p>Add languages which you know <mark>(Min 2)</mark> and <mark>(Max 4)</mark> and select which is your native.</p>
            </div>
            <AddLanguage />
            <div>
            <button>Let's make list of vocabulary</button>
            </div>
        </div>
      
    );
};

export default StartPage;
