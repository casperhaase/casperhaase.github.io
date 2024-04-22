window.dataLayer = window.dataLayer || [];
pageView();

function pageView() {
    let width = window.innerWidth;
    let mediaquery = "";
    if (width > 768) {
        mediaquery = 'desktop'
    }
    else {
        mediaquery = 'mobile'
    }
    window.dataLayer.push(
        {
            'event': 'pageview',
            'user': {
                'logged_in': true,
                'account_id': 'abcdef',
                'type': 'consumer'
            },
            'application': {
                'id': 'main',
                'store': 'NL',
                'version': '3.0'
            },
            'site': {
                'language': 'nl-NL',
                'mediaquery': mediaquery,
                'environment': 'live'
            },
            'page': {
                'type': window.location.pathname,
            }
        }
    );
}

function viewItemList() {
    ecommerceReset();
    window.dataLayer.push(
        {
            'event': 'view_item_list',
            'ecommerce': {
                'items': items
            }
        }
    )
}

function selectItem() {
    ecommerceReset();
    window.dataLayer.push(
        {
            'event': 'select_item',
            'ecommerce': {
                'items': [items[itemNumber()]]
            }
        }
    )
}

function viewItem() {
    ecommerceReset();
    let itemViewed = copyItem();
    window.dataLayer.push(
        {
            'event': 'view_item',
            'value': itemViewed[0].price,
            'ecommerce': {
                'items': itemViewed
            }
        }
    )
}

function addToCart() {
    ecommerceReset();
    let itemAddedToCart = copyItem();
    itemAddedToCart[0].quantity = quantity();
    window.dataLayer.push(
        {
            'event': 'add_to_cart',
            'ecommerce': {
                'currency': 'EUR',
                'value': value(itemAddedToCart),
                'items': itemAddedToCart
            }
        }
    )
}

function addToWishlist() {
    ecommerceReset();
    let itemAddedToWishlist = copyItem();
    window.dataLayer.push(
        {
            'event': 'add_to_wishlist',
            'ecommerce': {
                'currency': 'EUR',
                'value': itemAddedToWishlist[0].price,
                'items': itemAddedToWishlist
            }
        }
    )
}

function removeFromCart() {
    ecommerceReset();
    let itemRemovedFromCart = copyItem();
    itemRemovedFromCart[0].quantity = quantity();
    window.dataLayer.push(
        {
            'event': 'remove_from_cart',
            'ecommerce': {
                'currency': 'EUR',
                'value': value(itemRemovedFromCart),
                'items': itemRemovedFromCart
            }
        }
    )
}

function viewCart() {
    ecommerceReset();
    let itemsInCart = copyItems();
    window.dataLayer.push(
        {
            'event': 'view_cart',
            'ecommerce': {
                'currency': 'EUR',
                'value': value(itemsInCart),
                'items': itemsInCart
            }
        }
    )
}

function beginCheckout() {
    ecommerceReset();
    let itemsInCart = copyItems();
    window.dataLayer.push(
        {
            'event': 'begin_checkout',
            'ecommerce': {
                'currency': 'EUR',
                'value': value(itemsInCart),
                'items': itemsInCart
            }
        }
    )
}

function addPersonalInfo(i) {
    ecommerceReset();
    let itemsInCart = copyItems();
    window.dataLayer.push(
        {
            'event': 'add_personal_info',
            'ecommerce': {
                'currency': 'EUR',
                'value': value(itemsInCart),
                'items': itemsInCart
            }
        }
    )
}


function addShippingInfo(i) {
    ecommerceReset();
    let itemsInCart = copyItems();
    window.dataLayer.push(
        {
            'event': 'add_shipping_info',
            'ecommerce': {
                'currency': 'EUR',
                'value': value(itemsInCart),
                'shipping_tier': 'PostNL',
                'items': itemsInCart
            }
        }
    )
}

function addPaymentInfo(i) {
    ecommerceReset();
    let itemsInCart = copyItems();
    window.dataLayer.push(
        {
            'event': 'add_payment_info',
            'ecommerce': {
                'currency': 'EUR',
                'value': value(itemsInCart),
                'shipping_tier': 'PostNL',
                'payment_type': 'IDEAL',
                'items': itemsInCart
            }
        }
    )
}

