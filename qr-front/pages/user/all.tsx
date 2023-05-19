import userApi from "@/api/user.api";
import { User } from "@/interfaces/user.interface";
import { useEffect, useState } from "react";


export default function AllUsers() {

    const [users, setUsers] = useState([] as User[]);
    useEffect(() => {
        userApi.getAllUsers().then(setUsers);
    }, []);

    return (
        <div>
            <pre>
                {
                    JSON.stringify(users, null, 2)
                }
            </pre>
        </div>
    )

}