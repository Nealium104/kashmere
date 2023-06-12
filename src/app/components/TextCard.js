import React from "react"

const colorClasses = {
    purple: 'bg-purple-800',
    pink: 'bg-pink-800'
}

const TextCard = ({text, bgColor}) => {
    return (
        <p className={`p-10 rounded-xl ${colorClasses[bgColor]}/50`}>
            {text}
        </p>
    )
}

export default TextCard;