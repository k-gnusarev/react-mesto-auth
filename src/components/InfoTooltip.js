function InfoTooltip (props) {
  return (
    <div className={`popup popup_type_infotooltip ${props.isOpen ? 'popup_active' : ''}`}>
      <div className="popup__section">
        <img src={props.caption.iconPath} alt="" className="popup__icon" />
        <p className="popup__title-info">{props.caption.text}</p>
        <button type="button" className="popup__button-close" onClick={onClose} />
      </div>
    </div>
  );
}

export default InfoTooltip ;