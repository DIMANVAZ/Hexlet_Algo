// файл для демонстрации паттерна Состояние (State) на примере телефона и 3-х его состояний:
// выключен совсем, выключен экран и экран активен

class MobileScreen {
    constructor() {
        // Список состояний нужен для переключений между ними
        // Иначе возможно появление циклических зависимостей внутри состояний
        this.states = {
            PowerOff: PowerOffState,
            ScreenDisabled: ScreenDisabledState,
            ScreenOn: ScreenOnState,
        }
        // Начальное состояние
        // Внутрь передается текущий объект
        // Это нужно для смены состояний (примеры ниже)
        this.state = new this.states.PowerOff(this);
    }

    powerOn() {
        // Предыдущее состояние нас не волнует
        // Все данные хранятся в самом экране
        // Объекты-состояния не имеют своих данных
        this.state = new this.states.ScreenDisabled(this);
    }

    touch() {
        this.state.touch();
    }

    swipe() {
        this.state.swipe();
    }
}

// Обратите внимание что с точки зрения внешнего кода (пользователя экрана) ничего не изменилось.

class PowerOffState {
    constructor(screen) {
        this.screen = screen;
    }

    touch() {
        // ничего не происходит
    }

    swipe() {
        // ничего не происходит
    }
}

class ScreenDisabledState {
    constructor(screen) {
        this.screen = screen;
    }

    touch() {
        // Включаем экран. В конструктор нужно передать сам экран.
        this.screen.state = new this.screen.states.ScreenOn(this.screen);
        // Оповещаем текущую программу об активации
        this.screen.notify('touch');
    }

    swipe() {
        // ничего не происходит
    }
}

class ScreenOnState {
    constructor(screen) {
        this.screen = screen;
    }

    touch() {
        this.screen.notify('touch');
    }

    swipe() {
        this.screen.notify('swipe');
    }
}