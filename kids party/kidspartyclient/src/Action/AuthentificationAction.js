import Axios from "axios";

export function Athentificate(userdata) {
    console.log(userdata)
    return (dispatch) =>
        Axios.post("http://localhost:8080/user/authentification", userdata).then(
            (res) => {
                console.log("les données passer");
            }
        );
}