function purchase(i) {
    ecommerceReset();
    let itemsInCart = copyItems();
    window.dataLayer.push(
        {
            'event': 'purchase',
            'ecommerce': {
                'currency': 'EUR',
                'value': value(itemsInCart),
                'shipping_tier': 'PostNL',
                'payment_type': 'IDEAL',
                'items': itemsInCart,
                'transaction_id': transactionId(),
                'shipping': 1.50,
                'tax': value(itemsInCart) * 0.21 / 1.21
            },
            'enhanced_conversion_data': enhancedConversionData
        }
    )
}

function ecommerceReset() {
    window.dataLayer.push({
        'ecommerce': null
    })
}

function contact() {
    window.dataLayer.push({
        'event': 'contact',
        'method': 'email'
    });
}

function footerClick() {
    window.dataLayer.push({
        'event': 'footer_click',
        'navigation_text': 'Contact'
    });
}

function login() {
    window.dataLayer.push({
        'event': 'login',
        'account_id': 'abcdef',
        'account_type': 'consumer',
        'email': 'test@test.nl'
    });
}

function navigationUse() {
    window.dataLayer.push({
        'event': 'navigation_use',
        'navigation_text': 'Products',
        'navigation_level': 2
    });
}

function newsletterSubscription() {
    window.dataLayer.push({
        'event': 'newsletter_subscription',
        'form_id': 'footer',
        'email': 'test@test.nl'
    });
}

function popupClose() {
    window.dataLayer.push({
        'event': 'popup_close',
        'popup_id': 'abc'
    });
}

function popupCta() {
    window.dataLayer.push({
        'event': 'popup_cta',
        'popup_id': 'abc'
    });
}

function popupVisible() {
    window.dataLayer.push({
        'event': 'popup_visible',
        'popup_id': 'abc'
    });
}

function searchUse() {
    window.dataLayer.push({
        'event': 'search_use',
        'search_action': 'search',
        'search_query': 'Trui'
    });
}

function signUp() {
    window.dataLayer.push({
        'event': 'sign_up',
        'account_id': 'abcdef',
        'account_type': 'consumer',
        'email': 'test@test.nl'
    });
}

function textMessage() {
    window.dataLayer.push({
        'event': 'text_message',
        'message_text': 'Aanbieding 2 voor de prijs van 1'
    });
}

function validationMessage() {
    window.dataLayer.push({
        'event': 'validation_message',
        'validation_text': 'Invalid input',
        'validation_field': 'email'
    });
}

function photoLast() {
    window.dataLayer.push({
        'event': 'photo_last',
        'product': items[itemNumber()].item_id
    });
}

function photoNext() {
    window.dataLayer.push({
        'event': 'photo_next',
        'product': items[itemNumber()].item_id
    });
}

function photoPrevious() {
    window.dataLayer.push({
        'event': 'photo_previous',
        'product': items[itemNumber()].item_id
    });
}

function photoZoom() {
    window.dataLayer.push({
        'event': 'photo_zoom',
        'product': items[itemNumber()].item_id,
        'index': quantity()
    });
}

function reviewSubmit() {
    window.dataLayer.push({
        'event': 'review_submit',
        'product': items[itemNumber()].item_id,
        'review_rating': quantity()
    });
}

function filterUse() {
    window.dataLayer.push({
        'event': 'filter_use',
        'filter_group': 'category',
        'filter_option': 'Truien'
    });
}

function sortUse() {
    window.dataLayer.push({
        'event': 'sort_use',
        'sort_option': 'price_low_to_high'
    });
}

function noSearchResults() {
    window.dataLayer.push({
        'event': 'no_search_results',
        'search_query': 'ytiom'
    });
}

function headerClick() {
    window.dataLayer.push({
        'event': 'header_click',
        'navigation_text': 'logo'
    });
}

function buttonClick() {
    window.dataLayer.push({
        'event': 'button_click',
        'navigation_text': 'Ga verder'
    });
}

function faqClose() {
    window.dataLayer.push({
        'event': 'faq_open',
        'faq': 'Wat is de levertijd?'
    });
}

function faqOpen() {
    window.dataLayer.push({
        'event': 'faq_open',
        'faq': 'Wat is de levertijd?'
    });
}

function videoStart() {
    window.dataLayer.push({
        'event': 'video_start',
        'video': 'Tutorial'
    });
}

function videoFinish() {
    window.dataLayer.push({
        'event': 'video_finish',
        'faq': 'Tutorial?'
    });
}

function attachEventListenerById(id, handler) {
    let el = document.getElementById(id);
    if (el) {
        el.addEventListener('click', handler)
    }
}

attachEventListenerById('page_view', pageView);

