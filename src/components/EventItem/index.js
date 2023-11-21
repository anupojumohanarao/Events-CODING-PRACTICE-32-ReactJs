// Write your code here
import './index.css'

const EventItem = props => {
  const {mainEventItemDetails, setActiveEventId, isActive} = props
  const {imageUrl, name, location, id} = mainEventItemDetails
  const eventImagesClass = isActive ? 'event-image active' : 'event-image'

  const onClickEvent = () => {
    setActiveEventId(id)
  }

  return (
    <li className="main-eventItem-section">
      <button type="button" className="buttons" onClick={onClickEvent}>
        <img src={imageUrl} className={eventImagesClass} alt="event" />
      </button>
      <p className="event-para">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
