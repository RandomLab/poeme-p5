'use strict';

//Force page refresh on hot reload
if (module.hot) {
    module.hot.accept(function () {
        window.location.reload();
    })
}

import Poeme from './imports/poeme';
new p5(Poeme);