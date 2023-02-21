import React from "react"
import Checkbox from "./Components/Checkbox"

export default function Form() {
    const [counter, setCounter] = React.useState(0);
    const [formData, setFormData] = React.useState(
        [
            {
                id: 0,
                title: "python",
                python: true,
            },
            {
                id: 1,
                title: "javascript",
                javascript: false,
            }
        ]
    )


    function handleChange(event, id) {
        setFormData(prevFormData => {
            const newData = []
            for (var i=0; i<prevFormData.length; i++) {
                if (prevFormData[i].id === id) {
                    const preData = prevFormData[i]
                    const titleName = preData.title
                    const prevVal = preData[titleName]
                    const newNode = {
                        ...preData,
                        [titleName]: !prevVal
                    }
                    newData.push(newNode)
                } else {
                    newData.push(prevFormData[i])
                }
            }
            console.log(newData)
            return newData
        })
    }

    return (
        <form>
            <Checkbox handleChange={handleChange} formData={formData} />
            <br />
            <br />
            <p>Counter: {counter}</p>
        </form>
    )
}