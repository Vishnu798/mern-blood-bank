export const handleLogin = (e,email,password,role)=>{
    e.preventDefault()
    try {
        if(!role || !email || !password) return alert("Please fill all fields")
            console.log("login",e,email,password,role)
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