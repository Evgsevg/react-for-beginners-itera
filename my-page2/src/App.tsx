import React, { Component } from "react";

import eventBus from './eventbus';

/*
метод on прикрепляет событие к объекту документа, 
метод dispatch может инициировать событие вместе 
с некоторыми данными,
 метод remove может разобщать событие, чтобы предотвратить утечку памяти.
Используя шину событий, отправляю событие userData вместе с пользовательскими данными
 из состояния внутри метода жизненного цикла componentDidMount(). 
 В компоненте Account мы слушаем событие userData и, когда это событие сработает, установливаю данные пользователя
  в необходимое состояние.
******************************************************************************************
В отличие от лекционного примера тут нужно было передавать пользовательские данные в 
качестве реквизита компоненту Account.
Передавать данные JSON можно другим компонентам, используя реквизиты или шину событий; 
Необходимо использовать реквизиты, чтобы React мог отслеживать данные и связь между компонентами. 
Использование шины событий в некоторых случаях может привести к непредсказуемым результатам. 
Шину событий использую только в случае взаимодействия между несколькими независимыми компонентами
*/

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {

      user: {

        id: 12,
        firstName:"John",
        shortBiography: "takoe",
        publicContact: "asadssafgfdgfdg",

      },

    };

  }


  componentDidMount() {

    eventBus.dispatch("userData", this.state.user);

  }


  render() {

    return (

      <div>

        <Account />

      </div>

    );

  }

}


class Account extends Component {

  constructor(props) {

    super(props);

    this.state = {

      user: {},

    };

  }


  componentDidMount() {

    eventBus.on("userData", (user) => {

      this.setState({ user });

    });

  }


  render() {

    const { user } = this.state; // same as -> const user = props.user;

    return (

      <div>

        <span>
        
          Profile - {user.firstName} {user.shortBiography}{user.publicContact}

        </span>

        <span>ID - {user.id}</span>

      </div>

    );

  }

}