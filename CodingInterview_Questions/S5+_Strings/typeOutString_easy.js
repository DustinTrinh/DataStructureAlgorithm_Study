//https://leetcode.com/problems/backspace-string-compare/

//O(n) can be better
var backspaceCompare = function(s, t) {
    let newS = '';
    let newT = '';
    while(s.indexOf('#') !== -1){
        let i = s.indexOf('#');
        if(i === 0){
            newS = s.slice(i+1);
        } 
        else{
            newS = s.slice(0, i-1) + s.slice(i+1);
        }
        s = newS;
    }
    while(t.indexOf('#') !== -1){
        let i = t.indexOf('#');
        if(i === 0){
            newT = t.slice(i+1);
        } 
        else{
            newT = t.slice(0, i-1) + t.slice(i+1);
        }
        t = newT;
    }
    console.log("newS: " + s);
    console.log("newT: " + t);
    if(s === t){
        return true;
    }
    else{
        return false;
    }
};

var backspaceCompare2 = function(s, t) {
    let p1 = s.length - 1;
    let p2 = t.length - 1;
    while(p1 >= 0 || p2 >= 0){
        if(s[p1] === "#" || t[p2] === "#"){
            if(s[p1] === "#"){
                let backcount = 2;
                while(backcount > 0){
                    p1--;
                    backcount--;
                    if(s[p1] === "#"){
                        backcount+=2;
                    }
                }
            }
            if(t[p2] === "#"){
                let backcount = 2;
                while(backcount > 0){
                    p2--;
                    backcount--;
                    if(t[p2] === "#"){
                        backcount+=2;
                    }
                }
            }
        }
        else{
            if(s[p1] !== t[p2]){
                return false;
            }
            else{
                p1--;
                p2--;
            }
        }
    }
    return true;
};

let s = "xywrrmp", t = "xywrrmu#p";

console.log(backspaceCompare(s,t));