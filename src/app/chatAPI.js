import avatarPathWoman from "../assets/img/avatarForWoman.jpg";
import avatarPathMan from "../assets/img/avatarForMan.jpg";

function fetchUsers(){
    return fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
}

function sendLoginUser(user){
    user.id = 56;
    user.imgPath = (user.gender === "man") ? avatarPathMan : avatarPathWoman;
    const serverResponse = JSON.stringify(user);
    return new Promise(resolve => {
               setTimeout(() => resolve(serverResponse),1000)
    });
}


function fetchLoginUser(user){
    localStorage.setItem("user", user);
    return JSON.parse(user);
}

export {fetchUsers,
        sendLoginUser,
        fetchLoginUser
}