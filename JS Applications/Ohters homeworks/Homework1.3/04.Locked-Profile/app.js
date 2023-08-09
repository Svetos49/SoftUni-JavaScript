async function lockedProfile() {
  const mainContainer = document.getElementById('main');

  const prodilesURL = 'http://localhost:3030/jsonstore/advanced/profiles';

  let res = await fetch(prodilesURL);
  let data = await res.json();

  //console.log(data);

  const profiles = [];

  for (const _id in data) {
    profiles.push(data[_id]);
  }
  mainContainer.innerHTML = '';
  createProfileCards(profiles);

  // DO NOT BE SCARED! IT'S EASY!
  function createProfileCards(profiles) {
    profiles.forEach((p, index) => {
      let i = index + 1;
      let result = e('div', { className: 'profile' }, [
        e('img', { src: './iconProfile2.png', className: 'userIcon' }),
        e('label', null, 'Lock'),
        e('input', {
          type: 'radio',
          name: `user${i}Locked`,
          value: 'lock',
          checked: '',
        }),
        e('label', null, 'Unlock'),
        e('input', {
          type: 'radio',
          name: `user${i}Locked`,
          value: 'unlock',
        }),
        e('br'),
        e('hr'),
        e('label', null, 'Username'),
        e('input', {
          type: 'text',
          name: `user${i}Username`,
          value: `${p.username}`,
          disabled: '',
          readonly: '',
        }),
        e('div', { className: 'hiddenInfo' }, [
          e('hr'),
          e('label', null, 'Email:'),
          e('input', {
            type: 'email',
            name: `user${i}Email`,
            value: `${p.email}`,
            disabled: '',
            readonly: '',
          }),
          e('label', null, 'Age:'),
          e('input', {
            type: 'email',
            name: `user${i}Age`,
            value: `${p.age}`,
            disabled: '',
            readonly: '',
          }),
        ]),
        e('button', { onClick: hiddenInfoHandler }, 'Show more'),
      ]);

      mainContainer.appendChild(result);
    });
  }
  //console.log(profiles);

  function hiddenInfoHandler(ev) {
    //console.log(`Hello there ${ev.currentTarget.parentElement.querySelector('.profile input[type="text"]').value}!`);
    const currentProfile = ev.currentTarget.parentElement;
    const isLocked = currentProfile.querySelector(
      '.profile  input[value="lock"]'
    ).checked;
    //console.log(isLocked);
    const hiddenInfoElement = currentProfile.querySelector('div');

    if (isLocked) {
      return;
    }

    if (!isLocked && hiddenInfoElement.classList.contains('hiddenInfo')) {
      hiddenInfoElement.classList.remove('hiddenInfo');
      currentProfile.querySelector('button').textContent = 'Hide it';
    } else if (!hiddenInfoElement.classList.contains('hiddenInfo')) {
      hiddenInfoElement.classList.add('hiddenInfo');
      currentProfile.querySelector('button').textContent = 'Show more';
    }
  }

  function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
      if (attr.substring(0, 2) == 'on') {
        result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
      } else {
        if (value === '') {
          result.setAttribute(attr, '');
        } else {
          result[attr] = value;
        }
      }
    }

    content = content.reduce(
      (a, c) => a.concat(Array.isArray(c) ? c : [c]),
      []
    );

    content.forEach((e) => {
      if (typeof e == 'string' || typeof e == 'number') {
        const node = document.createTextNode(e);
        result.appendChild(node);
      } else {
        result.appendChild(e);
      }
    });

    return result;
  }
}
