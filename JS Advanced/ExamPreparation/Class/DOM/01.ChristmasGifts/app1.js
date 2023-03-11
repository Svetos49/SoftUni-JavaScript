function solution() {
    const [gifts, sent, discarded] = document.querySelectorAll('section ul');
    const input = document.querySelector('input');
    document.querySelector('button').addEventListener('click', addGift);

    function addGift() {
        const name = input.value;
        input.value = '';

        const element = e('li', name, 'gift');
        element.giftName = name;
        const sendBtn = e('button', 'Send', 'sendButton', () => dispatchGift(sent, name, element));
        const discardBtn = e('button', 'Discard', 'discardButton', () => dispatchGift(discarded, name, element));
        element.appendChild(sendBtn);
        element.appendChild(discardBtn);


        let inserted = false;
        for (let child of Array.from(gifts.children)) {
            if (child.textContent.localeCompare(element.textContent) == 1) {
                gifts.insertBefore(element, child);
                inserted = true;
                break;
            }
        }
        if (!inserted) {
            gifts.appendChild(element);
        }
    }

    function dispatchGift(target, name, gift) {
        gift.remove();
        const element = e('li', name, 'gift');
        target.appendChild(element);
    }

    function e(type, content, className, onClick) {
        const result = document.createElement(type);
        result.textContent = content;
        if (className) {
            result.className = className;
        }
        if (onClick) {
            result.addEventListener('click', onClick);
        }
        return result;
    }
}