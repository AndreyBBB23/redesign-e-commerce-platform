window.addEventListener('load', init);

function init() {
    var instances = document.querySelectorAll('.products__count');
    Array.prototype.forEach.call(instances, initCount);
}

function initCount(instance) {
    if (!instance) return true;
    var id = instance.dataset.id;
    instance.querySelector('.products__count-plus').addEventListener('click', onClickPlus);
    instance.querySelector('.products__count-minus').addEventListener('click', onClickMinus);

    function onClickPlus() {
        if (!instance.classList.contains('is-active')) {
            instance.classList.add('is-active');
        }
        var total = Math.floor(instance.getAttribute('data-total')) + 1;
        instance.setAttribute('data-total', total);
        instance.querySelector('.products__count-number').innerHTML = total;
        //start GTM TRACKING esliklientov.net
        // window.dataLayer = window.dataLayer || [];
        // dataLayer.push({
        //     'event': 'ecommerce',
        //     'action': 'addToCart',
        //     'ecommerce': {
        //         'add': {
        //             'products': [{
        //                 'name': instance.getAttribute('data-name'),
        //                 'id': instance.getAttribute('data-id'),
        //                 'price': instance.getAttribute('data-price'),
        //                 'quantity': 1
        //             }]
        //         }
        //     }
        // });
        //end GTM TRACKING esliklientov.net
        window.basket.add(id);
    }

    function onClickMinus() {
        var total = Math.floor(instance.getAttribute('data-total')) - 1;

        if (total < 0) return;
        //start GTM TRACKING esliklientov.net
        // window.dataLayer = window.dataLayer || [];
        // dataLayer.push({
        //     'event': 'ecommerce',
        //     'action': 'removeFromCart',
        //     'ecommerce': {
        //         'remove': {
        //             'products': [{
        //                 'name': instance.getAttribute('data-name'),
        //                 'id': instance.getAttribute('data-id'),
        //                 'price': instance.getAttribute('data-price'),
        //                 'quantity': 1
        //             }]
        //         }
        //     }
        // });
        //end GTM TRACKING esliklientov.net
        window.basket.minus(id);

        if (total == 0) {
            instance.classList.remove('is-active');
            instance.setAttribute('data-total', total);
            instance.querySelector('.products__count-number').innerHTML = total;
        } else {
            instance.setAttribute('data-total', total);
            instance.querySelector('.products__count-number').innerHTML = total;
        }
    }
}