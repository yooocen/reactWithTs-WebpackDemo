import * as React from "react";
import './Hello.less';

// Function.prototype.constuctor = function(args){
//     var newObject = Object.create(this.prototype);//相当于new
//     this.apply(newObject,args);
//     return newObject;
// }

// var f = function(){
//     for(var i =0;i<arguments.length;i++){
//         this['property'+i] = arguments[i];
//     }
// }
// var array = ["a",1,"nihao"];
// var object = f.constuctor(array);

// console.log(object.property2);

// export interface HelloProps { compiler: string; framework: string; }
export default class Hello extends React.Component{
    componentWillMount(){
        let a = 100;
        console.log(a);
    }
    render(){
        return(
            <div id="hello">
                {/* <h4>Hello from {this.props.compiler} and {this.props.framework}!</h4> */}
                <div className="p1">
                    第一
                </div>
                <div className="p2">
                    第二
                </div>
                <div className="p3">
                    第9
                </div>
            </div>

        )
    }
}

// export default class Hello extends React.Component{
//     componentWillMount(){
//         let a = 100;
//         console.log(a);
//     }
//     render(){
//         return (
//             <div className='header'>
//                 <div className="header_content">
//                 <div className='logo'>
//                     <a href='#'>新浪</a>
//                 </div>
//                 <div className='search'>
//                     <input type='text' className="search_input"/>
//                     <input type='button' className="button"/>
//                 </div>
//                 <ul className='nav'>
//                     <li><a href='#'>首页</a></li>
//                 </ul>
//                 </div>
//             </div>
//         )
//     }
// }