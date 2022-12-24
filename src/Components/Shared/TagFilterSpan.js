const TagFilterSpan = ({ className, onClick, text, key, tag1, tag2, tag3 }) => {
    return (
        <span
            className={`${className} 
           relative my-1 bg-lightBeige font-medium text-heavyTeal py-1 text-sm px-3   rounded-full 
           before:absolute before:top-0 before:left-0 before:rounded-full before:-z-10
           transition-transform 
           before:m-auto before:w-full before:h-full before:bg-heavyTeal
           before:transform before:scale-x-0 before:transition-transform 
           hover:before:scale-x-100 
           `}
            onClick={onClick}
            key={key}
        >
            {text}
            {tag1}{tag2}{tag3}
        </span>
    )
}
export default TagFilterSpan