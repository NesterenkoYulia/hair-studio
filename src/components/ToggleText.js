// import React, { useState, useRef, useEffect } from "react"

// const ToggleText = (props) => {
//   const [isOpen, setIsOpen] = useState(false)
//   const [textHeight, setTextHeight] = useState(0)
//   const textContainerRef = useRef(null)

//   useEffect(() => {
//     if (textContainerRef.current) {
//       setTextHeight(textContainerRef.current.scrollHeight)
//     }
//   }, [isOpen])

//   const toggleText = () => {
//     setIsOpen(!isOpen)
//   }

//   return (
//     <div>
//       <div
//         className={`text-container ${isOpen ? "open" : ""}`}
//         style={{ maxHeight: isOpen ? textHeight + "px" : "165px" }}
//         ref={textContainerRef}
//       >
//         <p className='text-slyder-overlay'>{props.slidesc}</p>
//       </div>
//       <button onClick={toggleText}>Читати далі</button>
//     </div>
//   )
// }

// export default ToggleText
import React, { useState, useRef, useEffect } from "react"

const ToggleText = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [textHeight, setTextHeight] = useState(0)
  const textContainerRef = useRef(null)

  useEffect(() => {
    if (textContainerRef.current) {
      setTextHeight(textContainerRef.current.scrollHeight)
    }
  }, [isOpen])

  const toggleText = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <div
        className={`text-container ${isOpen ? "open" : ""}`}
        style={{ maxHeight: isOpen ? textHeight + "px" : "162px" }}
        ref={textContainerRef}
      >
        <p className={`text-slyder-overlay ${isOpen ? "open" : ""}`}>
          {props.slidesc}
        </p>
      </div>
      <div className='btnblock'>
        <button className='btntoggle' onClick={toggleText}>
          {isOpen ? "Згорнути" : "Читати далі"}
        </button>
      </div>
    </div>
  )
}

export default ToggleText
