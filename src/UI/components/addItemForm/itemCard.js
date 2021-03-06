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


class ItemCard extends Component {
    render() {
        return (
            <section id=""
                     className="modal">

                <div className="wrapper" style={{'paddingBottom': 0}}>
                    <div className="form-header">
                        <h3 className="modal__title">
                            Сообщить
                            <br />о нарушении
                        </h3>

                        <a href="#" onClick={this.props.onClose}
                           rel="nofollow"
                           className="link
                              link--close">
                            <i className="material-icons">
                                close
                            </i>
                        </a>
                    </div>
                </div>



                <form className="form" onSubmit={() => this.props.onSaveItem(this.props.item)}>

                    <div className="input">
                        <input type="text"
                               className="input__field"
                               value={this.props.item.address}
                               onChange={() => this.props.onEnterAddress(event)}
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
                        <select
                            className="select__field"
                            value={this.props.item.violationType}
                            onChange={this.props.onSelectType}>
                            {this.props.violationTypes.map(
                                (violationType, index) => <option className="select__option" key={index}>{violationType}</option>
                            )}
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
                               checked={this.props.item.plastic}
                               onChange={this.props.onSetPlasticTrash}
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
                               checked={this.props.item.metal}
                               onChange={this.props.onSetMetalTrash}
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
                               checked={this.props.item.glass}
                               onChange={this.props.onSetGlassTrash}
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
                               checked={this.props.item.paper}
                               onChange={this.props.onSetPaperTrash}
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
                               checked={this.props.item.household}
                               onChange={this.props.onSetHouseholdTrash}
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
                               checked={this.props.item.construction}
                               onChange={this.props.onSetConstructionTrash}
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
                               checked={this.props.item.other}
                               onChange={this.props.onSetOtherTrash}
                               className="checkbox__field" />

                            <label htmlFor="checkbox-id-7"
                                   className="checkbox__label">
                                Прочее
                            </label>
                    </div>

                    <div className="button
                            button--outline
                            button--upload">
                        <input
                            multiple
                            type="file"
                            className="button__field"
                            onChange={this.props.onSetPicture}
                        />

                            <i className="material-icons
                              button__icon">
                                add_photo_alternate
                            </i>

                            <span className="button__text">Прикрепить файл</span>
                    </div>

                    {this.props.item.picture.map(
                        (fileName, index) => (
                                <div key={index} className="downloaded">
                                    <div className="downloaded-item">
                                        <a href="#" onClick={() => this.props.onDeletePicture(fileName[1])}
                                           className="link">
                                            <i className="material-icons
                                      link__icon">
                                                close
                                            </i>
                                        </a>

                                        <span className="downloaded-item__file-name">{fileName[0]}</span>
                                    </div>
                                </div>
                            )
                    )}

                    <div className="textarea">
                    <textarea
                        name=""
                        value={this.props.item.comment}
                        className="textarea__field"
                        placeholder="Введите комментарий"
                        onChange={this.props.onSetComment}>
                    </textarea>

                        <span className="textarea__bar"></span>
                    </div>

                    <input type="submit" className="button button--default" placeholder="Отправить"/>

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
            dispatch(saveItem(item));
            dispatch(closeAddNewItemCard());
        },
        onClose() {
            dispatch(closeAddNewItemCard());
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ItemCard);