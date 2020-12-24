/// <reference path="file1.ts">
console.log(AshokIT.sub, AshokIT.SambaIT.getWish());
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
var namespace1;
(function (namespace1) {
    namespace1.var_one = "Hello_1";
    function fun_one() {
        return "Hello_2";
    }
    namespace1.fun_one = fun_one;
    ;
    namespace1.obj = {
        var_three: "Hello_3"
    };
    var class_one = /** @class */ (function () {
        function class_one() {
            this.var_four = "Hello_4";
        }
        return class_one;
    }());
    namespace1.class_one = class_one;
    ;
    ;
})(namespace1 || (namespace1 = {}));
;
/// <reference path="file1.ts" />
console.log(AshokIT.sub, AshokIT.SambaIT.getWish());
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
var namespace1;
(function (namespace1) {
    namespace1.var_one = "Hello_1";
    function fun_one() {
        return "Hello_2";
    }
    namespace1.fun_one = fun_one;
    ;
    namespace1.obj = {
        var_three: "Hello_3"
    };
    var class_one = /** @class */ (function () {
        function class_one() {
            this.var_four = "Hello_4";
        }
        return class_one;
    }());
    namespace1.class_one = class_one;
    ;
    ;
})(namespace1 || (namespace1 = {}));
;
