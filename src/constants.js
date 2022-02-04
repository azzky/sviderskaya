const Maindata = {
    url: 'https://azzky.ru', // todo
    author: 'Azzky', // todo
    socials: {
        instagram: 'https://www.instagram.com/azzky_gallery/', // todo
        linkedin: 'https://www.linkedin.com/u/azzky', // todo
        telegram: 'https://t.me/shibaribyazzky', // todo
        twitter: 'https://twitter.com/AzzkyDemiurg' // todo
    },
}


export const PageData = {
    en: {
        shibari: {
            h1: 'Shibari by Azzky',
            title: 'Shibari by Azzky',
            description: 'I\'m Azzky and I\'m doing shibari since 2017. If you\'re looking for a shibari shooting or learning in Belarus, just contact me.',
            text: 'Shibari is a traditional Japanese art of rope bondage. I\'ve been doing it since 2017 and ready for cosplay and fashion shooting collaboration, events performing and individual training. If you are interested to work with - just'
        },
        contact: {
            h1: 'Get in touch',
            title: 'Contacts | Shibari by Azzky',
            description: '',
            text: ''
        }
    },
    ru: {
        shibari: {
            h1: 'Шибари от Azzky',
            title: 'Шибари от Azzky',
            description: 'Я Azzky и я занимаюсь шибари с 2017 года. Если тебя интересуют съемки или обучение шибари в Минске, то свяжись со мной.',
            text: 'Шибари - традиционное японское искусство веревочного бондажа. Я занимаюсь им с 2017 года и сейчас готов к коллаборации для косплей и фэшн съемок, а также к выступлениям на мероприятиях и обучению в индивидуальной форме. Если тебя интересуют съемки или обучение шибари в Минске, то'
        },
        contact: {
            h1: 'Напиши мне',
            title: 'Контакты | Шибари от Azzky',
            description: '',
        }
    }
}

export default Maindata

export const MobileWidth = 768

export const menuItems = [
    {
        name: 'home',
        runame: 'главная',
        link: '/'
    },
    {
        name: 'portfolio',
        runame: 'портфолио',
        link: '/portfolio'
    },
    {
        name: 'contact',
        runame: 'контакты',
        link: '/contact'
    }
]

export const config404 = {
    title: '404',
    description: {
        'en-US': 'Oops! Page not found.',
        'ru': 'Ой! Здесь ничего нет.'
    },
    buttonText: {
        'en-US': 'Home page',
        'ru': 'На главную'
    }
}

export const configContact = {
    regionText: {
        'en-US': ' Minsk, Belarus',
        'ru': ' Минск, Беларусь'
    },
    promoText: {
        'en-US': 'If you need me as a shibari master for photo/video shooting or looking for shibari classes just contact me via form',
        'ru': 'Если вам нужен шибари мастер для съемок или обучения, свяжитесь со мной через форму'
    },
    followMeText: {
        'en-US': 'Follow me on:',
        'ru': 'Подпишись на меня в:'
    },
    nameLabel: {
        'en-US': 'Name',
        'ru': 'Имя'
    },
    emailLabel: {
        'en-US': 'Email',
        'ru': 'Email'
    },
    messageLabel: {
        'en-US': 'Message',
        'ru': 'Сообщение'
    },
    sendbutton: {
        'en-US': 'Send',
        'ru': 'Отправить'
    }
}

export const configSuccess = {
    title: {
        'en-US': 'Form submitted - thank you!',
        'ru': 'Форма отправлена - спасибо!'
    },
    description: {
        'en-US': 'You will be contacted shortly',
        'ru': 'Я скоро с вами свяжусь'
    },
    buttonText: {
        'en-US': 'Home page',
        'ru': 'Назад домой'
    }
}