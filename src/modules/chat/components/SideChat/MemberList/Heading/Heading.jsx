import './Heading.css'
const Heading = ({ TypeList,NumberUser}) => {
  return (
    <div className="sn-heading">
        <p className="sn-type-list">{TypeList}</p>
        <p className="sn-member-user">{NumberUser}</p>

    </div>
  )
}

export default Heading