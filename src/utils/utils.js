const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  errorClass: 'popup__form-error_active',
  inputErrorClass: 'popup__input_state_error'
};

// ссылки на элементы формы редактирования профиля
const editButton = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup_type_edit');
const editForm = editPopup.querySelector('form[name="edit-profile"]');
const titleField = editPopup.querySelector('input[name="title"]');
const subtitleField = editPopup.querySelector('input[name="subtitle"]');

// ссылки на элементы формы добавления карточки
const addButton = document.querySelector('.profile__add-button');
const addPopup = document.querySelector('.popup_type_add');
const addForm = addPopup.querySelector('form[name="add-place"]');
const newPlaceField = addPopup.querySelector('input[name="placeName"]');
const newLinkField = addPopup.querySelector('input[name="placeLink"]');

// ссылки на элементы просмотрщика фото 
const viewerPopup = document.querySelector('.popup_type_viewer');
const popupPhoto = viewerPopup.querySelector('.popup__photo');

// ссфлки на элементы окна обновления аватара
const updateAvatarButton = document.querySelector('.profile__avatar-button');
const avatarPopup = document.querySelector('.popup_type_update-avatar');
const avatarForm = document.querySelector('form[name="update-avatar"]');
const avatarUrlField = document.querySelector('input[name="avatarLink"]');

// ссылки на элементы подтверждения удаления
const deletePopup = document.querySelector('.popup_type_delete');

// ссылки для текущих данных профиля
const currentProfileTitle = document.querySelector('.profile__title');
const currentProfileSubtitle = document.querySelector('.profile__subtitle');
const currentAvatar = document.querySelector('.profile__avatar');

// прочие глобальные ссылки
const currentUserId = '82c3226c62f91c52d5321c73';
const waitCaption = 'Сохранение...';
const submitCaption = 'Сохранить';

export {
  config,
  editButton,
  editPopup,
  editForm,
  titleField,
  subtitleField,
  addButton,
  addPopup,
  addForm,
  newPlaceField,
  newLinkField,
  viewerPopup,
  popupPhoto,
  currentProfileTitle,
  currentProfileSubtitle,
  currentAvatar,
  deletePopup,
  currentUserId,
  avatarPopup,
  updateAvatarButton,
  avatarForm,
  avatarUrlField,
  waitCaption,
  submitCaption
}