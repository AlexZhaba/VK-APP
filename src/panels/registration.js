import React from 'react';
import {Panel, PanelHeader, PanelHeaderButton, platform, IOS, PanelHeaderSimple,
        Avatar} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import PropTypes from 'prop-types';
import styles from './registration.module.css';
import { FormLayout, FormLayoutGroup, Input } from '@vkontakte/vkui';

const osname = platform();
let Registration = (props) => {
    return (
        <Panel id={props.id}>
            <PanelHeader>
                Регистрация
            </PanelHeader>
            {props.fetchedUser &&
                <Avatar src={props.fetchedUser.photo_200}/>
            }
            <FormLayout>
                <FormLayoutGroup top="Пароль" bottom="Пароль может содержать только латинские буквы и цифры.">
                    <Input type="password" placeholder="Введите пароль" />
                    <Input type="password" placeholder="Повторите пароль" />
                </FormLayoutGroup>
            </FormLayout>
        </Panel>
    )
};
Registration.propTypes = {
    go: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    fetchedUser: PropTypes.shape({
        photo_200: PropTypes.string,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        city: PropTypes.shape({
            title: PropTypes.string,
        })
    })
};
export default Registration;