import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    appendPicture,
    closeAddNewItemCard, delPicture,
    getCoordinates,
    saveItem, setComment,
    setConstructionTrash,
    setGlassTrash,
    setHouseholdTrash,
    setMetalTrash,
    setOtherTrash,
    setPaperTrash, setPicture,
    setPlasticTrash,
    setViolationType
} from "../../../BLL/store/action_creators/placemark";
import './itemCard.module.css';


class EditItemCard extends Component {
    render() {
        return (
            <section id=""
                     className="modal">
                <form className="form
                         form--edit">
                    <div className="form-header">
                        <h3 className="modal__title">
                            Редактирование
                            <br />заявки
                        </h3>

                        <a href="#"
                           rel="nofollow"
                           className="link
                              link--close">
                            <i className="material-icons">
                                close
                            </i>
                        </a>
                    </div>

                    <div className="form-information">
                        <p className="form-information__date">
                            Заявка от 07.07.2019
                        </p>

                        <button className="button
                                   button--delete">
                            Удалить
                        </button>
                    </div>

                    <div className="input">
                        <input type="text"
                               className="input__field"
                               id="input-location-demonstration"
                               required />

                            <span className="input__bar"></span>

                            <label className="input__label">
                                Введите адрес
                            </label>

                            <i className="material-icons
                              location__icon">
                                location_on
                            </i>
                    </div>

                    <div className="select">
                        <select className="select__field">
                            <option value="1"
                                    className="select__option">
                                Стихийная свалка
                            </option>

                            <option value="2"
                                    className="select__option">
                                Option 2
                            </option>

                            <option value="3"
                                    className="select__option">
                                Option 3
                            </option>
                        </select>

                        <span className="select__bar"></span>

                        <label className="select__label">
                            Выберите нарушения
                        </label>

                        <i className="material-icons
                              select__icon">
                            keyboard_arrow_down
                        </i>
                    </div>

                    <h3 className="modal__sub-title">
                        Выберите вид мусора:
                    </h3>

                    <div className="checkbox">
                        <input type="checkbox"
                               name=""
                               value=""
                               id="checkbox-id-1"
                               className="checkbox__field" />

                            <label htmlFor="checkbox-id-1"
                                   className="checkbox__label">
                                Пластик
                            </label>
                    </div>

                    <div className="checkbox">
                        <input type="checkbox"
                               name=""
                               value=""
                               id="checkbox-id-2"
                               className="checkbox__field" />

                            <label htmlFor="checkbox-id-2"
                                   className="checkbox__label">
                                Металл
                            </label>
                    </div>

                    <div className="checkbox">
                        <input type="checkbox"
                               name=""
                               value=""
                               id="checkbox-id-3"
                               className="checkbox__field" />

                            <label htmlFor="checkbox-id-3"
                                   className="checkbox__label">
                                Стекло
                            </label>
                    </div>

                    <div className="checkbox">
                        <input type="checkbox"
                               name=""
                               value=""
                               id="checkbox-id-4"
                               className="checkbox__field" />

                            <label htmlFor="checkbox-id-4"
                                   className="checkbox__label">
                                Бумага
                            </label>
                    </div>

                    <div className="checkbox">
                        <input type="checkbox"
                               name=""
                               value=""
                               id="checkbox-id-5"
                               className="checkbox__field" />

                            <label htmlFor="checkbox-id-5"
                                   className="checkbox__label">
                                Бытовые отходы
                            </label>
                    </div>

                    <div className="checkbox">
                        <input type="checkbox"
                               name=""
                               value=""
                               id="checkbox-id-6"
                               className="checkbox__field" />

                            <label htmlFor="checkbox-id-6"
                                   className="checkbox__label">
                                Строительный мусор
                            </label>
                    </div>

                    <div className="checkbox">
                        <input type="checkbox"
                               name=""
                               value=""
                               id="checkbox-id-7"
                               className="checkbox__field" />

                            <label htmlFor="checkbox-id-7"
                                   className="checkbox__label">
                                Прочее
                            </label>
                    </div>

                    <div className="textarea">
                    <textarea name=""
                              id=""
                              className="textarea__field"
                              placeholder="Введите комментарий"></textarea>

                        <span className="textarea__bar"></span>
                    </div>

                    <div className="form-control">
                        <div>
                            <div className="input">
                                <input type="text"
                                       className="input__field"
                                       required />

                                    <span className="input__bar"></span>

                                    <label className="input__label">
                                        Объем
                                    </label>

                                    <i className="text__icon">
                                        м3
                                    </i>
                            </div>
                        </div>
                        <div>
                            <div className="input">
                                <input type="text"
                                       className="input__field"
                                       required />

                                    <span className="input__bar"></span>

                                    <label className="input__label">
                                        Площадь
                                    </label>

                                    <i className="text__icon">
                                        м2
                                    </i>
                            </div>
                        </div>
                    </div>

                    <h3 className="modal__sub-title">
                        Выберите класс опасности:
                    </h3>

                    <div className="checkbox-control">
                        <div className="checkbox">
                            <input type="checkbox"
                                   name=""
                                   value=""
                                   id="checkbox-id-1"
                                   className="checkbox__field"
                                   checked="checked" />

                                <label htmlFor="checkbox-id-1"
                                       className="checkbox__label">
                                    1
                                </label>
                        </div>

                        <div className="checkbox">
                            <input type="checkbox"
                                   name=""
                                   value=""
                                   id="checkbox-id-1"
                                   className="checkbox__field" />

                                <label htmlFor="checkbox-id-1"
                                       className="checkbox__label">
                                    2
                                </label>
                        </div>

                        <div className="checkbox">
                            <input type="checkbox"
                                   name=""
                                   value=""
                                   id="checkbox-id-2"
                                   className="checkbox__field" />

                                <label htmlFor="checkbox-id-2"
                                       className="checkbox__label">
                                    3
                                </label>
                        </div>

                        <div className="checkbox">
                            <input type="checkbox"
                                   name=""
                                   value=""
                                   id="checkbox-id-3"
                                   className="checkbox__field" />

                                <label htmlFor="checkbox-id-3"
                                       className="checkbox__label">
                                    4
                                </label>
                        </div>

                        <div className="checkbox">
                            <input type="checkbox"
                                   name=""
                                   value=""
                                   id="checkbox-id-3"
                                   className="checkbox__field" />

                                <label htmlFor="checkbox-id-3"
                                       className="checkbox__label">
                                    5
                                </label>
                        </div>
                    </div>

                    <div className="input">
                        <input type="text"
                               className="input__field"
                               required />

                            <span className="input__bar"></span>

                            <label className="input__label">
                                Ваш комментарий
                            </label>
                    </div>

                    <div className="input">
                        <input type="text"
                               className="input__field"
                               required />

                            <span className="input__bar"></span>

                            <label className="input__label">
                                Стоимость вывоза
                            </label>

                            <i className="text__icon">
                                Рублей
                            </i>
                    </div>

                    <button className="button
                               button--default">
                        Сохранить
                    </button>

                </form>
            </section>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        violationTypes: state.violationTypes,
        item: state.currentPlacemark
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        onEnterAddress(event) {
            dispatch(getCoordinates(event.target.value));
        },
        onSelectType(event) {
            dispatch(setViolationType(event.target.value));
        },
        onSetPlasticTrash(event) {
            dispatch(setPlasticTrash(event.target.checked));
        },
        onSetMetalTrash(event) {
            dispatch(setMetalTrash(event.target.checked));
        },
        onSetGlassTrash(event) {
            dispatch(setGlassTrash(event.target.checked));
        },
        onSetPaperTrash(event) {
            dispatch(setPaperTrash(event.target.checked));
        },
        onSetHouseholdTrash(event) {
            dispatch(setHouseholdTrash(event.target.checked));
        },
        onSetConstructionTrash(event) {
            dispatch(setConstructionTrash(event.target.checked));
        },
        onSetOtherTrash(event) {
            dispatch(setOtherTrash(event.target.checked));
        },
        onSetPicture(event) {
            dispatch(appendPicture(event));
        },
        onSetComment(event) {
            dispatch(setComment(event.target.value));
        },
        onDeletePicture(fileName) {
            dispatch(delPicture(fileName))
        },
        onSaveItem(item) {
            event.preventDefault();
            dispatch(saveItem(item))
        },
        onClose() {
            dispatch(closeAddNewItemCard());
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(EditItemCard);