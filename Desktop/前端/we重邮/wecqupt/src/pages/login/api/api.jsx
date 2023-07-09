import axios from "axios";

export function login(username,password) {
    const formData = new FormData();
    formData.append("cqupt_id", username);
    formData.append("password", password);
    axios({
        method: "post",
        url: "/dev/api/login",
        data: formData,
        headers: {
            "Content-Type": "multipart/form-data",
            "traefik": "user",
        },
    });
}