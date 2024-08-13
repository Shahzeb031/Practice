import React from "react";
import {FaSearch} from "react-iconFa";


function searchbar (){
return(
    <div className="flex items-center justify center py-4 ">

<div className=" relative flex items-center">
    <FaSearch
    className="w-5 h-5 absolute ml-3 pointer-events-none"/>
</div>
<input
className="pr-3 pl-10 border border-none font-semibold text-gray-600 placeholder-gray-500 ring-2 ring-gray-400 flex justify between py-2 px-2 h-200 rounded "
placeholder="Type here to search"                                                                                               
    />
    </div>
   )
} 

export default searchbar;