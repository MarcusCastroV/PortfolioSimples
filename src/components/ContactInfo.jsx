export const ContactInfo = ( {icon, text} ) => {
  return(
    <div className={`flex flex-row align-left ml-10 gap-6 my-3`}>
      {icon}
      {text}
    </div>
  )
}