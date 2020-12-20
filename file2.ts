/*
/// <reference path="file1.ts" />
console.log(AshokIT.sub,
    AshokIT.SambaIT.getWish());

    */
/*
    namespace AshokIT{
        export const sub:string = "ReactJS";
        export namespace SambaIT{
            export function getWish():string{
                return `Welcome to ${sub}`;
            };
        };
    };
*/



/*
    /// <reference path="file1.ts" />
    console.log( AshokIT.sub,
                AshokIT.SambaIT.getWish() );
*/


/// <reference path="file1.ts" />

let obj1:namespace1.interface1 = {
    var_five : "Hello_5"
};

console.log( namespace1.var_one,
             namespace1.fun_one(),
             namespace1.obj.var_three,
             new namespace1.class_one().var_four,
             obj1.var_five );
