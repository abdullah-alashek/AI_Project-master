import chevronright from '../assets/chevron-right.svg'
import padlouk from '../assets/padlock.svg'
import chevrondown from '../assets/chevron-down.svg'
import globe from '../assets/Globe-02.svg'

////////////////////Router Path//////////////////////////////////
export const ROUTES={
    CHAT :'chat'
}
/////////////////////////////////////////////////////////////////

////////////////////////////sidebar info///////////////////////////
export const ChatListInfo=[
    {
        icon:chevronright,
        title:"Information",
        active:true
    },
    {
        icon:chevrondown,
        title:"Public channels",
        active:false
    },
    {
        icon:padlouk,
        title:"Top Secret",
        active:false
    },
    {
        icon:globe,
        title:"Feedback",
        active:false
},
]
///////////////////////////////////////
export const ChatListBottom=[
    {
        icon:globe,
        title:"User interface",
        active:false
    },
    {
        icon:globe,
        title:"User experience",
        active:true
    },
    {
        icon:chevronright,
        title:"Private channels",
        active:false
    },
]
/////////////////////////////////////////////////////////////////////////