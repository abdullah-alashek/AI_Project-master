import ActionButton from './ActionButton/ActionButton'
import './MessageActionsStyle.css'
import Icon from './../../../../assets/chevron-down-tiny.svg'
import ButtonDropdown from './ActionButton/ButtonDropdown/ButtonDropdown'

const MessageActions = ({displayButton}) => {
  return (
    <div className= {!displayButton? 'aj-message-actions none' : 'aj-message-actions'}>
      <ActionButton text="Regenerate response"/>
      <ActionButton text="Modify" icon={Icon} dropdown={<ButtonDropdown />}/>
    </div>
  )
}

export default MessageActions