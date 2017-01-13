(function() {
    'use strict';

    angular
        .module('jhipdemoApp')
        .config(bootstrapMaterialDesignConfig);

    compileServiceConfig.$inject = [];

    function bootstrapMaterialDesignConfig() {
        $.material.init();

    }
})();
