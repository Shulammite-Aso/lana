import React from "react";
import AddLanguage from "./AddLanguage";

 const StartPage = () => {
  //#4db538
    return(
        <div className="card">
            <div className="text-center">
            <h3 className="text-2xl mb-3">Add and Select Language</h3>
            <p className="mb-3 text-gray-500">Add languages which you know <mark className="bg-mark border-solid border border-mkBorder">(Min 2)</mark> and <mark className="bg-mark border-solid border border-mkBorder">(Max 4)</mark> and select which is your native.</p>
            </div>
            <AddLanguage />
            <div className="mt-5">
            <button className="bg-primary text-white py-2 px-3.5 rounded">Let's make list of vocabulary</button>
            </div>
        </div>
      
    );
};

export default StartPage;
