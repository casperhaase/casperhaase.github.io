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
            'event': 'page_view',
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
    window.dataLayer.push(
        {
            'event': 'view_item_list',
            'ecommerce': {
                'items': items
            }
        }
    )
}

function selectItem(nr) {
    window.dataLayer.push(
        {
            'event': 'select_item',
            'ecommerce': {
                'items': items[nr]
            }
        }
    )
}

function viewItem(nr) {
    delete items[nr].index;
    window.dataLayer.push(
        {
            'event': 'view_item',
            'ecommerce': {
                'items': items[nr]
            }
        }
    )
}

function addToCart(nr, q) {
    let item = items[nr];
    delete item.index;
    item.quantity = q;
    let value = item.quantity * item.price;
    window.dataLayer.push(
        {
            'event': 'add_to_cart',
            'ecommerce': {
                'currency': 'EUR',
                'value': value,
                'items': item
            }
        }
    )
}

function addToWishlist(nr) {
    delete items[nr].index;
    window.dataLayer.push(
        {
            'event': 'add_to_wishlist',
            'ecommerce': {
                'currency': 'EUR',
                'value': items[nr].price,
                'items': items[nr]
            }
        }
    )
}

function removeFromCart(nr, q) {
    let item = items[nr];
    delete item.index;
    item.quantity = q;
    let value = item.quantity * item.price;
    window.dataLayer.push(
        {
            'event': 'remove_from_cart',
            'ecommerce': {
                'currency': 'EUR',
                'value': value,
                'items': item
            }
        }
    )
}

function viewCart(i) {
    let value = 0;
    i.forEach(el => {
        value += el.quantity * el.price;
    });
    window.dataLayer.push(
        {
            'event': 'view_cart',
            'ecommerce': {
                'currency': 'EUR',
                'value': value,
                'items': i
            }
        }
    )
}

function beginCheckout(i) {
    let value = 0;
    i.forEach(el => {
        value += el.quantity * el.price;
    });
    window.dataLayer.push(
        {
            'event': 'begin_checkout',
            'ecommerce': {
                'currency': 'EUR',
                'value': value,
                'items': i
            }
        }
    )
}

function addPersonalInfo(i) {
    let value = 0;
    i.forEach(el => {
        value += el.quantity * el.price;
    });
    window.dataLayer.push(
        {
            'event': 'add_personal_info',
            'ecommerce': {
                'currency': 'EUR',
                'value': value,
                'items': i
            }
        }
    )
}

function addShippingInfo(i) {
    let value = 0;
    i.forEach(el => {
        value += el.quantity * el.price;
    });
    window.dataLayer.push(
        {
            'event': 'add_shipping_info',
            'ecommerce': {
                'currency': 'EUR',
                'value': value,
                'shipping_tier': 'PostNL',
                'items': i
            }
        }
    )
}

function addPaymentInfo(i) {
    let value = 0;
    i.forEach(el => {
        value += el.quantity * el.price;
    });
    window.dataLayer.push(
        {
            'event': 'add_payment_info',
            'ecommerce': {
                'currency': 'EUR',
                'value': value,
                'shipping_tier': 'PostNL',
                'payment_type': 'IDEAL',
                'items': i
            }
        }
    )
}

function purchase(i) {
    let value = 0;
    i.forEach(el => {
        value += el.quantity * el.price;
    });
    let tax = value * 0.21;
    let tid = transactionId()
    window.dataLayer.push(
        {
            'event': 'purchase',
            'ecommerce': {
                'currency': 'EUR',
                'value': value,
                'shipping_tier': 'PostNL',
                'payment_type': 'IDEAL',
                'items': i,
                'transaction_id': tid,
                'shipping': 1.50,
                'tax': tax
            },
            'enhanced_conversion_data': enhancedConversionData
        }
    )
}

function contact() {
    window.dataLayer.push(
        {
            'event': 'contact',
            'method': 'email'
        }
    );
}

