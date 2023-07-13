import React from "react"

const colorClasses = {
    purple: 'bg-purple-800/50',
    pink: 'bg-pink-800/50'
}

const TextCard = ({text, bgColor}) => {
    return (
        <p className={`p-10 rounded-xl ${colorClasses[bgColor]}`}>
            {text}
        </p>
    )
}

export default TextCard;