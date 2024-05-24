export const login = async (req, res) => {
    try{
        const {fullName, userName, password, confirmPassword, gender} = req.body;
    }catch(error){
        
    }
    console.log("loginUser");
}

export const logout = (req, res) => {
    console.log("logoutUser");
}

export const signup = (req, res) => {
    console.log("signupUser");
}