let pageViewEl = document.getElementById('page_view');
if (pageViewEl) {
    pageViewEl.addEventListener('click', pageView);
}

let viewItemListEl = document.getElementById('view_item_list');
if (viewItemListEl) {
    viewItemListEl.addEventListener('click', viewItemList);
}

let selectItemEl = document.getElementById('select_item');
if (selectItemEl) {
    selectItemEl.addEventListener('click', function () {
        let nr = itemNumber();
        selectItem(nr);
    }
    )
}

let viewItemEl = document.getElementById('view_item');
if (viewItemEl) {
    viewItemEl.addEventListener('click', function () {
        let nr = itemNumber();
        viewItem(nr);
    }
    )
}

let addToCartEl = document.getElementById('add_to_cart');
if (addToCartEl) {
    addToCartEl.addEventListener('click', function () {
        let nr = itemNumber();
        let q = quantity();
        addToCart(nr, q);
    }
    )
}

let addToWishlistEl = document.getElementById('add_to_wishlist');
if (addToWishlistEl) {
    addToWishlistEl.addEventListener('click', function () {
        let nr = itemNumber();
        addToWishlist(nr);
    }
    )
}

let removeFromCartEl = document.getElementById('remove_from_cart');
if (removeFromCartEl) {
    removeFromCartEl.addEventListener('click', function () {
        let nr = itemNumber();
        let q = quantity();
        removeFromCart(nr, q);
    }
    )
}

let viewCartEl = document.getElementById('view_cart');
if (viewCartEl) {
    viewCartEl.addEventListener('click', function () {
        let itemsInCart = items;
        itemsInCart.forEach(el => {
            el.quantity = quantity();
            delete el.index;
        });
        viewCart(itemsInCart);
    }
    )
}

let beginCheckoutEl = document.getElementById('begin_checkout');
if (beginCheckoutEl) {
    beginCheckoutEl.addEventListener('click', function () {
        let itemsInCart = items;
        itemsInCart.forEach(el => {
            el.quantity = quantity();
            delete el.index;
        });
        beginCheckout(itemsInCart);
    }
    )
}

let addPersonalInfoEl = document.getElementById('add_personal_info');
if (addPersonalInfoEl) {
    addPersonalInfoEl.addEventListener('click', function () {
        let itemsInCart = items;
        itemsInCart.forEach(el => {
            el.quantity = quantity();
            delete el.index;
        });
        beginCheckout(itemsInCart);
    }
    )
}

let addShippingInfoEl = document.getElementById('add_shipping_info');
if (addShippingInfoEl) {
    addShippingInfoEl.addEventListener('click', function () {
        let itemsInCart = items;
        itemsInCart.forEach(el => {
            el.quantity = quantity();
            delete el.index;
        });
        addShippingInfo(itemsInCart);
    }
    )
}

let addPaymentInfoEL = document.getElementById('add_payment_info');
if (addPaymentInfoEL) {
    addPaymentInfoEL.addEventListener('click', function () {
        let itemsInCart = items;
        itemsInCart.forEach(el => {
            el.quantity = quantity();
            delete el.index;
        });
        addPaymentInfo(itemsInCart);
    }
    )
}

let purchaseEl = document.getElementById('purchase');
if (purchaseEl) {
    purchaseEl.addEventListener('click', function () {
        let itemsInCart = items;
        itemsInCart.forEach(el => {
            el.quantity = quantity();
            delete el.index;
        });
        purchase(itemsInCart);
    }
    )
}

let contactEl = document.getElementById('contact');
if (contactEl) {
    contactEl.addEventListener('click', contact);
}

let emailEl = document.getElementById('email');
if (emailEl) {
    emailEl.addEventListener('click', contact);
}

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

function itemNumber() {
    return Math.floor(Math.random() * 3);
}

function quantity() {
    return Math.floor(Math.random() * 10) + 1;
}

function transactionId() {
    return Math.floor(Math.random() * 999999);
}