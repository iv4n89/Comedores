import entityApi from "@/api/entity.api";
import { Entity } from "@/interfaces/entity.interface";
import { useEffect, useState } from "react"


export default function AllEntities() {

    const [entities, setEntities] = useState([] as Entity[]);

    useEffect(() => {
        entityApi.getAllEntitys()
            .then(setEntities);
    })

    return (<>
        <pre>
            {
                JSON.stringify(entities, null, 2)
            }
        </pre>
    </>)
}