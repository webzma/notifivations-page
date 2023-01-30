// notification colletions
const notificationColletions = 
[
  {
    avatar: './assets/images/avatar-mark-webber.webp',
    name: 'Mark Webber',
    date: '1m ago',
    type: 'link',
    unread: true,
    nDescription: ' reacted to your recent post',
    meta: {
      linkType: 'post',
      linkText: ' My tournament today!', 
    }
  },
  {
    avatar: './assets/images/avatar-angela-gray.webp',
    name: 'Angela Gray',
    date: '5m ago',
    type:'standar',
    unread: true,
    nDescription: ' followed you',
    meta: {
      linkType: null,
      linkText: null, 
    }
  },
  {
    avatar: './assets/images/avatar-jacob-thompson.webp',
    name: 'Jacob Thompson',
    date: '1 day ago',
    type: 'standar',
    unread: true,
    nDescription: ' has joined your group',
    meta: {
      linkType: 'group',
      linkText: ' Chess Club'
    }
  },
  {
    avatar: './assets/images/avatar-rizky-hasanuddin.webp',
    name: 'Risky Hassanuddin',
    date: '5 days ago',
    type: 'message',
    unread: false,
    nDescription: ' has joined your group',
    meta: {
      linkType: null,
      linkText: null,
    }
  },  
  {
    avatar: './assets/images/avatar-kimberly-smith.webp',
    name: 'Kimberly Smith',
    date: '1 week ago',
    type: 'picture',
    unread: false,
    nDescription: ' commented on your picture',
    meta: {
      linkType: null,
      linkText: null,
    }
  },
  {
    avatar: './assets/images/avatar-nathan-peterson.webp',
    name: 'Nathan Peterson',
    date: '2 weeks ago',
    type: 'link',
    unread: false,
    nDescription: ' reacted to your recent post',
    meta: {
      linkType: 'post',
      linkText: '5 end-game strategies to increase your win rate'
    }
  },
  {
    avatar: './assets/images/avatar-rizky-hasanuddin.webp',
    name: 'Ana Kim',
    date: '2 weeks ago',
    type: 'link',
    unread: false,
    nDescription: ' left the group',
    meta: {
      linkType: 'group',
      linkText: ' Chess Club'
    }
  },
];

// la función principal que toma los elementos html
function main() { 
  const btnMarkAsRead = document.querySelector(".header__link");
  // escuchamos cuando se hace un click en el botón
  btnMarkAsRead.addEventListener("click", MarkAsReadNotifications);

  const fatherElement = document.querySelector('.notifications');

  for (let i = 0; i <= 6; i++) {
    fatherElement.appendChild(createNotifications({
      name: notificationColletions[i].name,
      avatar: notificationColletions[i].avatar,
      date: notificationColletions[i].date,
      type: notificationColletions[i].type,
      unread: notificationColletions[i].unread,
      nDescription: notificationColletions[i].nDescription,
      linkType: notificationColletions[i].meta.linkType,
      linkText: notificationColletions[i].meta.linkText,
    }));
  }
}

// marcar las notificaciones como leídas
function MarkAsReadNotifications() {
  const notificationsUnRead = document.querySelectorAll(".notification");

  // con la función Object.values convertí los elementos nodos en un array para usar su métodos
  const notificationsArray = Object.values(notificationsUnRead);
  
  // con la función 'some' podemos retornar los elementos que cumple la condición
  notificationsArray.some(findElements);

  // recorremos los elementos y si cumplen la condición efectuaremos un cambio, en este caso, remover la clase 'notification-unread'
  function findElements(elem) {
    if (elem.classList.contains('notification-unread')) {
      elem.classList.remove('notification-unread');
    } 
  }
}

// crear los elementos (notificaciones)
function createNotifications({
  name,
  avatar,
  nDescription,
  date,
  type,
  linkText, 
  linkType,
  unread,
}) {
  // esta función encarga de crear las notificaciones de manera programatica con JavaScript
  const notificationElement = document.createElement('article');
  notificationElement.classList.add("notification");

  const avatarElement = document.createElement('img');
  avatarElement.src = avatar;
  avatarElement.alt = 'user-avatar';
  avatarElement.classList.add('avatar');

  const notificationContent = document.createElement('div');
  notificationContent.classList.add('notification__content');

  const nameElement = document.createElement('h2');
  nameElement.classList.add('notification__title');
  nameElement.textContent = name;

  const notificationDescription = document.createElement('span');
  notificationDescription.classList.add('notification__description');
  notificationDescription.textContent = nDescription;

  const linkElement = document.createElement('a');
  linkElement.href = '#';
  linkElement.classList.add('link');
  linkElement.textContent = linkText;

  const dateElement = document.createElement('p');
  dateElement.classList.add('notification__date');
  dateElement.textContent = date;

  nameElement.append(notificationDescription);

  notificationDescription.appendChild(linkElement);

  notificationContent.append(nameElement, dateElement);

  notificationElement.appendChild(avatarElement);
  notificationElement.appendChild(notificationContent);

  if (unread == true) {
    notificationElement.classList.add('notification-unread');
    console.log(notificationElement.className);
  }

  if (linkType == 'group') {
    linkElement.classList.add('link-group');
  }

  if (type == 'message') {
    const messageElement = document.createElement('p');
    messageElement.classList.add('notification__message');

    messageElement.textContent =`Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and
    I'm already having lots of fun and improving my game.`;
    
    notificationContent.appendChild(messageElement);
  }

  // evaluar si nuestra notification es un unread o no
  //if (notification.unread) article.classList.add('notification--unread')

  return notificationElement;
}

// esperar que el documento se cargué completamente
document.addEventListener("DOMContentLoaded", main);