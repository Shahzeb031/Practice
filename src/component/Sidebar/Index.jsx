import React from 'react';
function sidebar({onButtonClick}){
    return(
        <div className=" w-64 h-screen border border-black bg-gray-200 text-black flex justify-center pt-20">
     <nav  className="py-5" >
        <ul>
            <li>
                <a href="./Index.jsx">Homes</a>
            </li>
        </ul>
        <ul>
            <li>
                <a href="./Index.jsx">Employee</a>
            </li>
        </ul>
         </nav>
        </div>
    )
}
export default sidebar;