attachEventListenerById('view_item_list', viewItemList);
attachEventListenerById('select_item', selectItem);
attachEventListenerById('view_item', viewItem);
attachEventListenerById('add_to_cart', addToCart);
attachEventListenerById('add_to_wishlist', addToWishlist);
attachEventListenerById('remove_from_cart', removeFromCart);
attachEventListenerById('view_cart', viewCart);
attachEventListenerById('begin_checkout', beginCheckout);
attachEventListenerById('add_personal_info', addPersonalInfo);
attachEventListenerById('add_shipping_info', addShippingInfo);
attachEventListenerById('add_payment_info', addPaymentInfo);
attachEventListenerById('purchase', purchase);

attachEventListenerById('contact', contact);
attachEventListenerById('footer_click', footerClick);
attachEventListenerById('login', login);
attachEventListenerById('navigation_use', navigationUse);
attachEventListenerById('newsletter_subscription', newsletterSubscription);
attachEventListenerById('popup_close', popupClose);
attachEventListenerById('popup_cta', popupCta);
attachEventListenerById('popup_visible', popupVisible);
attachEventListenerById('search_use', searchUse);
attachEventListenerById('sign_up', signUp);
attachEventListenerById('text_message', textMessage);
attachEventListenerById('validation_message', validationMessage);
attachEventListenerById('photo_last', photoLast);
attachEventListenerById('photo_next', photoNext);
attachEventListenerById('photo_previous', photoPrevious);
attachEventListenerById('photo_zoom', photoZoom);
attachEventListenerById('review_submit', reviewSubmit);
attachEventListenerById('filter_use', filterUse);
attachEventListenerById('sort_use', sortUse);
attachEventListenerById('no_search_results', noSearchResults);
attachEventListenerById('header_click', headerClick);
attachEventListenerById('button_click', buttonClick);
attachEventListenerById('faq_open', faqOpen);
attachEventListenerById('faq_close', faqClose);
attachEventListenerById('video_start', videoStart);
attachEventListenerById('video_finish', videoFinish);

attachEventListenerById('email', contact);


let items = [
    {
        'item_name': 'Broek',
        'item_id': 'b123',
        'currency': 'EUR',
        'price': 50.00,
        'item_variant': 'bleu',
        'item_brand': 'HOEC',
        'item_category': 'Kleding',
        'item_category2': 'Broeken',
        'item_category3': 'Jeans',
        'item_list_id': 'PLP',
        'item_list_name': 'Alle Kleding',
        'index': 0,
        'stock': true
    },
    {
        'item_name': 'Trui',
        'item_id': 'T123',
        'currency': 'EUR',
        'price': 65.00,
        'item_variant': 'red',
        'item_brand': 'HOEC',
        'item_category': 'Kleding',
        'item_category2': 'Tops',
        'item_category3': 'Truien',
        'item_list_id': 'PLP',
        'item_list_name': 'Alle Kleding',
        'index': 1,
        'stock': true
    },
    {
        'item_name': 'Schoen',
        'item_id': 'S123',
        'currency': 'EUR',
        'price': 99.00,
        'item_variant': '42',
        'item_brand': 'HOEC',
        'item_category': 'Kleding',
        'item_category2': 'Schoenen',
        'item_category3': 'Sneaker',
        'item_list_id': 'PLP',
        'item_list_name': 'Alle Kleding',
        'index': 2,
        'stock': true
    }
]

let enhancedConversionData = {
    'email': 'test@test.nl',
    'phone_number': '+31655885858',
    'address': {
        'fist_name': 'Test',
        'last_name': 'Test',
        'street': 'Diagon Alley 713',
        'city': 'London',
        'region': 'London (Greater London)',
        'postal_code': 'EC3V 1LU',
        'country': 'UK'
    }

}

function copyItem() {
    let copyItem = Object.assign({}, items[itemNumber()]);
    delete copyItem.index;
    return [copyItem];
}

function copyItems() {
    console.log('test');
    let copyItems = items.map(item => {
        let copyItem = Object.assign({}, item);
        delete copyItem.index;
        copyItem.quantity = quantity();
        return copyItem;
    });
    return copyItems;
}

function value(arr) {
    let value = 0;
    arr.forEach(obj => {
        value += obj.quantity * obj.price;
    });
    return value;
}


function itemNumber() {
    return Math.floor(Math.random() * 3);
}

function quantity() {
    return Math.floor(Math.random() * 10) + 1;
}

function transactionId() {
    return Math.floor(Math.random() * 999999);
}