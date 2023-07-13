export const Card = ({ h, px, py, w, flexDir, justify, align, children }) => {
  return (
    <div
      className={`rounded-lg filter drop-shadow-md bg-components-color mt-5  ${h} 
      ${w || 'w-full' } flex ${flexDir || 'flex-col'} ${align || 'items-left'} 
      ${ justify || 'justify-center'} ${px || 'px-0'} ${py || 'py-0'} ` }
    >
      {children}
    </div>
  )
}
