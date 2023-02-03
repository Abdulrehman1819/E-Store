import Cookie from "js-cookie";
const SetCookie=(cookiename,userin)=>{
Cookie.set(cookiename,userin,{
    expires:1,
    secure:true,
    sameSite:'strict',
    path:'/'
})
};
export default SetCookie