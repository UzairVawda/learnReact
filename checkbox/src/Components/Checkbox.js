import React from "react"

export default function Checkbox(props) {
    const checkboxElements = props.formData.map(elem => {
        console.log(elem)
        return (
            <div key={elem.id}>
                <input 
                    type="checkbox" 
                    id={elem.id} 
                    checked={elem[elem.title]}
                    onChange={(handleChange) => props.handleChange(handleChange, elem.id)}
                    name={elem.title}
                />
                <label htmlFor={elem.title}>{elem.title}</label>
            </div>
        )
    })
    
    return (
        <div>
            {checkboxElements}
        </div>
    )
}