import { userLogin } from '../redux/features/auth/authAction'
import store from '../redux/store'

export const handleLogin = (e,email,password,role)=>{
    console.log(email," ::",password,":::",role)
    e.preventDefault()
    console.log("second time",email," ::",password,":::",role)
    try {
        if(!role || !email || !password) {
            return alert("Please fill all fields")
        }
        console.log("third",email," ::",password,":::",role)
        store.dispatch(userLogin({email,password,role}))
    } catch (error) {
        console.log(error)
    }
}

export const handleRegister = (e,
    email,
    password,
    role,
    name,
    organizationName,
    hospitalName,
    website,
    address,
    phone)=>{
        try {
            console.log("Register =>",  e,
            email,
            password,
            role,
            name,
            organizationName,
            hospitalName,
            website,
            address,
            phone)
        } catch (error) {
            console.log(error)
        }
}